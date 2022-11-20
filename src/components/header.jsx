import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='d-flex flex-column align-items-center p-4 justify-content-center text-center'>
        <div className='fifa'>FIFA WORLD CUP</div>
        <div className='qatar'>QATAR 2022</div>
        <div className='fifa'>PREDICTION</div>
        <div className='personal'>BY <a href="http://github.com/julian03-lab">JULIAN FONTANA</a></div>
        
        
        
    </div>
  )
}

export default Header