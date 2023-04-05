import Sidebarmin from "../components/sidebarmin";
import Sidebar from "../components/sidebar";
import { useState } from "react";

export default function Home() {

  const [sidebarmin, setSidebarmin] = useState(false)

  return (
    <Sidebar/>
  )
}
