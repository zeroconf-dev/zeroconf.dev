import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserProtocol, queryMiddleware } from 'farce';
import { createFarceRouter, createRender } from 'found';
import { Resolver } from 'found-relay';
import { Environment, RecordSource, Store, Network, FetchFunction } from 'relay-runtime';
import { routeConfig } from './routes';

const fetchQuery: FetchFunction = (operations, variables) =>
	fetch('/graphql', {
		body: JSON.stringify({
			variables: variables,
			query: operations.text,
		}),
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/graphql',
		},
		method: 'POST',
	}).then(resp => resp.json());

const environment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource()),
});

const Router = createFarceRouter({
	historyProtocol: new BrowserProtocol(),
	historyMiddlewares: [queryMiddleware],
	routeConfig: routeConfig,
	render: createRender({}),
});

const resolver = new Resolver(environment);

ReactDOM.render(<Router resolver={resolver} />, document.getElementById('root'));

serviceWorker.unregister();
