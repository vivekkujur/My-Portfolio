import { Box, Grid2 } from '@mui/material'
import React from 'react'
import { experience } from '../../portfolio'
import { grey } from '@mui/material/colors'
import '../Experience/Experience.css'

function Experience() {

    return (
        <Box sx={{flexGrow:1,justifyContent:'center' ,alignContent:'center',alignItems:'center'}}>

            <h1 className='title_styles'>Experience</h1>
            <Grid2 container spacing={5} >
                {experience.map((exp,index)=> (
                        <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4}}>
                            <div className='grid_items'>
                            <h3>{exp.company}</h3>
                            <h4>{exp.role}</h4>
                            <p className='desc_style'>{exp.description}</p>

                            </div>
                        </Grid2>
                ))}


            </Grid2>

        </Box>
)
}

export default Experience