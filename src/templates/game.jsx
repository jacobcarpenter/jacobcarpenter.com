import React from 'react';
import { MakeCodeGame } from '../components/pages/MakeCodeGame';
import { PageLayout } from '../components/layout/PageLayout';

export default function ({ pageContext: { game } }) {
	return (
		<PageLayout>
			<MakeCodeGame game={game} />
		</PageLayout>
	);
}
