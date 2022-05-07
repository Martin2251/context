import React from 'react'

const Header = () => {
    const user = "Guest";
  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <h2>React Context API</h2>
            <div className='profile'>
                <h3>welcome, {user}</h3>
            </div>
        </div>
    </div>
  )
}

export default Header