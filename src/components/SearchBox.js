import React from 'react'

const SearchBox = ({searchChange}) => {
	return(
		<div>
			<input
			className='pa3 ba b--red bg-light-silver' 
			type='search' 
			placeholder='Search Robots'
			onChange = {searchChange} // will call onSearchChange function in App.js on any change in serach box.
			/>
		</div>
	);
}

export default SearchBox;