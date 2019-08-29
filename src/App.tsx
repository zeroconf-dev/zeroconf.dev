import React from 'react';
import { Layout } from './components/Layout';
import { injectGlobalStyles, globals } from './globals';

injectGlobalStyles(globals);

const App: React.FC = () => {
	return <Layout id="app" />;
};

export default App;
