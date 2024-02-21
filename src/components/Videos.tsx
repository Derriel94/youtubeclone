import React from 'react'

function Videos({videos}) {
	console.log(videos)
	return (
		<div>
			{videos.map((video)=>(
				<div>
					{video.description}
				</div>	

				)

				)}
			
		</div>
			
	)
}

export default Videos