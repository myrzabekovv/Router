import {NavLink} from 'react-router-dom'

export const Nav = () => {
  return(
    <ul className='nav'>
      <li>
        <NavLink to="/about">Ainkbout</NavLink>
      </li>
      <li>
        <NavLink to="/">Reusme</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  )
}