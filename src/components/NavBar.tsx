import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
//stack creates rows or columns in mui
//muis version of flex box I assume
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

function NavBar() {
	return (
		<Stack direction="row" 
			   alignItems="center" 
			   p={2} 
			   sx={{ position: 'sticky', 
			   		 background: '#00', 
			   		 top: 0, 
			   		 justifyContent: 'space-between'}}>
			<Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
				<img src={logo} alt="logo" height={45} />
			</Link>	
			<SearchBar />
		</Stack>
	)
}

export default NavBar