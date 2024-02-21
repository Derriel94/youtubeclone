import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import './../App.css';



function SideBar( {selectedCategory, setSelectedCategory} ) {
	return (
		<Stack
		 direction="row"
		 sx={{overflowY: " auto",
			  height: { sx: 'auto', md: '95%'},
			  flexDirection: { md: 'column'}}}>
			  {categories.map((category) => (
			  	<button
			  		className="categorybtn"
			  		onClick={()=> setSelectedCategory(category.name)}
			  		style={{
			  			cursor: "pointer",
			  			background: category.name === selectedCategory && '#FC1503',
			  			
			  		}}
			  		key={category.name}>
			  		<span style={{}}>{category.icon}</span>
			  		<span>{category.name}</span>
			  	</button>
			  ))}
			
		</Stack>
	)
}

export default SideBar