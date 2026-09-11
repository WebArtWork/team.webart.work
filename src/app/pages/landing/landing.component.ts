import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	imports: [RouterLink],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent {
	protected readonly matchView = signal<'upcoming' | 'results'>('upcoming');
	protected readonly games = [
		{
			id: 'CHESS',
			path: '/teams/chess',
			name: 'Chess',
			genre: 'Every move matters',
			number: '01',
			description:
				'Clear thinking. Creative play. A shared passion for the sixty-four squares.',
			roles: ['Player 1', 'Player 2', 'Player 3'],
		},
		{
			id: 'CS2',
			path: '/teams/cs2',
			name: 'Counter-Strike 2',
			genre: 'Tactical precision',
			number: '02',
			description: 'Five players. One call. Every round is a chance to make our mark.',
			roles: ['In-game leader', 'AWPer', 'Entry fragger', 'Rifler', 'Support'],
		},
		{
			id: 'BRAWL STARS',
			path: '/teams/brawl-stars',
			name: 'Brawl Stars',
			genre: 'Fast plays. Shared wins.',
			number: '03',
			description: 'Three players. Quick decisions. Teamwork that makes every play count.',
			roles: ['Player 1', 'Player 2', 'Player 3'],
		},
	];
	protected readonly fixtures = [
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
	protected readonly results = [
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
}
