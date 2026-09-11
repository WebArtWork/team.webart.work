import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { companyProfile } from './feature/company/company.data';

const pages = [
	{ path: 'teams', title: 'Teams' },
	{ path: 'teams/chess', title: 'Chess' },
	{ path: 'teams/cs2', title: 'Counter-Strike 2' },
	{ path: 'teams/brawl-stars', title: 'Brawl Stars' },
	{ path: 'matches', title: 'Matches' },
	{ path: 'news', title: 'News' },
	{ path: 'news/a-new-arena', title: 'A new arena. The same Web Art Work spirit.' },
	{ path: 'news/one-way-forward', title: 'Different roles. One way forward.' },
	{ path: 'news/our-community', title: 'For the people on both sides of the screen.' },
	{ path: 'market', title: 'Market' },
	{ path: 'media', title: 'Media' },
	{ path: 'tournaments', title: 'Tournaments' },
];

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		data: { meta: { ...buildRouteMeta(companyProfile, '/'), titleSuffix: '' } },
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	...pages.map((page) => ({
		path: page.path,
		pathMatch: 'full' as const,
		data: {
			pageTitle: page.title,
			meta: {
				...buildRouteMeta(companyProfile, `/${page.path}`),
				title: page.title,
				robots: 'noindex, follow',
			},
		},
		loadComponent: () =>
			import('./pages/placeholder/placeholder.component').then((m) => m.PlaceholderComponent),
	})),
	{ path: '**', redirectTo: '' },
];
