import Image from "next/image";

import Menu from '../assets/menu.svg'
import Lupa from '../assets/search.svg'
import Grid from '../assets/grid.svg'
import Pets from '../assets/pet.svg'
import User from '../assets/user.svg'
import Vets from '../assets/vet.svg'
import Settings from '../assets/settings.svg'
import LogOut from '../assets/log-out.svg'
import { DivLogoStyled, DivNavtyled, DivFooter, DivSidebarminStyled  } from "../styles/components/sidebarmin";
import { useState } from "react";


export default function Sidebarmin() {
    const [sidebar, setSidebar] = useState(true)

    function SidebarChange () {
        setSidebar(!sidebar)
    }

    console.log(sidebar)

    return (
        <>
        {sidebar === true && (
            <DivSidebarminStyled>
            <DivLogoStyled><button onClick={SidebarChange}><Image src={Menu} alt={""} width={24}/></button></DivLogoStyled>

            <DivNavtyled><Image src={Lupa} alt={""} width={24}/></DivNavtyled>
            <DivNavtyled><Image src={Grid} alt={""} width={24}/></DivNavtyled>
            <DivNavtyled><Image src={Pets} alt={""} width={24}/></DivNavtyled>
            <DivNavtyled><Image src={User} alt={""} width={24}/></DivNavtyled>
            <DivNavtyled><Image src={Vets} alt={""} width={24}/></DivNavtyled>
            <DivNavtyled><Image src={Settings} alt={""} width={24}/></DivNavtyled>


            <DivFooter><Image src={LogOut} alt={""} width={24}/></DivFooter>
        </DivSidebarminStyled>
        )}
        
        </>
    )
}