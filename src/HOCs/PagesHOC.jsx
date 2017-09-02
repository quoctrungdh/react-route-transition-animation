import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const logoUrl = 'https://rawgit.com/christiannwamba/react-router-transition/master/src/logo.svg';

export const PagesHOC = Page => {
	return props => (
		<ReactCSSTransitionGroup
			transitionName={props.match.path === '/thanks' ? 'SlideIn' : 'SlideOut' }
			transitionAppear={true}
			transitionAppearTimeout={600}
			transitionEnterTimeout={600}
			transitionLeaveTimeout={200}
		>
			<div key={props.location.pathname}>
				<img src={logoUrl} alt='logo' />
				<Page {...props} />
			</div>
		</ReactCSSTransitionGroup>
	)
}