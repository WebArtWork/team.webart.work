import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../feature/cart/cart.service';
import { CartOrder } from '../../feature/cart/cart.interface';

type CartStep = 'review' | 'checkout' | 'completed';

@Component({
	imports: [RouterLink, FormsModule],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss',
})
export class CartComponent {
	private readonly _cart = inject(CartService);

	protected readonly items = this._cart.items;
	protected readonly count = this._cart.count;
	protected readonly subtotal = this._cart.subtotal;
	protected readonly step = signal<CartStep>('review');
	protected readonly orderNumber = signal('');
	protected readonly form: CartOrder = {
		fullName: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		postalCode: '',
		notes: '',
	};

	protected setQty(id: string, qty: number) {
		this._cart.setQty(id, qty);
	}

	protected remove(id: string) {
		this._cart.remove(id);
	}

	protected goToCheckout() {
		this.step.set('checkout');
	}

	protected backToReview() {
		this.step.set('review');
	}

	protected placeOrder() {
		this.orderNumber.set(
			`WAW-${Math.floor(100000 + Math.random() * 900000)}`,
		);
		this.step.set('completed');
		this._cart.clear();
	}

	protected startNewOrder() {
		this.step.set('review');
		this.form.fullName = '';
		this.form.email = '';
		this.form.phone = '';
		this.form.address = '';
		this.form.city = '';
		this.form.postalCode = '';
		this.form.notes = '';
	}
}
