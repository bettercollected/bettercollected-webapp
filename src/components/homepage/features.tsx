import React from 'react';

import { useTranslation } from 'next-i18next';

import featureImage from '@app/assets/images/Diagram.png';
import brand from '@app/assets/svgs/brand.svg';
import builder from '@app/assets/svgs/builder.svg';
import gdpr from '@app/assets/svgs/gdpr.svg';
import portal from '@app/assets/svgs/portal.svg';
import LandingPageSectionContainer from '@app/components/landingpage/LandingPageSectionContainer';
import Image from '@app/components/ui/image';

import AnchorLink from '../ui/links/anchor-link';

export default function Features() {
    const { t } = useTranslation();

    return (
        <LandingPageSectionContainer sectionId="features">
            <div className="w-full h-full flex flex-col justify-center items-center my-10">
                <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-blue-500 sm:text-5xl sm:leading-none md:text-6xl">Features</h1>
                <div className="flex justify-center mt-6 md:mt-12 w-full h-full mb-10 md:w-4/5">
                    <Image src={featureImage} alt="Features" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4 gap-6 mb-6">
                <div className="bg-white flex flex-col md:flex-row items-center md:items-start h-full gap-6 p-6 transition drop-shadow-md hover:drop-shadow-lg rounded-lg">
                    <div className="aspect-square h-[140px] w-[140px]">
                        <Image src={portal} alt="Feature 1" width={140} height={140} />
                    </div>
                    <div className="flex flex-col justify-start h-full">
                        <p className="text-xl md:text-2xl font-semibold text-dark mb-4 p-0">Integrate with your favourite form builder</p>
                        <p className="text-base text-grey m-0 p-0 w-full">
                            Better collected integrates with your favourite form solution like Google forms. All your forms and form responses are imported and a nice dashboard is prepared for your automatically.
                        </p>
                    </div>
                </div>
                <div className="bg-white flex flex-col md:flex-row items-center md:items-start h-full gap-6 p-6 transition drop-shadow-md hover:drop-shadow-lg rounded-lg">
                    <div className="aspect-square h-[140px] w-[140px]">
                        <Image src={builder} alt="Feature 2" width={140} height={140} />
                    </div>
                    <div className="flex flex-col justify-start h-full">
                        <p className="text-xl md:text-2xl font-semibold text-dark mb-4 p-0">Portal for form responders</p>
                        <p className="text-base text-grey m-0 p-0 w-full">Better collected provides a data portal where any user can verify their email address and view all their collected data associated to the verified email.</p>
                    </div>
                </div>
                <div className="bg-white flex flex-col md:flex-row items-center md:items-start h-full gap-6 p-6 transition drop-shadow-md hover:drop-shadow-lg rounded-lg">
                    <div className="aspect-square h-[140px] w-[140px]">
                        <Image src={brand} alt="Feature 3" width={140} height={140} />
                    </div>
                    <div className="flex flex-col justify-start h-full">
                        <p className="text-xl md:text-2xl font-semibold text-dark mb-4 p-0">Custom domain and form URLs</p>
                        <p className="text-base text-grey m-0 p-0 w-full">
                            You can use your own (sub) domain and create a nice profile with selected forms. You can also customise the form URLs with your own domain instead of random looking Google form URLs.
                        </p>
                        <AnchorLink className="text-blue-500" href="https://forms.bettercollected.com">
                            See an example
                        </AnchorLink>
                    </div>
                </div>
                <div className="bg-white flex flex-col md:flex-row items-center md:items-start h-full gap-6 p-6 transition drop-shadow-md hover:drop-shadow-lg rounded-lg">
                    <div className="aspect-square h-[140px] w-[140px]">
                        <Image src={gdpr} alt="Feature 4" width={140} height={140} />
                    </div>
                    <div className="flex flex-col justify-start h-full">
                        <p className="text-xl md:text-2xl font-semibold text-dark mb-4 p-0">Email validation (soon)</p>
                        <p className="text-base text-grey m-0 p-0 w-full">With email validation, you&apos;ll no longer need to worry about spam responses. All genuine verified responses. How cool is that?</p>
                    </div>
                </div>
            </div>
        </LandingPageSectionContainer>
    );
}
