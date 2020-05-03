import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from './GlobalStyle';
import { PageHeader } from './PageHeader';
import { Box, theme } from '../styled';

export function PageLayout({ children, width = 600 }) {
	return (
		<ThemeProvider theme={theme}>
			<Helmet>
				<meta name="theme-color" content={theme.colors.primary} />
				<title>jacobcarpenter.com</title>
			</Helmet>
			<GlobalStyle />
			<PageHeader maxWidth={600} />
			<Box mt={[3]} mx={[3]} display="flex" justifyContent="center">
				<Box flex="1" maxWidth={width}>
					{children}
				</Box>
			</Box>
		</ThemeProvider>
	);
}
