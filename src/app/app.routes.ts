import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { companyProfile } from './feature/company/company.data';

const games = [
	{ slug: 'chess', title: 'Chess' },
	{ slug: 'cs2', title: 'Counter-Strike 2' },
	{ slug: 'brawl-stars', title: 'Brawl Stars' },
];

const articles = [
	{ slug: 'a-new-arena', title: 'A new arena. The same Web Art Work spirit.' },
	{ slug: 'one-way-forward', title: 'Different roles. One way forward.' },
	{ slug: 'our-community', title: 'For the people on both sides of the screen.' },
];

const tournaments = [
	{ slug: 'chess-cup', title: 'Community Chess Cup' },
	{ slug: 'cs2-series', title: 'Community Series' },
	{ slug: 'brawl-cup', title: 'Brawl Community Cup' },
	{ slug: 'chess-cup-08', title: 'Community Chess Cup' },
	{ slug: 'cs2-series-06', title: 'Community Series' },
	{ slug: 'brawl-cup-04', title: 'Brawl Community Cup' },
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
		path: 'cart',
		pathMatch: 'full',
		data: {
			pageTitle: 'Cart',
			meta: {
				...buildRouteMeta(companyProfile, '/cart'),
				title: 'Cart',
				robots: 'noindex, nofollow',
			},
		},
		loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartComponent),
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
	{
		path: 'games',
		pathMatch: 'full',
		data: {
			pageTitle: 'Games',
			meta: {
				...buildRouteMeta(companyProfile, '/games'),
				title: 'Games',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () => import('./pages/games/games.component').then((m) => m.GamesComponent),
	},
	...articles.map((article) => ({
		path: `news/${article.slug}`,
		pathMatch: 'full' as const,
		data: {
			slug: article.slug,
			pageTitle: article.title,
			meta: {
				...buildRouteMeta(companyProfile, `/news/${article.slug}`),
				title: article.title,
				robots: 'noindex, follow',
			},
		},
		loadComponent: () =>
			import('./pages/article/article.component').then((m) => m.ArticleComponent),
	})),
	...tournaments.map((tournament) => ({
		path: `tournaments/${tournament.slug}`,
		pathMatch: 'full' as const,
		data: {
			slug: tournament.slug,
			pageTitle: tournament.title,
			meta: {
				...buildRouteMeta(companyProfile, `/tournaments/${tournament.slug}`),
				title: tournament.title,
				robots: 'noindex, follow',
			},
		},
		loadComponent: () =>
			import('./pages/tournament/tournament.component').then((m) => m.TournamentComponent),
	})),
	...games.map((game) => ({
		path: `teams/${game.slug}`,
		pathMatch: 'full' as const,
		data: {
			slug: game.slug,
			pageTitle: game.title,
			meta: {
				...buildRouteMeta(companyProfile, `/teams/${game.slug}`),
				title: game.title,
				robots: 'noindex, follow',
			},
		},
		loadComponent: () => import('./pages/game/game.component').then((m) => m.GameComponent),
	})),
	{ path: '**', redirectTo: '' },
];
