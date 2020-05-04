import React from 'react';
import { Link } from 'gatsby';
import { Box, Text, Anchor } from '../styled';

export function PageHeader({ maxWidth }) {
	return (
		<Box
			as="header"
			display="flex"
			justifyContent="center"
			pt={[4, 5]}
			px={[3]}
			pb={[4]}
			bg="primary"
			fontSize={[4]}
			boxShadow="0 2px 2px 1px rgba(0, 0, 0, 0.2)"
		>
			<Box flex="1" maxWidth={maxWidth}>
				<Text
					fontFamily="'Quicksand', sans-serif"
					fontWeight="bold"
					textTransform="lowercase"
					textShadow="2px 2px 6px #1D1924"
				>
					<Anchor
						as={Link}
						to="/"
						color="primaryText"
						m="-1px -6px"
						p="1px 6px"
					>
						Jacob Carpenter [dot] com
					</Anchor>
				</Text>
			</Box>
		</Box>
	);
}
