import {Link} from 'react-router-dom'
import {PopupWidget} from 'react-calendly';


const Home = () => {
	

	return (
		<div className="home">
			<div className="home-hero-img">
				<div className="home-hero-img-text">
					<p className="title">hall of fades</p>
					<p>welcome to elite fades in amarillo</p>
					<p>offering take her tapers and more...</p>
					{/*<PopupWidget className="home-hero-button" url="https://calendly.com/derrielcollins96/hair-cut-appointment"rootElement={document.getElementById("root")}
        text="Book Now!"
        textColor="#ffffff"
        color="#00a2ff" />*/}
					<Link to="/cal"><button className="home-hero-button">book now! <span style={{fontWeight: "bolder", fontSize: "1rem"}}></span></button></Link>
				
				</div>
			</div>
		</div>
		);
}

export default Home