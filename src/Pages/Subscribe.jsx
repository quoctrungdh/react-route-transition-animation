import React from 'react';
import { SubscribeForm } from '../Components/';
import { PagesHOC } from '../HOCs';

class Subscribe extends React.Component {
	render() {
		console.log(this)
		return (
			<div>
				<h2>We don't mind keeping you posted!</h2>
				<p>Twice a week, we send in a warm regards with rich contents from around the web</p>
				<SubscribeForm thanks {...this.props} />
			</div>
		)
	}
}

export default PagesHOC(Subscribe);
