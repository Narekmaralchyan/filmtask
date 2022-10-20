import React,{memo, useContext ,useCallback}from 'react'
import { DataContext } from '../../App'


 function TendingNowItems({film,CoverImage,}) {
  console.log("render");
  const {changeFeatured} = useContext(DataContext)

  const handleClick = useCallback( () => {
    changeFeatured(film)
    },
    [],
  )
  

  return (
      <img onClick={handleClick} className='tendingImages' src={'assets/'+CoverImage} /> 
  )
}
export default TendingNowItems