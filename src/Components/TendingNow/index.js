import React, { useContext } from 'react'
import { DataContext } from '../../App';
import TendingNowItems from '../TendingNowItems'
import './style.css'

export default function TendingNow() {

  const {TendingNow}  = useContext(DataContext).state

    return (
    <div id='TendingNow'>
        {TendingNow.map(item => {
            return <TendingNowItems
                        film={item}
                        key={item.Id} 
                        CoverImage={item.CoverImage}/>
        } )}
    </div>
  )
}
