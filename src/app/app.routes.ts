import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { companyProfile } from './feature/company/company.data';

const games = [
	{
		slug: 'chess',
		title: 'Chess',
		description:
			'Meet the Web Art Work Chess roster — board-by-board profiles, coaching staff, and how the team competes.',
	},
	{
		slug: 'cs2',
		title: 'Counter-Strike 2',
		description:
			'Meet the Web Art Work Counter-Strike 2 roster — in-game leader, riflers, and the coaching staff behind them.',
	},
	{
		slug: 'brawl-stars',
		title: 'Brawl Stars',
		description:
			'Meet the Web Art Work Brawl Stars roster — the 3v3 squad, coaching staff, and how the team competes.',
	},
];

const articles = [
	{
		slug: 'a-new-arena',
		title: 'A new arena. The same Web Art Work spirit.',
		description:
			'Web Art Work Esports opens a new chapter — the same community, creativity, and teamwork, now on a bigger stage.',
	},
	{
		slug: 'one-way-forward',
		title: 'Different roles. One way forward.',
		description:
			'From in-game leaders to rapid chess players, every Web Art Work roster answers to the same standard.',
	},
	{
		slug: 'our-community',
		title: 'For the people on both sides of the screen.',
		description:
			'Rooted in Ukraine and connected by the game — why Web Art Work Esports exists for its community, not just its players.',
	},
];

const tournaments = [
	{
		slug: 'chess-cup',
		title: 'Community Chess Cup',
		description:
			'Web Art Work enters the Community Chess Cup — Rapid Swiss format, 18–20 September 2026.',
	},
	{
		slug: 'cs2-series',
		title: 'Community Series',
		description:
			'Web Art Work enters the CS2 Community Series — group stage into single elimination, 20–27 September 2026.',
	},
	{
		slug: 'brawl-cup',
		title: 'Brawl Community Cup',
		description:
			'Web Art Work enters the Brawl Community Cup — 3v3 single elimination on 22 September 2026.',
	},
	{
		slug: 'chess-cup-08',
		title: 'Community Chess Cup — September results',
		description:
			'Web Art Work finished 2nd at the Community Chess Cup, 6–8 September 2026. Full results and standings.',
	},
	{
		slug: 'cs2-series-06',
		title: 'Community Series — September results',
		description:
			'Web Art Work won the CS2 Community Series, 30 August – 6 September 2026. Full results and standings.',
	},
	{
		slug: 'brawl-cup-04',
		title: 'Brawl Community Cup — September results',
		description:
			'Web Art Work won the Brawl Community Cup on 4 September 2026. Full results and standings.',
	},
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
				description:
					'Meet the Web Art Work Esports rosters across Chess, Counter-Strike 2, and Brawl Stars.',
				robots: 'index, follow',
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
				description:
					'Every upcoming fixture and past result for Web Art Work Esports, across Chess, CS2, and Brawl Stars.',
				robots: 'index, follow',
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
				description:
					'Club journal, team notes, and community stories from Web Art Work Esports.',
				robots: 'index, follow',
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
				description:
					'Official Web Art Work Esports merch — jerseys, hoodies, mugs, and gear for the crew.',
				robots: 'index, follow',
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
				description: 'Review your Web Art Work Esports market order before checkout.',
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
				description:
					'Photos, videos, and streams from Web Art Work Esports — on and off server.',
				robots: 'index, follow',
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
				description:
					'Every tournament Web Art Work Esports has entered this season, upcoming and completed.',
				robots: 'index, follow',
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
				description:
					'The disciplines Web Art Work Esports competes in: Chess, Counter-Strike 2, and Brawl Stars.',
				robots: 'index, follow',
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
				description: article.description,
				robots: 'index, follow',
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
				description: tournament.description,
				robots: 'index, follow',
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
				description: game.description,
				robots: 'index, follow',
			},
		},
		loadComponent: () => import('./pages/game/game.component').then((m) => m.GameComponent),
	})),
	{ path: '**', redirectTo: '' },
];
