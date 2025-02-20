import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { skills } from '../../portfolio'
import '../Skills/Skills.css'

function Skills() {
  return (
    <Box sx={{flexGrow:1,justifyContent:'center' }}>
    <h1 className='title_styles'>Skills</h1>
    <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} >
        {skills.map((exp,index)=> (
                <Grid2 key={index} size={{ xs: 12, sm: 6, md: 3 }} sx={{justifyContent:'center',alignItems:'center'}}>
                    <div className='grid_items_skills'>
                    <h4>{exp}</h4>
                    </div>
                </Grid2>
        ))}


    </Grid2>

</Box>  )
}

export default Skills