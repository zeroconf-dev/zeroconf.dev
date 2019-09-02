import { styled } from 'linaria/react';
import { vars, typography } from '../../globals';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size?: 'sm' | 'md' | 'lg';
}
export const Button = styled.button<Props>`
	background-color: ${vars.colors.grayLight};
	border: none;
	border-radius: 0.28571429rem;
	box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 ${vars.colors.gray} inset;
	color: ${vars.colors.text};
	cursor: pointer;
	display: inline-block;
	font-weight: 700;
	font-style: normal;
	line-height: 1em;
	margin: 0 0.25em 0 0;
	outline: 0;
	padding: ${typography.compactPadding} ${typography.standardPadding};
	vertical-align: baseline;
	text-align: center;
	text-decoration: none;
	text-shadow: none;
	text-transform: none;
	user-select: none;

	&:active {
		background-color: ${vars.colors.grayDark};
	}

	&:focus {
		background-color: ${vars.colors.gray};
		color: ${vars.colors.text};
	}

	&:hover {
		background-color: ${vars.colors.gray};
	}
`;
