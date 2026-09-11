import { Component, signal } from '@angular/core';

@Component({
	templateUrl: './tournaments.component.html',
	styleUrl: './tournaments.component.scss',
})
export class TournamentsComponent {
	protected readonly tournamentView = signal<'upcoming' | 'past'>('upcoming');
	protected readonly upcoming = [
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
	protected readonly past = [
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
}
