import { Component } from '@angular/core';

@Component({
	templateUrl: './market.component.html',
	styleUrl: './market.component.scss',
})
export class MarketComponent {
	protected readonly products = [
		{
			id: 'jersey',
			name: 'Team Jersey',
			category: 'Apparel',
			price: '€59',
			description: 'The tag on your chest. Official match-day jersey, home colorway.',
		},
		{
			id: 'tee',
			name: 'Club T-Shirt',
			category: 'Apparel',
			price: '€29',
			description: 'Everyday cotton tee with the Web Art Work wordmark.',
		},
		{
			id: 'hoodie',
			name: 'Club Hoodie',
			category: 'Apparel',
			price: '€69',
			description: 'Heavyweight fleece for the long grind sessions.',
		},
		{
			id: 'cup',
			name: 'Ceramic Mug',
			category: 'Merch',
			price: '€15',
			description: 'Fuel up between rounds. Dishwasher safe, tag-branded.',
		},
		{
			id: 'cap',
			name: 'Snapback Cap',
			category: 'Apparel',
			price: '€25',
			description: 'Embroidered logo, adjustable fit, on and off server.',
		},
		{
			id: 'sleeve',
			name: 'Mouse Pad',
			category: 'Gear',
			price: '€19',
			description: 'Extended desk mat built for competitive precision.',
		},
	];
}
