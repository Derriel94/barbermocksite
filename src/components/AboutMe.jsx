import aboutmeimg from "./../assets/aboutmeimg.jpg";

const AboutMe = () => {
	

	return (
		<div className="aboutme">
			<div className="aboutme-img">
				<img src={aboutmeimg} alt="kyrie the barber hall of fades"/>
			</div>
			<div>
			<div className="aboutme-title"> 
				<p className="title">kyrie the barber</p>
				<p className="title">about me</p>
			</div>
				<p className="aboutme-text">
					meet kyrie, the creative mastermind behind hall of fades. 
					With a passion for precision and style, kyrie transforms 
					every haircut into a work of art.known for his welcoming vibe and expert techniques, 
					he ensures every client leaves feeling fresh and confident. At hall of fades, 
					it’s not just a haircut; it’s an experience. come for the cut,
					 stay for the camaraderie!
				</p>
			</div>

		</div>
		);
}

export default AboutMe;