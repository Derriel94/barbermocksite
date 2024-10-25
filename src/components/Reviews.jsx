import reviewsimg from "./../assets/reviewsimg.jpg"

const Reviews = () => {
	
	//dynamic addition to list
	const reviewList = [];

	const staticList = [
		{reviewerName: "tray johnson",
		 reviewerRating: 5,
		 reviewerText: "kyrie was incredibly profesional and personal all at the same time, I came in looking like dolemite and left looking like eddie murphy!",},
		 {reviewerName: "aaroon freeman",
		 reviewerRating: 5,
		 reviewerText: "kyrie was incredibly profesional and personal all at the same time, I came in looking like dolemite and left looking like eddie murphy!",},
		 {reviewerName: "ernie caldwell",
		 reviewerRating: 5,
		 reviewerText: "kyrie was incredibly profesional and personal all at the same time, I came in looking like dolemite and left looking like eddie murphy!",},
		 {reviewerName: "ernie caldwell",
		 reviewerRating: 5,
		 reviewerText: "kyrie was incredibly profesional and personal all at the same time, I came in looking like dolemite and left looking like eddie murphy!",},
		 {reviewerName: "ernie caldwell",
		 reviewerRating: 5,
		 reviewerText: "kyrie was incredibly profesional and personal all at the same time, I came in looking like dolemite and left looking like eddie murphy!",},
		 {reviewerName: "ernie caldwell",
		 reviewerRating: 5,
		 reviewerText: "kyrie was incredibly profesional and personal all at the same time, I came in looking like dolemite and left looking like eddie murphy!",},
		 {reviewerName: "ernie caldwell",
		 reviewerRating: 5,
		 reviewerText: "kyrie was incredibly profesional and personal all at the same time, I came in looking like dolemite and left looking like eddie murphy!",},]

	return (
		<div className="reviews">
			<p className="title">reviews</p>
			<div className="reviews-container">
			{
				staticList.map((item)=>{

					return (
					<div className="review"> 
						<p>{item.reviewerText}</p>
						<p>~ <span>{item.reviewerRating}</span> stars {item.reviewerName}</p>
					</div>);
				})
			}
			</div>
			<div className="gallery">
				<div style={{margin: "20px"}}> scroll down for reviews</div>
				<div> 
					<img src={reviewsimg} style={{height: "600px", width: "auto", backgroundColor: "rgba(0,0,0,.5)"}} />
				</div>
				<div style={{margin: "20px"}}> scroll down for reviews</div>
			</div>
			<div className="reviews-container">
			{
				staticList.map((item)=>{

					return (
					<div className="review"> 
						<p>{item.reviewerText}</p>
						<p>~ <span>{item.reviewerRating}</span> stars {item.reviewerName}</p>
					</div>);
				})
			}
			</div>
		</div>
		);
}

export default Reviews; 
