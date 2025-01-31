import { Outlet, Link } from "react-router-dom"
import { useContext } from "react"

import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../assets/007 crown.svg'
import { UserContext } from "../../context/user.context"
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropwdown.component"
import { CartContext } from "../../context/cart-context"



const Navigation = () => {
  const {currentUser} = useContext(UserContext)

  const {isCartOpen} = useContext(CartContext)

  const signOutHandler = async () => {
     await signOutUser()
  }
    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
           <CrwnLogo className="logo"></CrwnLogo>
            </Link>
           
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>SHOP</Link>
                {currentUser ? (
                  <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>) : (
                    <Link className="nav-link" to='/auth'>SIGN IN</Link>
                  )
                }
              <CartIcon></CartIcon>
            </div>
            {isCartOpen && <CartDropdown></CartDropdown>}
        </div>
        <Outlet></Outlet>
      </>
    )
  }


  export default Navigation