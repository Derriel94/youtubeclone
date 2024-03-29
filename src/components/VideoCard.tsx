import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demovideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

function VideoCard( {video: { id:{videoId}, snippet }}) {
	return (
		<Card sx={{ width: {md: '320px', xs: '100%'}, 
					boxShadow: 'none', borderRadius: 'none'}}>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia 
				alt={snippet?.title}
				sx={{width: 358, height: 180 }}
				image={snippet?.thumbnails?.high?.url} />
			</Link>
			<CardContent sx={{ backgroundColor: '1e1e1e', height: '106px'}}>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography
						variant="subtitle2"
						fontWeight="bold"
						color="gray"> {snippet?.channelTitle || demoChannelTitle}
						<CheckCircle sx={{ fontSize: 12, color:'gray', ml: '5px'}} />
					</Typography>
				</Link>
			</CardContent>
		</Card>
	)
}

export default VideoCard