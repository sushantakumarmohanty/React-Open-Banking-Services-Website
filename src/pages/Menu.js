import { Link } from "react-router-dom";

const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>ANZ Bank</div>
        <Link to='/about'>
            <div className='navbar__item'>
                <h6>About Us</h6>
            </div>
        </Link>
        <Link to='/ContactUs'>
            <div className='navbar__item'>Contact</div>
        </Link>
        <Link to="/">
            <div className='navbar__item'>Help</div>
        </Link>

    </header>
);

const App = () => (
    <div>
        <NavBar/>
        {/* <main>We sell cutting edge knives.</main> */}
    </div>
);
export default App

