import { Component, signal } from '@angular/core';

@Component({
	templateUrl: './media.component.html',
	styleUrl: './media.component.scss',
})
export class MediaComponent {
	protected readonly mediaView = signal<'photos' | 'videos' | 'streams'>('photos');
	protected readonly photos = [
		{ id: 'arena', tag: 'CLUB', caption: 'Match day at the arena' },
		{ id: 'huddle', tag: 'TEAMS', caption: 'Pre-match strategy huddle' },
		{ id: 'crowd', tag: 'COMMUNITY', caption: 'The community, live and loud' },
		{ id: 'desk', tag: 'CHESS', caption: 'Deep in the mid-game' },
		{ id: 'setup', tag: 'CS2', caption: 'Server room, before the pistol round' },
		{ id: 'trophy', tag: 'BRAWL STARS', caption: 'Trophy lift, community cup' },
	];
	protected readonly videos = [
		{ id: 'reel-01', title: 'Season opener recap', length: '3:12', tag: 'CLUB' },
		{ id: 'reel-02', title: 'Roster announcement', length: '1:48', tag: 'TEAMS' },
		{ id: 'reel-03', title: 'Behind the tag: training week', length: '5:04', tag: 'COMMUNITY' },
	];
	protected readonly streams = [
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
}
