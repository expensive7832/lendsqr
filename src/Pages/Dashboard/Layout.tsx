import React, { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/SiderBar/Sidebar'
import Topbar from '../../components/TopBar/Topbar'

type Props = {}

const Layout: FC = (props: Props) => {

  const [sidebarOpen, setsidebarOpen] = useState<Boolean>(false)

  return (
    <div className="layout" style={{backgroundColor: "#FBFBFB"}}>
       
      <Topbar sidebaropen={sidebarOpen} setsidebaropen={setsidebarOpen} />
      <main className="content" style={{display: "flex"}}> 
        <Sidebar setsidebaropen={setsidebarOpen} sidebaropen={sidebarOpen} />
        <section style={{padding:"2rem", flex: 1}}>
            <Outlet/>
        </section>
      </main>
    </div>
  )
}

export default Layout