import {Link} from 'react-router-dom'
const NavBar = () => {
	

	return (
		<div className="navbar">
			<div className="leftside-navbar"> 
				<h1><Link className="logo"to="/">hall of fades</Link></h1>
			</div>

			<div className="rightside-navbar">
				<div><Link className="navlink"to="/haircuts">haircuts</Link></div>
				<div><Link className="navlink"to="/cal">book now</Link></div>
				<div><Link className="navlink"to="/reviews">reviews</Link></div>
				<div><Link className="navlink"to="/aboutme">about me</Link></div>
				<div><Link className="navlink"to="/contact">contact us</Link></div>
			</div>
		</div>
		);
}

export default NavBar;