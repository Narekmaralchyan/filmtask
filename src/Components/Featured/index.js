import React, { useContext,useState, useEffect } from 'react'
import { DataContext } from '../../App.js'
import Background from '../FeaturedBackground.js'
import './style.css'


export default function Featured() {
    const {TitleImage,Title,Date,MpaRating,Duration,Description} = useContext(DataContext).state.Featured
  
  return (
    <div id='Featured' >
        <Background />
        <div className='FeaturedContent'>
            <h2>{Title}</h2>
            <img id='TitleImage' src={'assets/'+TitleImage} alt='TitleImage'/>
            <div className='info'>
                <h3 id='year'>{Date.slice(0,4)}</h3>
                <h3 id="MpaRating">{MpaRating}</h3>
                <h3 id="Duration">{Math.trunc(Duration/3600)+'h '+Math.trunc((Duration-Math.trunc(Duration/3600)*3600)/60)+'m'}</h3>
            </div>
            <p id='Description'>{Description}</p>
            <div className='buttons'>
                <button id='playBtn'>Play</button>
                <button id='moreInfoBtn'>More Info</button>
            </div>
        </div>
    </div>
  )
}
