import {React, useState, useEffect} from 'react'
import {Box,Typography,Stack} from '@mui/material'
import {Sidebar,Videos }from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
// sx - custom styles vh-vertical height 

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState("New")
  const [videos,setVideos] = useState([])

  useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
  },[selectedCategory])

  return (
<Stack sx={{flexDirection:{sx : 'column', md:'row'}}}>
<Box sx={{height : {sx: 'auto' ,md:'92vh'}, borderRight:'1px solid #3d3d3d',px:{sx:'0', md:2}}}>
<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
></Sidebar>
<Typography className='copyright' varinat='body2' sx={{mt:1.5, color:'#ffffff'}}>
  Copyright 2022 RAM
</Typography>
</Box>
<Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
  <Typography variant='h5' fontWeight='bold' mb={2} sx={{color:'white'}}>
    {selectedCategory} <span style={{color:'#fc1503'}}>
      Videos
    </span>
  </Typography>
  <Videos videos={videos}/>
</Box>
</Stack>   )
}

export default Feed