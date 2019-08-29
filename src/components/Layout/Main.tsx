import { styled } from 'linaria/react';
import { vars } from '../../globals';

export const Main = styled.main`
	background: ${vars.colors.background};
	grid-area: main;
	flex: 1 0 0;
	min-width: 0;
	padding: ${vars.typography.standardPadding}px;
`;
