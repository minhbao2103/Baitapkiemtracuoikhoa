import React from 'react'
import {BsArrowRightSquareFill} from 'react-icons/bs'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Api() {

   useEffect()

    return (
        <div className='container' 
              style={{
                        backgroundColor:'	rgb(25,25,112)',
                        height:'1000px',
                        width:'100%'
                       }}>
  <div className='heading'>
  <span>The</span>
  <span className='title'>privacy-friendly</span>
  <span>URL Shortener</span>
  </div>
  <div className='content'>
      <div className='content-title'>Link-Shorterner</div>
      <div className='a-link'>
          <p>Enter a link:</p>
          <input type='text' placeHolder='example.com'></input>
          <BsArrowRightSquareFill 
          onClick={()=> {}}
          style={{fontSize:'30'}}/>
      </div>
      <div className='domain'>
        <span>Short domain:</span>
        <button>Shrtco.de</button>
        <button>9qr.de</button>
        <button>shiny.link</button>
      </div>
      <div className='footer'>
        <p>With this free Link Shortener you can make Links shorter and easier to remember.
        Just enter a Link into the form and click on the above Button to generate a Short Link.
        When visiting the short-Link, the short-Link will immediately redirect you to the long link</p>
      </div>
  </div>
        </div>
      )
}
