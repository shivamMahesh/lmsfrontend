import React from 'react';

const SearchBox=({OnsearchChange})=>
{
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		 type='search' placeholder='SEARCH BY TITLE' 
		 onChange={OnsearchChange}/>
		</div>
		);
}
export default SearchBox;