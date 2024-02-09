import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../assets/007 crown.svg'


const Navigation = () => {
    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
           <CrwnLogo className="logo"></CrwnLogo>
            </Link>
           
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>SHOP</Link>
                <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
            </div>
        </div>
        <Outlet></Outlet>
      </>
    )
  }


  export default Navigation