import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

import { google } from 'googleapis';

import environments from '@app/configs/environments';
import { CompanyJsonDto } from '@app/models/dtos/customDomain';
import { GoogleCredentialsDto } from '@app/models/dtos/google';

const DashboardContainer = dynamic(() => import('@app/containers/dashboard/DashboardContainer'), { ssr: false });
const Banner = dynamic(() => import('@app/components/landingpage/Banner'), { ssr: false });
const Features = dynamic(() => import('@app/components/landingpage/Features'), { ssr: false });
const Footer = dynamic(() => import('@app/components/landingpage/Footer'), { ssr: false });
const Navbar = dynamic(() => import('@app/components/landingpage/Navbar'), { ssr: false });
const Payment = dynamic(() => import('@app/components/landingpage/Payment'), { ssr: false });

interface IHome {
    hasCustomDomain: boolean;
    companyJson: CompanyJsonDto | null;
}

const Home = ({ hasCustomDomain, companyJson }: IHome) => {
    if (hasCustomDomain) return <DashboardContainer companyJson={companyJson} />;

    return (
        <>
            <Navbar />
            <Banner />
            {/*<WaitlistForm/>*/}
            <Features />
            {/*<TimelineContainer/>*/}
            <Payment />
            {/*<ContactUs/>*/}
            <Footer />
        </>
    );
};

export default Home;

export async function getServerSideProps({ locale }: any) {
    const hasCustomDomain = !!environments.IS_CUSTOM_DOMAIN;
    let companyJson: CompanyJsonDto | null = null;

    if (hasCustomDomain) {
        const credentials: GoogleCredentialsDto = JSON.parse(environments.GOOGLE_CREDENTIALS);

        const oauth2Client = new google.auth.OAuth2(credentials.installed.client_id, credentials.installed.client_secret, credentials.installed.redirect_uris);

        const forms = google.forms({
            version: 'v1',
            auth: oauth2Client
        });
        const drive = google.drive({
            version: 'v3',
            ...credentials
        });

        drive.files.list({
            auth: oauth2Client
        });

        // console.log(
        //     drive.files.list({
        //         auth: oauth2Client,
        //         spaces: 'drive',
        //         fields: '*',
        //         q: "mimeType='application/vnd.google-apps.form'"
        //     })
        // );

        const driveDiscovery = google.discovery({
            version: 'v1',
            auth: oauth2Client
        });

        // drive.drives
        //     .list({
        //         auth: oauth2Client,
        //         q: "mimeType='application/vnd.google-apps.form'"
        //     })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => console.log(err));

        // console.log(
        //     drive.files.list({
        //         auth: oauth2Client,
        //         spaces: 'drive',
        //         fields: '*',
        //         q: "mimeType='application/vnd.google-apps.vendors'"
        //     })
        // );
    }

    try {
        if (hasCustomDomain && !!environments.CUSTOM_DOMAIN_JSON) {
            const json = await fetch(environments.CUSTOM_DOMAIN_JSON).catch((e) => e);
            companyJson = (await json.json().catch((e: any) => e)) ?? null;
        }
    } catch (err) {
        companyJson = null;
        console.error(err);
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], null, ['en', 'de'])),
            hasCustomDomain,
            companyJson
        }
    };
}
