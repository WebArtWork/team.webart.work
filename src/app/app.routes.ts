import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { companyProfile } from './feature/company/company.data';

const pages = [
	{ path: 'teams/chess', title: 'Chess' },
	{ path: 'teams/cs2', title: 'Counter-Strike 2' },
	{ path: 'teams/brawl-stars', title: 'Brawl Stars' },
	{ path: 'games', title: 'Games' },
	{ path: 'news/a-new-arena', title: 'A new arena. The same Web Art Work spirit.' },
	{ path: 'news/one-way-forward', title: 'Different roles. One way forward.' },
	{ path: 'news/our-community', title: 'For the people on both sides of the screen.' },
];

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		data: { meta: { ...buildRouteMeta(companyProfile, '/'), titleSuffix: '' } },
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: 'teams',
		pathMatch: 'full',
		data: {
			pageTitle: 'Teams',
			meta: {
				...buildRouteMeta(companyProfile, '/teams'),
				title: 'Teams',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () => import('./pages/teams/teams.component').then((m) => m.TeamsComponent),
	},
	{
		path: 'matches',
		pathMatch: 'full',
		data: {
			pageTitle: 'Matches',
			meta: {
				...buildRouteMeta(companyProfile, '/matches'),
				title: 'Matches',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () =>
			import('./pages/matches/matches.component').then((m) => m.MatchesComponent),
	},
	{
		path: 'news',
		pathMatch: 'full',
		data: {
			pageTitle: 'News',
			meta: {
				...buildRouteMeta(companyProfile, '/news'),
				title: 'News',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () => import('./pages/news/news.component').then((m) => m.NewsComponent),
	},
	{
		path: 'market',
		pathMatch: 'full',
		data: {
			pageTitle: 'Market',
			meta: {
				...buildRouteMeta(companyProfile, '/market'),
				title: 'Market',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () =>
			import('./pages/market/market.component').then((m) => m.MarketComponent),
	},
	{
		path: 'media',
		pathMatch: 'full',
		data: {
			pageTitle: 'Media',
			meta: {
				...buildRouteMeta(companyProfile, '/media'),
				title: 'Media',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () => import('./pages/media/media.component').then((m) => m.MediaComponent),
	},
	{
		path: 'tournaments',
		pathMatch: 'full',
		data: {
			pageTitle: 'Tournaments',
			meta: {
				...buildRouteMeta(companyProfile, '/tournaments'),
				title: 'Tournaments',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () =>
			import('./pages/tournaments/tournaments.component').then(
				(m) => m.TournamentsComponent,
			),
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
