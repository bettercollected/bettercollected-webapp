import type {NextPage} from "next";
import Navbar from "@app/components/landingpage/Navbar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Banner from "@app/components/landingpage/Banner";
import Features from "@app/components/landingpage/Features";
import WaitlistForm from "@app/components/landingpage/WaitlistForm";
import ContactUs from "@app/components/landingpage/ContactUs";
import TimelineContainer from "@app/components/landingpage/TimelineContainer";
import Payment from "@app/components/landingpage/Payment";

const Home: NextPage = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <div className={"p-48 pt-5 mb-40"}>
                <WaitlistForm/>
                <Features/>
                <TimelineContainer/>
                <Payment/>
                <ContactUs/>
            </div>
        </>
    );
};

export default Home;

export async function getServerSideProps({locale}: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"], null, ["en", "de"])),
        },
    };
}
