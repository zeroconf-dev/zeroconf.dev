import React from 'react';
import { styled } from 'linaria/react';
import { vars } from '../../globals';

const Header = styled.header`
	background: ${vars.colors.primaryBrand};
	display: flex;
	grid-area: header;
	justify-content: flex-end;
`;

interface Props {}

const SearchInput = styled.input`
	flex: 1 1 0;
	justify-self: flex-end;
	line-height: 1rem;
	max-width: 300px;
	min-width: 50px;
`;

export const Topbar: React.FC<Props> = props => {
	return (
		<Header>
			{props.children}
			<SearchInput />
		</Header>
	);
};
