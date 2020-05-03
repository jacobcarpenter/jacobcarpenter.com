import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { PageHeader } from './PageHeader';
import { Box, theme } from '../styled';

const maxWidth = [600];

export function PageLayout({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<PageHeader maxWidth={maxWidth} />
			<Box mt={[3]} display="flex" justifyContent="center">
				<Box flex="1" maxWidth={maxWidth}>
					{children}
				</Box>
			</Box>
		</ThemeProvider>
	);
}
