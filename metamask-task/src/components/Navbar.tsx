import React from 'react'
import '../all.css' 

type Props = {}

function Navbar({}: Props) {
  return (
    <div>

        <nav className='navigation'>
          <ul className='nav__links'>
            <li>LOGO</li>
            <li>CONNECT METAMASK</li>
          </ul>
        </nav>

    </div>
  )
}

export default Navbar