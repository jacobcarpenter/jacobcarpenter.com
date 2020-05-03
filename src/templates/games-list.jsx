import React from 'react';
import { MakeCodeGamesList } from '../components/pages/MakeCodeGamesList';
import { PageLayout } from '../components/layout/PageLayout';

export default function ({ pageContext: { games } }) {
	return (
		<PageLayout>
			<MakeCodeGamesList games={games} />
		</PageLayout>
	);
}
