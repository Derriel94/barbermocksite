import taperfade from "./../assets/imgs/taperfade.webp"
import { Link } from "react-router-dom"
const HairCuts = () => {
	

	return (
		<div className="haircuts">
			<div className="leftside-navbar"> 
				<p className="title">hall of fades</p>
			</div>

			<div className="haircut-list"> 
			<div className="haircut-name">
						taper fades
					</div>
				<div className="haircut-type">
					<div>
						<img className="haircut-type-img" src={taperfade} />
					</div>
					
				</div>
					<div className="haircut-name">
						high top fades
					</div>
				<div className="haircut-type">
					<div>
						<img className="haircut-type-img" src={taperfade} />
					</div>
				</div>
					<div className="haircut-name">
						low top fades
					</div>
				<div className="haircut-type">
				
					<div>
						<img className="haircut-type-img" src={taperfade} />
					</div>
				</div>
				<div className="haircut-name">
						southside fades
					</div>
				<div className="haircut-type">
					
					<div>
						<img className="haircut-type-img" src={taperfade} />
					</div>
				</div>
					<div className="haircut-name">
						line ups
					</div>
				<div className="haircut-type">
				
					<div>
						<img className="haircut-type-img" src={taperfade} />
					</div>
				</div>
			</div>
			<Link to="/cal" style={{display: "flex", textDecoration: "none", justifyContent: "center"}}><button className="home-hero-button" style={{color: "maroon"}}>book now!</button></Link>

		</div>
		);
}

export default HairCuts;
