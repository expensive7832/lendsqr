import React, { FC, useState } from 'react'
import "./../styles/login.scss"
import { Link } from 'react-router-dom'

type Props = {}

const Login: FC = (props: Props) => {

    

    const [toggleInput, settoggleInput] = useState<"password"|"text">("password")

  return (
    <main className='login'>

    <section>
      <article className='first'>
        <Link to={"/"}>
        <img className='logo' src="Group.svg" alt="logo" />
        </Link>
        <img src="pablo-sign-in 1.svg" alt="design" />
      </article>
      
      <article className='second'>
        <h3>Welcome!</h3>
        <p className='text'>enter details to login</p>
        <form>
          <input type="email" placeholder='email' />
          <div className='password'>
          <input type={toggleInput} placeholder='password' />
          <p onClick={() =>{
            settoggleInput(() => toggleInput === "password" ? "text" : "password")
          }}>show</p>
          </div>
          <h6>forgot password</h6>
          <button className='btn'>LOGIN</button>
        </form>
      </article>
    </section>

  </main>
  )
}

export default Login