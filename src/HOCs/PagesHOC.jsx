import React from 'react';

const logoUrl = 'https://rawgit.com/christiannwamba/react-router-transition/master/src/logo.svg';

export const PagesHOC = Page => {
	return props => (
		<div>
			<img src={logoUrl} alt='logo' />
			<Page {...props} />
		</div>
	)
}