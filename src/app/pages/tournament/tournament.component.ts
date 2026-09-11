import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface TournamentMatch {
	stage: string;
	teamA: string;
	teamB: string;
	score: string | null;
	date: string;
}

interface Tournament {
	slug: string;
	game: string;
	name: string;
	status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
	dates: string;
	format: string;
	prizePool: string;
	location: string;
	description: string;
	participants: string[];
	matches: TournamentMatch[];
	placement: string | null;
}

const TOURNAMENTS: Tournament[] = [
	{
		slug: 'chess-cup',
		game: 'CHESS',
		name: 'Community Chess Cup',
		status: 'UPCOMING',
		dates: '18 SEP — 20 SEP 2026',
		format: 'Rapid · Swiss, 7 rounds',
		prizePool: '$500',
		location: 'Online · Kyiv time',
		description:
			'A community rapid event bringing together club and independent players for a fast-paced Swiss format over three days.',
		participants: ['WAW', 'NORTHSIDE', 'UNIT FIVE', 'AFTERHOURS', 'KNIGHT CLUB', 'ENDGAME'],
		matches: [
			{ stage: 'Round 1', teamA: 'WAW', teamB: 'NORTHSIDE', score: null, date: '18 SEP · 19:00' },
			{ stage: 'Round 2', teamA: 'WAW', teamB: 'ENDGAME', score: null, date: '19 SEP · 19:00' },
			{ stage: 'Round 3', teamA: 'WAW', teamB: 'KNIGHT CLUB', score: null, date: '20 SEP · 19:00' },
		],
		placement: null,
	},
	{
		slug: 'cs2-series',
		game: 'CS2',
		name: 'Community Series',
		status: 'UPCOMING',
		dates: '20 SEP — 27 SEP 2026',
		format: 'BO3 · Group stage into single elimination',
		prizePool: '$1,200',
		location: 'Online · Kyiv time',
		description:
			'An eight-team community series opening with a group stage before moving into a single-elimination bracket for the title.',
		participants: [
			'WAW',
			'UNIT FIVE',
			'NORTHSIDE',
			'AFTERHOURS',
			'REDLINE',
			'OVERWATCH FIVE',
			'LASTCALL',
			'PIVOT GG',
		],
		matches: [
			{
				stage: 'Group A',
				teamA: 'WAW',
				teamB: 'UNIT FIVE',
				score: null,
				date: '20 SEP · 18:00',
			},
			{ stage: 'Group A', teamA: 'WAW', teamB: 'REDLINE', score: null, date: '23 SEP · 18:00' },
			{
				stage: 'Group A',
				teamA: 'WAW',
				teamB: 'LASTCALL',
				score: null,
				date: '25 SEP · 18:00',
			},
		],
		placement: null,
	},
	{
		slug: 'brawl-cup',
		game: 'BRAWL STARS',
		name: 'Brawl Community Cup',
		status: 'UPCOMING',
		dates: '22 SEP 2026',
		format: '3v3 · Single elimination',
		prizePool: '$300',
		location: 'Online · Kyiv time',
		description:
			'A single-day knockout cup for community 3v3 squads, played across a compact single-elimination bracket.',
		participants: ['WAW', 'AFTERHOURS', 'NORTHSIDE', 'UNIT FIVE', 'TRIOFORCE', 'GEMHUNTERS'],
		matches: [
			{
				stage: 'Quarterfinal',
				teamA: 'WAW',
				teamB: 'TRIOFORCE',
				score: null,
				date: '22 SEP · 20:00',
			},
		],
		placement: null,
	},
	{
		slug: 'chess-cup-08',
		game: 'CHESS',
		name: 'Community Chess Cup',
		status: 'COMPLETED',
		dates: '06 SEP — 08 SEP 2026',
		format: 'Rapid · Swiss, 7 rounds',
		prizePool: '$500',
		location: 'Online · Kyiv time',
		description:
			'A community rapid event bringing together club and independent players for a fast-paced Swiss format over three days.',
		participants: ['WAW', 'NORTHSIDE', 'UNIT FIVE', 'AFTERHOURS', 'KNIGHT CLUB', 'ENDGAME'],
		matches: [
			{ stage: 'Round 5', teamA: 'WAW', teamB: 'ENDGAME', score: '1 : 0', date: '07 SEP' },
			{
				stage: 'Round 6',
				teamA: 'WAW',
				teamB: 'KNIGHT CLUB',
				score: '0.5 : 0.5',
				date: '08 SEP',
			},
			{ stage: 'Round 7', teamA: 'WAW', teamB: 'UNIT FIVE', score: '0.5 : 1.5', date: '08 SEP' },
		],
		placement: '2nd place',
	},
	{
		slug: 'cs2-series-06',
		game: 'CS2',
		name: 'Community Series',
		status: 'COMPLETED',
		dates: '30 AUG — 06 SEP 2026',
		format: 'BO3 · Group stage into single elimination',
		prizePool: '$1,200',
		location: 'Online · Kyiv time',
		description:
			'An eight-team community series opening with a group stage before moving into a single-elimination bracket for the title.',
		participants: [
			'WAW',
			'UNIT FIVE',
			'NORTHSIDE',
			'AFTERHOURS',
			'REDLINE',
			'OVERWATCH FIVE',
			'LASTCALL',
			'PIVOT GG',
		],
		matches: [
			{ stage: 'Semifinal', teamA: 'WAW', teamB: 'REDLINE', score: '2 : 0', date: '04 SEP' },
			{ stage: 'Final', teamA: 'WAW', teamB: 'NORTHSIDE', score: '2 : 0', date: '06 SEP' },
		],
		placement: '1st place',
	},
	{
		slug: 'brawl-cup-04',
		game: 'BRAWL STARS',
		name: 'Brawl Community Cup',
		status: 'COMPLETED',
		dates: '04 SEP 2026',
		format: '3v3 · Single elimination',
		prizePool: '$300',
		location: 'Online · Kyiv time',
		description:
			'A single-day knockout cup for community 3v3 squads, played across a compact single-elimination bracket.',
		participants: ['WAW', 'AFTERHOURS', 'NORTHSIDE', 'UNIT FIVE', 'TRIOFORCE', 'GEMHUNTERS'],
		matches: [
			{ stage: 'Semifinal', teamA: 'WAW', teamB: 'GEMHUNTERS', score: '2 : 0', date: '04 SEP' },
			{ stage: 'Final', teamA: 'WAW', teamB: 'AFTERHOURS', score: '2 : 1', date: '04 SEP' },
		],
		placement: '1st place',
	},
];

@Component({
	imports: [RouterLink],
	templateUrl: './tournament.component.html',
	styleUrl: './tournament.component.scss',
})
export class TournamentComponent {
	protected readonly tournament: Tournament;

	constructor() {
		const slug = inject(ActivatedRoute).snapshot.data['slug'] as string;
		this.tournament = TOURNAMENTS.find((item) => item.slug === slug) ?? TOURNAMENTS[0];
	}
}
