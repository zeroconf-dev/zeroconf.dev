import { makeRouteConfig, Route } from 'found';
import App from './App';
import React from 'react';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { graphql } from 'react-relay';

export const routeConfig = makeRouteConfig(
	<Route path="/" Component={App}>
		<Route Component={LandingPage} exact={true} path="/" />
		<Route
			Component={AboutPage}
			query={graphql`
				query routes_App_Query {
					viewer {
						id
					}
				}
			`}
			path="/about"
		/>
	</Route>,
);
