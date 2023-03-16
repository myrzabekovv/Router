import { Outlet } from 'react-router-dom'
import { Footer } from "../footer";
import { Nav } from "../nav";

export const Layout = () => {
 return(
  <div>
    <Nav />
    <div className="content">
      <Outlet />
    </div>
    <Footer />
  </div>
 )
}