import React, { useCallback } from 'react';
import { styled } from 'linaria/react';
import { vars } from '../../globals';

interface Props {
	collapsed: boolean;
	onCollapseChange: () => void;
}

const Nav = styled.Nav`
	background: ${vars.colors.darkShade};
	grid-area: mainmenu;
	transition: max-width 250ms ease-out;
`;

export const Mainmenu: React.FC<Props> = props => {
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			e.preventDefault();
			e.stopPropagation();
			props.onCollapseChange();
		},
		[props],
	);
	return <Nav onClick={onClick}>{props.children}</Nav>;
};
