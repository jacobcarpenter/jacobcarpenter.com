import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { Text, Anchor } from '../styled';

export function MakeCodeGame({ game }) {
	return (
		<>
			<ReactMarkdown escapeHtml={false} source={game.longDescription} />
		</>
	);
}
