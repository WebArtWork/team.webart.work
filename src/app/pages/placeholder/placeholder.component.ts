import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	template: `<section class="shell section-space min-h-[55vh]">
		<h1 class="text-4xl font-bold">{{ title }}</h1>
	</section>`,
})
export class PlaceholderComponent {
	protected readonly title = inject(ActivatedRoute).snapshot.data['pageTitle'] as string;
}
