import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../feature/cart/cart.service';

@Component({
	imports: [RouterLink],
	templateUrl: './market.component.html',
	styleUrl: './market.component.scss',
})
export class MarketComponent {
	private readonly _cart = inject(CartService);
	protected readonly cartCount = this._cart.count;
	protected readonly justAdded = signal<string | null>(null);
	protected readonly products = [
		{
			id: 'jersey',
			name: 'Team Jersey',
			category: 'Apparel',
			price: 59,
			description: 'The tag on your chest. Official match-day jersey, home colorway.',
		},
		{
			id: 'tee',
			name: 'Club T-Shirt',
			category: 'Apparel',
			price: 29,
			description: 'Everyday cotton tee with the Web Art Work wordmark.',
		},
		{
			id: 'hoodie',
			name: 'Club Hoodie',
			category: 'Apparel',
			price: 69,
			description: 'Heavyweight fleece for the long grind sessions.',
		},
		{
			id: 'cup',
			name: 'Ceramic Mug',
			category: 'Merch',
			price: 15,
			description: 'Fuel up between rounds. Dishwasher safe, tag-branded.',
		},
		{
			id: 'cap',
			name: 'Snapback Cap',
			category: 'Apparel',
			price: 25,
			description: 'Embroidered logo, adjustable fit, on and off server.',
		},
		{
			id: 'sleeve',
			name: 'Mouse Pad',
			category: 'Gear',
			price: 19,
			description: 'Extended desk mat built for competitive precision.',
		},
	];

	protected addToCart(product: { id: string; name: string; price: number }) {
		this._cart.add({ id: product.id, name: product.name, price: product.price });
		this.justAdded.set(product.id);
		setTimeout(() => {
			if (this.justAdded() === product.id) {
				this.justAdded.set(null);
			}
		}, 1600);
	}
}
