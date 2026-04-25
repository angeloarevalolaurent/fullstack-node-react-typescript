import { Outlet } from "react-router-dom"

export default function Layouts() {

  return (
    <>
      <div>Desde Layout</div>

      <Outlet />
    </>
  )
}
