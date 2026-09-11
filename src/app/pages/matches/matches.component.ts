import { Component, signal } from '@angular/core';

@Component({
	templateUrl: './matches.component.html',
	styleUrl: './matches.component.scss',
})
export class MatchesComponent {
	protected readonly matchView = signal<'upcoming' | 'results'>('upcoming');
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
