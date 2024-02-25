import React,{useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { Video } from './';
import { fetchFromApi } from '../utils/fetchFromApi'


function VideoDetail() {
	const [videoDetail, setVideoDetail] = useState(null);
	const {id} = useParams();


	useEffect(()=> {
		fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
		.then((data)=> setVideoDetail(data.items[0]));

	}, [id])



	return (
		<Box minHeight="95vh">
			<Stack direction={{xs: 'column', md: 'row'}}>
				<Box flex={1}>
					<Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
						<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
						className="react-player"
						controls
						/>
						{videoDetail && (<Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
							{videoDetail.snippet.title}
						</Typography>)}
					</Box>
				</Box>
			</Stack>
			
		</Box>
	)
}

export default VideoDetail