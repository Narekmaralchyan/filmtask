import React,{useContext}from 'react'
import { DataContext } from '../../App'


export default function TendingNowItems({film,CoverImage,}) {
  const {changeFeatured} = useContext(DataContext)

  function handleClick(){
    changeFeatured(film)   
  }

  return (
      <img onClick={handleClick} className='tendingImages' src={'assets/'+CoverImage} /> 
  )
}
//