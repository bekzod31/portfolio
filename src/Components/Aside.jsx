import React from 'react';
import { NavLink } from 'react-router-dom';
import './Aside.css';

class Aside extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sidebar: false,
            width: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth});
    }

    handleSidebar() {
        this.setState({
            sidebar: true
        })
    }

    render() {
        console.log(this.state.width);
        var isToggle = this.state.sidebar || this.state.width>1200;
        console.log(isToggle);
        return (
            <div>
                <header id="header" style={isToggle? { left: 0 } : { left: "-300px" }}>
                    <div className="d-flex flex-column">

                        <div className="profile">
                            <img src={require("../img/profile-img.jpg")} alt="" className="img-fluid rounded-circle" />
                            <h1 className="text-light"><a href="index.html">Bekzod</a></h1>
                            <div className="social-links mt-3 text-center">
                                <a href="#" className="twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" className="facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="fab fa-skype"></i></a>
                                <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <nav className="nav-menu">
                            <ul className="text-center">
                                <li className="active d-block"><NavLink to="/"><i class="fas fa-home"></i><h6>Home</h6></NavLink></li>
                                <li><NavLink to="/about"><i className="fas fa-user"></i><h6>About</h6></NavLink></li>
                                <li><NavLink to="/resume"><i className="far fa-file"></i><h6>Resume</h6></NavLink></li>
                                <li><NavLink to="/portfolio"><i className="fas fa-project-diagram"></i><h6>Portfolio</h6></NavLink></li>
                                <li><NavLink to="/services"><i className="fas fa-server"></i><h6>Services</h6></NavLink></li>
                                <li><NavLink to="/contact"><i className="far fa-address-card"></i><h6>Contact</h6></NavLink></li>


                            </ul>
                        </nav>
                        {
                            !this.state.sidebar ?
                                <button type="button" className="mobile-nav-toggle d-xl-none" onClick={() => this.setState({ sidebar: true })} ><i class="fas fa-bars"></i></button> :
                                <button type="button" className="mobile-nav-toggle d-xl-none" onClick={() => this.setState({ sidebar: false })} ><i class="fas fa-times"></i></button>
                        }

                    </div>
                </header>

            </div>
        )
    }
}


export default Aside;