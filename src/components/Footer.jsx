import React from 'react'

const Footer = ({ toDoList }) => {
    let countList = toDoList.length;
  return (
      <div className='footer'>
          <p className="notify">
              {countList === 0 ? 'You got everything Ready to go 👌' : `You have *${countList}* items on your list`}
          </p>
    </div>
  )
}

export default Footer