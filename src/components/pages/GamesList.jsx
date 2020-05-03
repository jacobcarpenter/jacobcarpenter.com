import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Box, Stack, Anchor } from '../styled';

export function GamesList({ games }) {
	return (
		<Stack spacing={[3]}>
			<Anchor as={Link} to="/">
				← Home
			</Anchor>
			<Box>
				I‘ve been having a lot of fun building games with{' '}
				<Anchor external href="https://arcade.makecode.com">
					makecode arcade
				</Anchor>
				. Here are some of them:
			</Box>

			{games.map((game, i) => (
				<GamesListGame key={game.id} game={game} flipped={i % 2 !== 0} />
			))}
		</Stack>
	);
}

function GamesListGame({ game, flipped }) {
	return (
		<Anchor
			as={Link}
			to={`/makecode/${game.id}`}
			display="block"
			variant="bare"
		>
			<GameBox flipped={flipped}>
				<Box width={[100, null, 160]} lineHeight="0">
					<Screenshot width="100%" src={game.screenshot} />
				</Box>
				<Stack spacing={[2]}>
					<Box>{game.title}</Box>
					<Box>{game.shortDescription}</Box>
				</Stack>
			</GameBox>
		</Anchor>
	);
}

function GameBox({ flipped, children }) {
	return (
		<HoverBox>
			<GameBoxGrid flipped={flipped}>{children}</GameBoxGrid>
		</HoverBox>
	);
}

const scaleX = 1.03;
const scaleY = 1.03;

const HoverBox = styled(Box)`
	background-color: white;
	box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);

	transition: background-color 0.2s, color 0.2s, transform 0.1s;

	> * {
		transition: transform 0.1s;
	}

	a:hover & {
		transform: scale(${scaleX}, ${scaleY});

		box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.4);

		background-color: ${({ theme }) => theme.colors.hyperlink};
		color: ${({ theme }) => theme.colors.hyperlinkHoverText};

		> * {
			/* transform: scale(${1 / scaleX}, ${1 / scaleY}); */
		}
	}
`;

const GameBoxGrid = styled(Box)`
	display: grid;
	padding: ${({ theme }) => theme.space[3]}px;

	grid-template-columns: auto 1fr;
	grid-gap: ${({ theme }) => theme.space[3]}px;

	${({ flipped }) =>
		flipped &&
		css`
			direction: rtl;

			> * {
				direction: ltr;
			}
		`}
`;

const Screenshot = styled.img.attrs(() => ({ alt: '' }))`
	image-rendering: pixelated;
	image-rendering: crisp-edges;
`;
