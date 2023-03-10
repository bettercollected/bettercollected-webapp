/**
 * Created By: Rupan Chaulagain
 * Date: 2022-10-18
 * Time: 12:20
 * Project: formintegratorwebapp
 * Organization: Sireto Technology
 */
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Typography } from '@mui/material';

import LandingPageSectionContainer from '@app/components/landingpage/LandingPageSectionContainer';
import HeadingRenderer from '@app/components/ui/HeadingRenderer';

export default function TimelineContainer() {
    return (
        <LandingPageSectionContainer sectionId={'timeline'}>
            <HeadingRenderer>Timeline</HeadingRenderer>
            <Timeline position={'alternate'}>
                <TimelineItemRenderer time={'2022-07-01'} title={'Setup Project'} description={'Both frontend and backend development started'} icon={<CodeOutlinedIcon />} />
                <TimelineItemRenderer time={'2022-07-02'} title={'Figma design'} description={'Wireframes started'} icon={<BrushOutlinedIcon />} />
                <TimelineItemRenderer time={'2022-07-02'} title={'Backend development'} description={'Endpoint for the waitlist'} icon={<DnsOutlinedIcon className={'text-green'} />} />
            </Timeline>
        </LandingPageSectionContainer>
    );
}

function TimelineItemRenderer(props: any) {
    const { time, title, description, icon } = props;
    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0', justifyContent: 'center', alignItems: 'center' }} align="right" variant="body2" color="text.secondary">
                {time}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>{icon}</TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant={'h6'} component={'span'}>
                    {title}
                </Typography>
                <Typography className={'text-gray-500'}>{description}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
}
