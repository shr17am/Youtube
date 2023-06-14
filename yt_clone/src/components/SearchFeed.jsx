import {React, useState, useEffect} from 'react'
import {Box,Typography} from '@mui/material'
import {Videos }from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
// sx - custom styles vh-vertical height 

const SearchFeed = () => {
  const [videos,setVideos] = useState([])
  const {searchTerm} =useParams()

  useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
  },[searchTerm])

  return (
<Box pl={15} sx={{overflowY:'auto', height:'95vh', flex:2}}>
  <Typography variant='h5' fontWeight='bold' mb={2} sx={{color:'white'}}>
    Search Results for: <span style={{color:'#fc1503'}}>
     {searchTerm} 
    </span> Videos
  </Typography>
  <Videos videos={videos}/>
</Box>
   )
}

export default SearchFeed