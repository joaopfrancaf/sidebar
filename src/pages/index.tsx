import Sidebarmin from "../components/sidebarmin";
import Sidebar from "../components/sidebar";
import { useState } from "react";

export default function Home() {

  const [sidebar,setSidebar] = useState(true)

  function handleSidebar () {
    setSidebar(!sidebar)
  }

  //console.log(sidebar)
  return (
    <>
      {sidebar ? (<Sidebar handleSidebar={handleSidebar}/>) 
      :
      (<Sidebarmin handleSidebar={handleSidebar}/>)
      }
    </>
  )
}
