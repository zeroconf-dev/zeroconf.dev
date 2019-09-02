import React from 'react';
import { Layout } from './components/Layout';
import { injectGlobalStyles, globals } from './globals';

injectGlobalStyles(globals);

interface Props {}

const App: React.FC<Props> = props => {
	return <Layout id="app">{props.children}</Layout>;
};

export default App;
