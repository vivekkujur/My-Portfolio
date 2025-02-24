import { Box, Grid2 } from '@mui/material'
import React from 'react'
import { experience } from '../../portfolio'
import { grey } from '@mui/material/colors'
import '../Experience/Experience.css'
import { TimelineDot } from '@mui/lab'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

function Experience() {

    return (
        <Box id='experience' sx={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>

            <h1 className='title_styles'>Experience</h1>




            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.1,
                    },
                }}
            >
                {experience.map((exp, index) => (


                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                           
                           <h3>{exp.time}</h3>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector color='black' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='grid_items'>
                                <h3>{exp.company}</h3>
                                <h4>{exp.role}</h4>
                                <p className='desc_style'>{exp.description}</p>

                            </div>
                        </TimelineContent>
                    </TimelineItem>

                ))}
            </Timeline>




            {/* <Grid2 container spacing={5} >
                {experience.map((exp,index)=> (
                        <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4}}>
                            <div className='grid_items'>
                            <h3>{exp.company}</h3>
                            <h4>{exp.role}</h4>
                            <p className='desc_style'>{exp.description}</p>

                            </div>
                        </Grid2>
                ))}


            </Grid2> */}

        </Box>
    )
}

export default Experience