import React from 'react';
import styled, { css } from 'styled-components';
import {
	space,
	color,
	typography,
	layout,
	flexbox,
	grid,
	shadow,
	system,
	variant,
} from 'styled-system';
import ExternalLink from './icons/external-link.svg';

export const theme = {
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	colors: {
		pageBackground: '#EDEFF2',
		text: '#1D1924',

		primary: '#3B78BB',
		primaryText: '#ffffff',

		hyperlink: '#795377',
		hyperlinkHoverText: '#ffffff',
	},
};

export const Box = styled.div`
	${space}
	${color}
    ${typography}
    ${layout}
    ${flexbox}
    ${grid}
	${shadow}
`;

export const Stack = styled(Box)`
	& > * + * {
		${(props) =>
			system({
				spacing: {
					property: 'margin-top',
					scale: 'space',
				},
			})(props)}
	}
`;

export const Text = styled.span`
	${color}
	${typography}

    ${system({
			textDecoration: true,
			textTransform: true,
		})}
`;

export const Heading = styled.header`
    ${space}
	${color}
    ${typography}
`;

export function Anchor({ children, external, ...props }) {
	return (
		<StyledAnchor {...props}>
			{children}
			{/* has to be an inline svg for currentColor to work; can't insert as ::after content 😢 */}
			{external && (
				<Box display="inline-block" ml={1}>
					<ExternalLink />
				</Box>
			)}
		</StyledAnchor>
	);
}

export const StyledAnchor = styled.a`
	text-decoration: none;

	${variant({
		variants: {
			normal: {
				margin: '-1px -4px',
				padding: '1px 4px',
				color: 'hyperlink',
				'&:hover': {
					backgroundColor: 'hyperlink',
					color: 'hyperlinkHoverText',
				},
			},
			bare: {
				color: 'inherit',
			},
		},
	})}

    ${layout}
    ${color}
	${typography}
    ${system({
			textTransform: true,
		})}
`;

StyledAnchor.defaultProps = {
	variant: 'normal',
};
