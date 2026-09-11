import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	imports: [RouterLink],
	templateUrl: './teams.component.html',
	styleUrl: './teams.component.scss',
})
export class TeamsComponent {
	protected readonly teams = [
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
}
