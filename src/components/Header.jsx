import React from 'react'

const Header = () => {
    const emoji = '😊';
  return (
      <div className='header'>
          <p className="notify">
              Note Your CheckLists Here
          </p>
          <div>{emoji}</div>
    </div>
  )
}

export default Header