import React from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import { skills } from '../../portfolio'
import '../Skills/Skills.css'
import { Image } from '@mui/icons-material'
import StackIcon from 'tech-stack-icons'


function Skills() {
    return (
        <Box id='skills' sx={{ flexGrow: 1, justifyContent: 'center' }}>
            <h1 className='title_styles'>My Skills</h1>
            <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} >
                {skills.map((exp, index) => (
                    <Grid2 key={index} size={{ xs: 12, sm: 6, md: 3 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <div className='grid_items_skills'>
                            {

                            exp.iconCode.length > 0 ? <StackIcon name={ exp.iconCode} style={{ height: 40, width: 40, alignSelf: 'center', marginRight: 10 }} />
                                    : null
                            }
                            <h4 style={{ alignSelf: 'center' }}>{exp.stack}</h4>
                        </div>

                        {/* <Box display="flex" alignItems="center" gap={1}>
      <StackIcon style={{ height:40,width:40 }} name="js"  />
      <Typography variant="body1">{exp}</Typography>
    </Box> */}
                    </Grid2>
                ))}


            </Grid2>

        </Box>)
}

export default Skills