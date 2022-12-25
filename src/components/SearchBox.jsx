import React from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import './SearchBox.css'
const SearchBox = ({inputVal}) => {
  
  return (
      <div>
    <Input id='inputId' className='inputId'></Input>
    <Button variant="contained" color='primary' onClick={()=>inputVal()}>Submit</Button>
      </div>
  ) 
}

export default SearchBox
