import cart from './assets/img/cart.svg'
import logo from './assets/img/logo.svg'

export const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='logo' />
            <img src={cart} alt='cart' />
        </div>
    )
}
