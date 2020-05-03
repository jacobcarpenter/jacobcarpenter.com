import React from 'react';
import { GamesList } from '../components/pages/GamesList';
import { PageLayout } from '../components/layout/PageLayout';

export default function ({ pageContext: { games } }) {
	return (
		<PageLayout>
			<GamesList games={games} />
		</PageLayout>
	);
}
