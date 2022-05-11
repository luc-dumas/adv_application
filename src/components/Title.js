// import { StyledHeader } from './styles/Title.styled'
import moto from '../img/motorcycle.svg'

import { FaMotorcycle } from 'react-icons/fa'

const Title = () => {
  return (
    <div class='header relative z-10 px-6 py-2'>
      <FaMotorcycle class='h-14 w-14 text-gray-900 -rotate-[31deg] z-20' />
      <h1 className='title-text  px-0'>ADV Routes</h1>
    </div>
  )
}

export default Title

//<GiFullMotorcycleHelmet class='w-auto' />
//import { GiFullMotorcycleHelmet } from 'react-icons/gi'
//{
// <GiFullMotorcycleHelmet class='h-16 w-16 mt-2 mb-2 mx-auto  text-white rounded-3xl ' />
// }

/// insets image

/* <div class='w-24 absolute z-10 -inset-3'> */
