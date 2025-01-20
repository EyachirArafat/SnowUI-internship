import React from "react"
import {MyBar} from "./components/myBar/MyBar"
import { Outlet } from "react-router-dom"

export const App = () => {
  return (
    <>
      <div className="dark:bg-black/80">
        {/* <MyBar mainData={<Outlet/>}/> */}
        <Outlet/>
      </div>
    </>
  )
}
