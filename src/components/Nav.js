// import NavButton from './NavButton'
// import { NavContainerStyled } from './styles/Nav.styled.js'

import NavButton from './NavButton'
import { FaRoute } from 'react-icons/fa'
import { MdForum } from 'react-icons/md'
import { BiLogInCircle } from 'react-icons/bi'

const Nav = () => {
  return (
    <div class='top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-white shadow-lg z-10 justify-center'>
      <NavButton text={'Routes'} icon={<FaRoute size='28' />} />
      <NavButton text={'Forum'} icon={<MdForum size='28' />} />
      <NavButton text={'Login'} icon={<BiLogInCircle size='28' />} />
    </div>
  )
}

export default Nav
