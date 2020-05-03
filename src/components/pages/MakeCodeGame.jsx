import React from 'react';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { Box, Stack, Anchor } from '../styled';

export function MakeCodeGame({ game }) {
	return (
		<Stack spacing={[3]}>
			<Box maxWidth={[600]} mx="auto">
				<Anchor as={Link} to="/makecode">
					← Games
				</Anchor>
			</Box>
			<Box
				display="grid"
				gridTemplateColumns={['1fr', null, '360px 1fr']}
				gridGap={[4]}
			>
				<GameHost shareId={game.shareId} />
				<Description description={game.longDescription} />
			</Box>
		</Stack>
	);
}

function GameHost({ shareId }) {
	return (
		<Box maxWidth={400}>
			<div
				style={{
					position: 'relative',
					height: 0,
					paddingBottom: '117.6%',
					overflow: 'hidden',
				}}
			>
				<iframe
					title="makecode arcade"
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
					}}
					src={`https://arcade.makecode.com/---run?id=${shareId}&nofooter=1&embed=1`}
					allowFullScreen="allowfullscreen"
					sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
					frameBorder="0"
				></iframe>
			</div>
		</Box>
	);
}

function Description({ description }) {
	return (
		<Box css="*:first-child { margin-block-start: 0 }">
			<ReactMarkdown escapeHtml={false} source={description} />
		</Box>
	);
}
