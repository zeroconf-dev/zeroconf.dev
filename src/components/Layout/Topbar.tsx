import React from 'react';
import { styled } from 'linaria/react';
import { vars } from '../../globals';

const Header = styled.header`
	background: ${vars.colors.primaryBrand};
	grid-area: header;
`;

interface Props {}

export const Topbar: React.FC<Props> = props => {
	return <Header>{props.children}</Header>;
};
