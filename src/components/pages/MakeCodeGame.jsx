import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from '../styled';

export function MakeCodeGame({ game }) {
	return (
		<Box
			mt={[3]}
			display="grid"
			gridTemplateColumns={['1fr', null, '360px 1fr']}
			gridGap={[4]}
		>
			<GameHost shareId={game.shareId} />
			<Description description={game.longDescription} />
		</Box>
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
