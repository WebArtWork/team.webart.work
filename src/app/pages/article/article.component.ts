import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Article {
	slug: string;
	tag: string;
	meta: string;
	metaLabel: string;
	title: string;
	visual: 'photo' | 'type' | 'community';
	paragraphs: string[];
}

const ARTICLES: Article[] = [
	{
		slug: 'a-new-arena',
		tag: 'CLUB',
		meta: 'CHAPTER 01',
		metaLabel: 'CLUB JOURNAL',
		title: 'A new arena. The same Web Art Work spirit.',
		visual: 'photo',
		paragraphs: [
			'The server opens on a new chapter. Web Art Work Esports steps onto a bigger stage, but the reasons for playing haven’t changed.',
			'We’re still the same community that builds things together, pushes each other to improve, and shows up for one another when it counts. Chess, Counter-Strike 2, and Brawl Stars are simply the newest ways we do that.',
			'This arena is bigger, the lights are brighter, and the competition is sharper — but the tag on our chest still means the same thing it always has.',
		],
	},
	{
		slug: 'one-way-forward',
		tag: 'TEAMS',
		meta: 'THE LINEUP',
		metaLabel: 'TEAM NOTES',
		title: 'Different roles. One way forward.',
		visual: 'type',
		paragraphs: [
			'An in-game leader calling rounds. A rapid player reading the board six moves ahead. A three-person squad making split-second calls in the arena.',
			'Every roster plays a different game, in a different rhythm, with a different set of skills — but every roster answers to the same standard: show up prepared, play for the team, and represent the tag with pride.',
			'That’s the throughline across Chess, CS2, and Brawl Stars. Different roles, different boards, one way forward.',
		],
	},
	{
		slug: 'our-community',
		tag: 'COMMUNITY',
		meta: 'OUR CULTURE',
		metaLabel: 'COMMUNITY',
		title: 'For the people on both sides of the screen.',
		visual: 'community',
		paragraphs: [
			'Esports isn’t just what happens on stream. It’s the community that shows up to watch, to cheer, and to play alongside us in the same community cups our teams compete in.',
			'Rooted in Ukraine and connected by the game, Web Art Work Esports exists because our community asked for it — a place where creators and competitors could bring the same energy to a shared passion.',
			'Whether you’re at your PC or in the stands, this chapter is written for the people on both sides of the screen.',
		],
	},
];

@Component({
	imports: [RouterLink],
	templateUrl: './article.component.html',
	styleUrl: './article.component.scss',
})
export class ArticleComponent {
	protected readonly article: Article;

	constructor() {
		const slug = inject(ActivatedRoute).snapshot.data['slug'] as string;
		this.article = ARTICLES.find((item) => item.slug === slug) ?? ARTICLES[0];
	}
}
