import { useState } from 'react';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import bettercollected from '@app/assets/svgs/bettercollected.svg';
import Iframe from '@app/components/landingpage/Iframe';
import LandingPageSectionContainer from '@app/components/landingpage/LandingPageSectionContainer';
import ButtonRenderer from '@app/components/ui/ButtonRenderer';
import FormInput from '@app/components/ui/FormInput';
import environments from '@app/configs/environments';
import FlexRowContainer from '@app/containers/landingpage/FlexRowContainer';
import useDimension from '@app/lib/hooks/use-dimension';

/**
 * Created By: Rupan Chaulagain
 * Date: 2022-10-13
 * Time: 14:34
 * Project: formintegratorwebapp
 * Organization: Sireto Technology
 */

export default function Banner() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');

    const [iFrame, setIframe] = useState(false);
    const router = useRouter();

    const handleChange = (id: string, value: any) => {
        setEmail(value);
    };

    const handleSubmit = () => {
        router.push('/waitlistForms');
    };

    const shouldButtonDisable = () => {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return !email.match(pattern);
    };

    return (
        <>
            {iFrame && <Iframe formUrl={`${environments.WAITLIST_FORM_URL}&emailAddress=${email}`} handleClose={() => setIframe(false)} />}
            <div className={'sm:bg-white'}>
                {/* <div className={"sm:bg-white lg:bg-[url('/background-8.svg')] lg:bg-no-repeat lg:bg-cover"}> */}
                <LandingPageSectionContainer sectionId={'banner'}>
                    <FlexRowContainer>
                        <div className={'w-full md:w-full lg:w-1/2 flex-2 mt-10'}>
                            <div className={'font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-roboto mb-3'}>{t('SLOGAN_TITLE')}</div>
                            <div className={'font-roboto font-display text-gray-400 text-md md:text-lg lg:text-xl mb-6'}>{t('SLOGAN_DESCRIPTION')}</div>

                            <div className={'flex flex-col lg:flex-row lg:items-center gap-4'}>
                                <a href="/waitlist" target="_blank">
                                    <div className={'cursor-pointer shadow-md hover:bg-[#4da2ff] text-center p-3 mb-2 md:p-4 md:pt-2 md:pb-2 text-white rounded-md bg-[#007AFF]'}>{t('BECOME_A_BETTER_COLLECTOR')}</div>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1">
                            <Image src={bettercollected} className={'rounded-lg'} alt={'Forms'} width={900} />
                        </div>
                    </FlexRowContainer>
                </LandingPageSectionContainer>
            </div>
        </>
    );
}
