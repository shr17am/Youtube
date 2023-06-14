import React from 'react'
import { Box,CardContent,CardMedia,Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'


const ChannelCard = ({channelDetail,marginTop}) =>  (
<Box sx={{borderRadius:'20px',
boxShadow:'none',display:'flex',
justifyContent:'center',
alignItems:'center',
height:'326px',
width:{xs:'356px',md:'320px'},margin:'auto',marginTop:marginTop
}}>
<Link to={`/channel/${channelDetail?.id?.channelId}`}>
<CardContent sx={{display:'flex',flexDirection:'column',color:'#fff',textAlign:'center',justifyContent:'center'}}>
  <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
  alt={channelDetail?.snippet?.title}
  sx={{borderRadius:'50%',width:'180px',height:'180px',mb:2,border:'1px solid #e3e3e3'}}></CardMedia>
<Typography variant='h6' >{channelDetail?.snippet?.title}
<CheckCircle sx={{color:'gray',ml:'3px',fontSize:14}}></CheckCircle>

</Typography>
{channelDetail?.statistics?.subscriberCount && (
      <Typography>
        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
      </Typography>
    )}

</CardContent>
</Link>

</Box>

  )


export default ChannelCard