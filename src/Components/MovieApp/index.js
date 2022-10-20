import React, { useReducer } from 'react'
import Featured from '../Featured';
import TendingNow from '../TendingNow';
import Data from '../../data.json'
import './style.css'


export default function MovieApp() {


  return (
    <div id='MovieApp'>
        <Featured />
        <TendingNow />
    </div>
  )
}
