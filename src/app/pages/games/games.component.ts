import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	imports: [RouterLink],
	templateUrl: './games.component.html',
	styleUrl: './games.component.scss',
})
export class GamesComponent {
	protected readonly games = [
		{
			id: 'CHESS',
			path: '/teams/chess',
			name: 'Chess',
			genre: 'Every move matters',
			number: '01',
			description:
				'Clear thinking. Creative play. A shared passion for the sixty-four squares.',
			format: '1v1 · Rapid & Classical',
		},
		{
			id: 'CS2',
			path: '/teams/cs2',
			name: 'Counter-Strike 2',
			genre: 'Tactical precision',
			number: '02',
			description: 'Five players. One call. Every round is a chance to make our mark.',
			format: '5v5 · BO1 & BO3',
		},
		{
			id: 'BRAWL STARS',
			path: '/teams/brawl-stars',
			name: 'Brawl Stars',
			genre: 'Fast plays. Shared wins.',
			number: '03',
			description: 'Three players. Quick decisions. Teamwork that makes every play count.',
			format: '3v3 · Single elim.',
		},
	];
}
