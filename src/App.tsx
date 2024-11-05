import React, { lazy, Suspense} from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import Loader from './components/Loader/Loader'

// pages
const Login = lazy(() => import("./Pages/Login"))
const DashboardHome = lazy(() => import("./Pages/Dashboard/Home"))
const Layout = lazy(() => import("./Pages/Dashboard/Layout"))

function App() {
  return (
   <Suspense 
   fallback={<div style={{height: "100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <Loader/>
   </div>}
   >
     <BrowserRouter>
       <Routes>
        <Route path='' element={<Login/>} />
        <Route path='/dashboard' element={<Layout/>}>
        <Route path="/dashboard" element={<DashboardHome/>} />

        </Route>
       </Routes>
     </BrowserRouter>
   </Suspense>
  )
}

export default App