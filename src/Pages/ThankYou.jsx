import React from 'react';
import { SubscribeForm } from '../Components/';
import { PagesHOC } from '../HOCs'

class ThankYou extends React.Component {
	render() {
		return (
			<div>
				<h2>Thank you!</h2>
				<p>Expect our awesome contents in your email as soon as you confirm subscription</p>
				<SubscribeForm {...this.props} />
			</div>
		)
	}
}

export default PagesHOC(ThankYou);
