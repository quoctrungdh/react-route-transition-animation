import React from 'react';

export function SubscribeForm({ thanks, history }) {
	if (thanks) {
		return (
			<div>
				<input type="email" placeholder="Enter email address" />
				<button
					onClick={() => history.push('/thanks') }
				>Subscribe now</button>
			</div>
		)
	}
	return (
		<div>
			<button
				onClick={() => history.push('/')}
			>Try again</button>
		</div>
	)
}