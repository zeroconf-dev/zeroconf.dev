import React, { useState, useCallback } from 'react';
import { styled } from 'linaria/react';
import { Topbar } from './Topbar';
import { Main } from './Main';
import { Mainmenu } from './Mainmenu';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

type GridProps = JSX.IntrinsicElements['div'] & {
	collapsed: boolean;
};

const Grid = styled.div<GridProps>`
	display: grid;
	margin: 0;
	padding: 0;
	height: 100vh;

	grid-template-areas:
		'header header header'
		'mainmenu main sidebar'
		'mainmenu footer footer';

	grid-template-columns: ${props => (props.collapsed ? 50 : 300)}px 1fr 200px;
	grid-template-rows: 50px 1fr 100px;

	transition: grid-template-columns 250ms ease-out;
`;

type Props = JSX.IntrinsicElements['div'];

export const Layout: React.FC<Props> = props => {
	const { children, ...gridProps } = props;

	const [collapsed, setCollapsed] = useState(false);
	const onCollapseChange = useCallback(() => {
		setCollapsed(c => !c);
	}, []);

	return (
		<Grid collapsed={collapsed} {...gridProps}>
			<Topbar />
			<Mainmenu collapsed={collapsed} onCollapseChange={onCollapseChange} />
			<Main>{children}</Main>
			<Sidebar />
			<Footer />
		</Grid>
	);
};
