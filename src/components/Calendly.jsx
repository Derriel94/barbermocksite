import {React} from 'react'
import {InlineWidget} from 'react-calendly';


const Calendly = () => {
	
		return(<div>
			<p className="title">book appointments!</p>
				<InlineWidget 
  url="https://calendly.com/derrielcollins96/hair-cut-appointment"   
  styles={{height: '600px'}}
  pageSettings={{
	  backgroundColor: '5b5b5b',
	  hideEventTypeDetails: false,
	  hideLandingPageDetails: false,
	  primaryColor: '800000',
	  textColor: 'FFFDD0'
	}}
  prefill={{
	  email: 'test@test.com',
	  firstName: 'Jon',
	  lastName: 'Snow',
	  name: 'Jon Snow',
	  customAnswers: {
	    a1: 'a1',
	    a2: 'a2',
	    a3: 'a3',
	    a4: 'a4',
	    a5: 'a5',
	    a6: 'a6',
	    a7: 'a7',
	    a8: 'a8',
	    a9: 'a9',
	    a10: 'a10'   
	  }
	}}
  utm={{
	  utmCampaign: 'Spring Sale 2019',
	  utmContent: 'Shoe and Shirts',
	  utmMedium: 'Ad',
	  utmSource: 'Facebook',
	  utmTerm: 'Spring'
	}} />

			
			</div>)

}

export default Calendly