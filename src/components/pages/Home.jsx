import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text, Anchor } from '../styled';

export function Home() {
	return (
		<>
			<Text>Here are some links to things that I’ve made or helped make:</Text>
			<dl>
				<Entry>
					<Anchor as={Link} to="/makecode">
						makecode arcade games
					</Anchor>
				</Entry>
				<Description>
					I‘ve been having a lot of fun lately building games with makecode
					arcade.
				</Description>
				<Entry>
					<Anchor external href="https://99spokes.com/">
						99 Spokes
					</Anchor>
				</Entry>
				<Description>
					Specs, geometry, and side-by-side bike comparison using the largest
					public bike archive on the planet.
				</Description>
			</dl>
		</>
	);
}

const Entry = styled.dt`
	margin-top: 12px;
`;

const Description = styled.dd`
	margin-top: 12px;
`;
