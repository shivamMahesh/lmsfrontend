import React from 'react';

const SearchBox1=({OnsearchChange1})=>
{
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		 type='search' placeholder='SEARCH BY AUTHOR' 
		 onChange={OnsearchChange1}/>
		</div>
		);
}
export default SearchBox1;