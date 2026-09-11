import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface RosterMember {
	gamertag: string;
	role: string;
	joined: string;
	country: string;
	note: string;
	staff?: boolean;
}

const CLUB_MANAGER: RosterMember = {
	gamertag: 'Yevhen Marchenko',
	role: 'Team Manager',
	joined: 'Oct 2025',
	country: 'Ukraine',
	note: 'Keeps the schedule, the travel, and the team running on time.',
	staff: true,
};

const CLUB_PSYCHOLOGIST: RosterMember = {
	gamertag: 'Dr. Olena Kravets',
	role: 'Team Psychologist',
	joined: 'Oct 2025',
	country: 'Ukraine',
	note: 'Keeps heads clear before finals and steady after a loss.',
	staff: true,
};

interface GameRecord {
	slug: string;
	id: string;
	name: string;
	genre: string;
	number: string;
	format: string;
	description: string;
	roster: RosterMember[];
}

const GAMES: GameRecord[] = [
	{
		slug: 'chess',
		id: 'CHESS',
		name: 'Chess',
		genre: 'Every move matters',
		number: '01',
		format: '1v1 · Rapid & Classical',
		description:
			'Clear thinking. Creative play. A shared passion for the sixty-four squares.',
		roster: [
			{
				gamertag: 'KNIGHTFALL',
				role: 'Board 1 · Classical',
				joined: 'Jan 2026',
				country: 'Ukraine',
				note: 'Reads six moves ahead before the coffee gets cold.',
			},
			{
				gamertag: 'ENDGAME',
				role: 'Board 2 · Rapid',
				joined: 'Feb 2026',
				country: 'Ukraine',
				note: 'Turns equal endgames into wins.',
			},
			{
				gamertag: 'GAMBITQUEEN',
				role: 'Board 3 · Blitz',
				joined: 'Mar 2026',
				country: 'Poland',
				note: 'Aggressive openings, zero hesitation.',
			},
			{
				gamertag: 'Ivan Petrenko',
				role: 'Head Coach',
				joined: 'Dec 2025',
				country: 'Ukraine',
				note: 'Builds the opening prep and reviews every game.',
				staff: true,
			},
			CLUB_PSYCHOLOGIST,
			CLUB_MANAGER,
		],
	},
	{
		slug: 'cs2',
		id: 'CS2',
		name: 'Counter-Strike 2',
		genre: 'Tactical precision',
		number: '02',
		format: '5v5 · BO1 & BO3',
		description: 'Five players. One call. Every round is a chance to make our mark.',
		roster: [
			{
				gamertag: 'VANGUARD',
				role: 'In-Game Leader',
				joined: 'Nov 2025',
				country: 'Ukraine',
				note: 'Calls the round before it starts.',
			},
			{
				gamertag: 'SNIPE',
				role: 'AWPer',
				joined: 'Nov 2025',
				country: 'Ukraine',
				note: 'One bullet, one pick.',
			},
			{
				gamertag: 'BREACH',
				role: 'Entry Fragger',
				joined: 'Dec 2025',
				country: 'Germany',
				note: 'First through every site.',
			},
			{
				gamertag: 'PRECISION',
				role: 'Rifler',
				joined: 'Dec 2025',
				country: 'Ukraine',
				note: 'Consistent trades, every round.',
			},
			{
				gamertag: 'ANCHOR',
				role: 'Support',
				joined: 'Jan 2026',
				country: 'Czechia',
				note: 'Holds the line so the team can rotate.',
			},
			{
				gamertag: 'Artem Bondar',
				role: 'Head Coach',
				joined: 'Nov 2025',
				country: 'Ukraine',
				note: 'Runs the VOD reviews and calls the timeouts that matter.',
				staff: true,
			},
			CLUB_PSYCHOLOGIST,
			CLUB_MANAGER,
		],
	},
	{
		slug: 'brawl-stars',
		id: 'BRAWL STARS',
		name: 'Brawl Stars',
		genre: 'Fast plays. Shared wins.',
		number: '03',
		format: '3v3 · Single elim.',
		description: 'Three players. Quick decisions. Teamwork that makes every play count.',
		roster: [
			{
				gamertag: 'TRIPLESHOT',
				role: 'Player 1',
				joined: 'Feb 2026',
				country: 'Ukraine',
				note: 'Never wastes a super.',
			},
			{
				gamertag: 'DASHER',
				role: 'Player 2',
				joined: 'Feb 2026',
				country: 'Romania',
				note: 'First to the bush, first to the pick.',
			},
			{
				gamertag: 'WALLBREAKER',
				role: 'Player 3',
				joined: 'Mar 2026',
				country: 'Ukraine',
				note: 'Turns the map into an ambush.',
			},
			{
				gamertag: 'Sofia Nowak',
				role: 'Head Coach',
				joined: 'Jan 2026',
				country: 'Poland',
				note: 'Drills rotations and reviews every trophy push.',
				staff: true,
			},
			CLUB_PSYCHOLOGIST,
			CLUB_MANAGER,
		],
	},
];

const FIXTURES = [
	{
		game: 'CHESS',
		date: '18 SEP',
		time: '19:00',
		opponent: 'NORTHSIDE',
		badge: 'N',
		event: 'Community Chess Cup',
		format: 'Rapid',
	},
	{
		game: 'CS2',
		date: '20 SEP',
		time: '18:00',
		opponent: 'UNIT FIVE',
		badge: 'U5',
		event: 'Community Series',
		format: 'BO3',
	},
	{
		game: 'BRAWL STARS',
		date: '22 SEP',
		time: '20:00',
		opponent: 'AFTERHOURS',
		badge: 'A',
		event: 'Brawl Community Cup',
		format: '3v3',
	},
];

const RESULTS = [
	{
		game: 'CHESS',
		date: '08 SEP',
		score: '2 : 1',
		opponent: 'UNIT FIVE',
		badge: 'U5',
		event: 'Community Chess Cup',
		format: 'Rapid',
	},
	{
		game: 'CS2',
		date: '06 SEP',
		score: '2 : 0',
		opponent: 'NORTHSIDE',
		badge: 'N',
		event: 'Community Series',
		format: 'BO3',
	},
	{
		game: 'BRAWL STARS',
		date: '04 SEP',
		score: '2 : 1',
		opponent: 'AFTERHOURS',
		badge: 'A',
		event: 'Brawl Community Cup',
		format: '3v3',
	},
];

const TOURNAMENTS_UPCOMING = [
	{
		id: 'chess-cup',
		game: 'CHESS',
		name: 'Community Chess Cup',
		format: 'Rapid · Swiss',
		dates: '18 SEP — 20 SEP',
		status: 'REGISTERED',
	},
	{
		id: 'cs2-series',
		game: 'CS2',
		name: 'Community Series',
		format: 'BO3 · Group stage',
		dates: '20 SEP — 27 SEP',
		status: 'REGISTERED',
	},
	{
		id: 'brawl-cup',
		game: 'BRAWL STARS',
		name: 'Brawl Community Cup',
		format: '3v3 · Single elim.',
		dates: '22 SEP',
		status: 'REGISTERED',
	},
];

const TOURNAMENTS_PAST = [
	{
		id: 'chess-cup-08',
		game: 'CHESS',
		name: 'Community Chess Cup',
		format: 'Rapid · Swiss',
		dates: '08 SEP',
		placement: '2nd place',
	},
	{
		id: 'cs2-series-06',
		game: 'CS2',
		name: 'Community Series',
		format: 'BO3 · Group stage',
		dates: '06 SEP',
		placement: '1st place',
	},
	{
		id: 'brawl-cup-04',
		game: 'BRAWL STARS',
		name: 'Brawl Community Cup',
		format: '3v3 · Single elim.',
		dates: '04 SEP',
		placement: '1st place',
	},
];

const PHOTOS = [
	{ id: 'desk', tag: 'CHESS', caption: 'Deep in the mid-game' },
	{ id: 'setup', tag: 'CS2', caption: 'Server room, before the pistol round' },
	{ id: 'trophy', tag: 'BRAWL STARS', caption: 'Trophy lift, community cup' },
];

const VIDEOS = [
	{ id: 'reel-01', title: 'Season opener recap', length: '3:12', tag: 'CLUB' },
	{ id: 'reel-02', title: 'Roster announcement', length: '1:48', tag: 'TEAMS' },
];

const STREAMS = [
	{
		id: 'stream-01',
		title: 'CS2 vs UNIT FIVE — Community Series',
		status: 'UPCOMING',
		schedule: '20 SEP · 18:00 Kyiv',
		channel: 'Twitch',
	},
	{
		id: 'stream-02',
		title: 'Chess Rapid — Community Chess Cup',
		status: 'UPCOMING',
		schedule: '18 SEP · 19:00 Kyiv',
		channel: 'Twitch',
	},
	{
		id: 'stream-03',
		title: 'Brawl Stars — AFTERHOURS rematch',
		status: 'REPLAY',
		schedule: '04 SEP · VOD available',
		channel: 'YouTube',
	},
];

const NEWS = [
	{
		slug: 'a-new-arena',
		tag: 'CLUB',
		meta: 'CLUB JOURNAL',
		title: 'A new arena. The same Web Art Work spirit.',
	},
	{
		slug: 'one-way-forward',
		tag: 'TEAMS',
		meta: 'TEAM NOTES',
		title: 'Different roles. One way forward.',
	},
	{
		slug: 'our-community',
		tag: 'COMMUNITY',
		meta: 'COMMUNITY',
		title: 'For the people on both sides of the screen.',
	},
];

@Component({
	imports: [RouterLink],
	templateUrl: './game.component.html',
	styleUrl: './game.component.scss',
})
export class GameComponent {
	protected readonly game: GameRecord;
	protected readonly fixtures: typeof FIXTURES;
	protected readonly results: typeof RESULTS;
	protected readonly tournamentsUpcoming: typeof TOURNAMENTS_UPCOMING;
	protected readonly tournamentsPast: typeof TOURNAMENTS_PAST;
	protected readonly photos: typeof PHOTOS;
	protected readonly videos = VIDEOS;
	protected readonly streams: typeof STREAMS;
	protected readonly news = NEWS;

	constructor() {
		const slug = inject(ActivatedRoute).snapshot.data['slug'] as string;
		this.game = GAMES.find((item) => item.slug === slug) ?? GAMES[0];

		const gameId = this.game.id;
		this.fixtures = FIXTURES.filter((item) => item.game === gameId);
		this.results = RESULTS.filter((item) => item.game === gameId);
		this.tournamentsUpcoming = TOURNAMENTS_UPCOMING.filter((item) => item.game === gameId);
		this.tournamentsPast = TOURNAMENTS_PAST.filter((item) => item.game === gameId);
		this.photos = PHOTOS.filter((item) => item.tag === gameId);
		this.streams = STREAMS.filter((item) =>
			item.title.toUpperCase().includes(this.game.name.toUpperCase()),
		);
	}
}
