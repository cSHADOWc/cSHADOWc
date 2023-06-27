import './Header.css'

import logo from '../../assets/images/logo.png'
import Navitem,{Navitem_dropdown} from '../navitem/navitem'
const Header = () => {
    return (
      <>

<div className="navbar navbar-expand-md bg-dark navbar-dark ">
        <div className="container">
            <a href="#" className="navbar-brand">
              <img src={logo}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <Navitem>
                        <a href="#hero" className="nav-link">Home</a>
                    </Navitem>

                    <Navitem>
                        <a href="#features" className="nav-link">Browse</a>
                    </Navitem>

                    <Navitem_dropdown><a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                      
                        <ul className="dropdown-menu">
                            <Navitem><a href="#learn" className="dropdown-item">Fortnight</a></Navitem>
                            <Navitem><a href="#next" className="dropdown-item">Call of Duty</a></Navitem>
                        </ul>
                        
                    </Navitem_dropdown>


                    <Navitem>
                        <a href="https://www.youtube.com/watch?v=pYhFRLA87kk&t=1772" className="nav-link">Streams</a>
                    </Navitem>



                    <Navitem>
                        <a href="./index-ar.html" className="nav-link">Profile</a>
                    </Navitem>
                </ul>
            </div>
        </div>
    </div>


</>
    )
}

export default Header