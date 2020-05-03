import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Box, Stack, Text, Anchor } from '../styled';

export function MakeCodeGamesList({ games }) {
	return (
		<Stack spacing={[3]}>
			<Box>
				Lately, I‘ve been having a lot of fun building games with{' '}
				<Anchor external href="https://arcade.makecode.com">
					makecode arcade
				</Anchor>
				. Here are some of them:
			</Box>

			{games.map((game, i) => (
				<Anchor
					key={game.id}
					as={Link}
					to={`/makecode/${game.id}`}
					display="block"
					variant="bare"
				>
					<GameBox flipped={i % 2 !== 0}>
						<Box lineHeight="0">
							<img
								alt="Screenshot of a game featuring two tanks taking aim at each other."
								src={game.screenshot}
							/>
						</Box>
						<Stack spacing={[2]}>
							<FakeAnchor>{game.title}</FakeAnchor>

							<Box>{game.shortDescription}</Box>
						</Stack>
					</GameBox>
				</Anchor>
			))}
		</Stack>
	);
}

const GameBox = styled(Box)`
	display: grid;
	padding: ${({ theme }) => theme.space[2]}px;

	grid-template-columns: auto 1fr;
	grid-gap: ${({ theme }) => theme.space[3]}px;

	background-color: white;
	box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);

	a:hover & {
		box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
	}

	${({ flipped }) =>
		flipped &&
		css`
			direction: rtl;

			& > * {
				direction: ltr;
			}
		`}
`;

const FakeAnchor = styled(Text)`
	margin: -1px -4px;
	padding: 1px 4px;

	color: ${({ theme }) => theme.colors.hyperlink};

	a:hover & {
		background-color: ${({ theme }) => theme.colors.hyperlink};
		color: ${({ theme }) => theme.colors.hyperlinkHoverText};
	}
`;
