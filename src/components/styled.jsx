import React from 'react';

import styled from 'styled-components';
import {
	space,
	color,
	typography,
	layout,
	flexbox,
	grid,
	system,
} from 'styled-system';
import ExternalLink from './icons/external-link.svg';

export const theme = {
	colors: {
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
			{external && (
				<Box display="inline-block" ml={2}>
					<ExternalLink />
				</Box>
			)}
		</StyledAnchor>
	);
}

export const StyledAnchor = styled.a`
	margin: 0 -4px;
    padding: 0 4px;
	text-decoration: none;
    
	color: ${({ theme }) => theme.colors.hyperlink};
	
	&:hover {
        background: ${({ theme }) => theme.colors.hyperlink};
        color: ${({ theme }) => theme.colors.hyperlinkHoverText};
	}

    ${color}
	${typography}
    ${system({
			textTransform: true,
		})}
`;
