// import { NavButtonStyled } from './styles/NavButton.styled.js'

export const NavButton = ({ icon, text }) => {
  return (
    <div className='sidebar-icon group'>
      {icon}
      <span class='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
  )
}

export default NavButton
