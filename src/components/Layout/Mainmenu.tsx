import React, { useCallback } from 'react';
import { styled } from 'linaria/react';
import { vars } from '../../globals';
import { Link as RouterLink } from 'found';

interface Props {
	collapsed: boolean;
	onCollapseChange: () => void;
}

const Nav = styled.nav`
	background: ${vars.colors.darkShade};
	color: ${vars.colors.textInverted};
	grid-area: mainmenu;
	transition: max-width 250ms ease-out;
	white-space: nowrap;
`;

const Link = styled(RouterLink)`
	color: ${vars.colors.textInverted};
	font-family: 'Open Sans', sans-serif;
	text-decoration: none;
`;

const stopPropagation = (e: React.SyntheticEvent) => {
	e.stopPropagation();
	// e.preventDefault();
};

export const Mainmenu: React.FC<Props> = props => {
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			e.preventDefault();
			e.stopPropagation();
			props.onCollapseChange();
		},
		[props],
	);
	return (
		<Nav onClick={onClick}>
			<ul>
				<li>
					<Link onClick={stopPropagation} to="/">
						Landing page
					</Link>
				</li>
				<li>
					<Link onClick={stopPropagation} to="/about">
						About pages
					</Link>
				</li>
			</ul>
			{props.children}
		</Nav>
	);
};
