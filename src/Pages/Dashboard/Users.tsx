import React, { FC, useState } from 'react'
import UserTable from '../../components/Table/UserTable'
import CardSection from '../../components/Card/Card'


const Users: FC = () => {



  return (
    <div className='users' >
      <CardSection/>
      <UserTable/>
  </div>
  )
}

export default Users