import { NavBar } from "../navBar/NavBar";
import logo2 from '../../assets/logo2.png'


export function Header() {
  return (
    <header className="max-w-7xl flex items-center justify-between p-4 mx-auto">
      <img className="w-28" src={logo2} alt="logo" />
      <NavBar />
    </header>
  )
}
