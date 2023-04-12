import React from 'react'

type Props = {}

export default function Registration({}: Props) {
  return (
    <div>
        <div className="cont">
            <div className="cont__content">
                <h3>BETA TEST REGISTRATION</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="cont__registr">
                <form action="" method="post">
                    <div className="cont__regist_name">
                        <label htmlFor="username">Name</label>
                        <input type="text" name='username' placeholder='We will display your name in participation list ' />
                    </div>
                    <div className="cont__regist_email">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder='We will display your name in participation list '  />
                    </div>
                    <button type='button'>GET EARLY ACCESS</button>
                </form>
            </div>
        </div>
    </div>
  )
}