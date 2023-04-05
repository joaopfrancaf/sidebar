import Image from "next/image";
import { DivLogoStyled, DivNavtyled, DivSideBarContainerStyled, DivFooter } from "../styles/components/sidebar";

import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'
import FotoAvatar from '../assets/photo.jpg'
import LogOut from '../assets/log-out.svg'

import Lupa from '../assets/search.svg'
import Grid from '../assets/grid.svg'
import Pets from '../assets/pet.svg'
import User from '../assets/user.svg'
import Vets from '../assets/vet.svg'
import Settings from '../assets/settings.svg'

export default function Sidebar() {
    return (
      <DivSideBarContainerStyled>
        <DivLogoStyled>
          <Image src={Logo} alt={""} width={64} height={25.12}/>
          <Image src={Menu} alt={""} width={24}/>
        </DivLogoStyled>

        <DivNavtyled><Image src={Lupa} alt={""} width={24}/>Buscar</DivNavtyled>
        <DivNavtyled><Image src={Grid} alt={""} width={24}/>Dashboard</DivNavtyled>
        <DivNavtyled><Image src={Pets} alt={""} width={24}/>Pets</DivNavtyled>
        <DivNavtyled><Image src={User} alt={""} width={24}/>Clientes</DivNavtyled>
        <DivNavtyled><Image src={Vets} alt={""} width={24}/>Vets</DivNavtyled>
        <DivNavtyled><Image src={Settings} alt={""} width={24}/>Ajustes</DivNavtyled>
          

        <DivFooter>
          <Image src={FotoAvatar} alt={""} width={45} height={45}/>
          <div>
            <span>Elanor Rigby</span>
            <p>Vet</p>
          </div>
            <Image src={LogOut} alt={""} width={24}/>
        </DivFooter>
      </DivSideBarContainerStyled>
    )
  }