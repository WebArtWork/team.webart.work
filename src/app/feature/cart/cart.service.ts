import { isPlatformBrowser } from '@angular/common';
import { computed, inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { CartItem, CartProduct } from './cart.interface';

const CART_STORAGE_KEY = 'waw-cart';

@Service()
export class CartService {
	private readonly _platformId = inject(PLATFORM_ID);
	private readonly _items = signal<CartItem[]>(this._loadFromStorage());

	readonly items = this._items.asReadonly();
	readonly count = computed(() => this._items().reduce((sum, item) => sum + item.qty, 0));
	readonly subtotal = computed(() =>
		this._items().reduce((sum, item) => sum + item.price * item.qty, 0),
	);

	add(product: CartProduct, qty = 1) {
		this._items.update((items) => {
			const existing = items.find((item) => item.id === product.id);

			if (existing) {
				return items.map((item) =>
					item.id === product.id ? { ...item, qty: item.qty + qty } : item,
				);
			}

			return [...items, { ...product, qty }];
		});
		this._saveToStorage();
	}

	setQty(id: string, qty: number) {
		if (qty <= 0) {
			this.remove(id);
			return;
		}

		this._items.update((items) => items.map((item) => (item.id === id ? { ...item, qty } : item)));
		this._saveToStorage();
	}

	remove(id: string) {
		this._items.update((items) => items.filter((item) => item.id !== id));
		this._saveToStorage();
	}

	clear() {
		this._items.set([]);
		this._saveToStorage();
	}

	private _loadFromStorage(): CartItem[] {
		if (!isPlatformBrowser(this._platformId)) {
			return [];
		}

		try {
			const raw = localStorage.getItem(CART_STORAGE_KEY);
			return raw ? (JSON.parse(raw) as CartItem[]) : [];
		} catch {
			return [];
		}
	}

	private _saveToStorage() {
		if (!isPlatformBrowser(this._platformId)) {
			return;
		}

		try {
			localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this._items()));
		} catch {
			// ignore storage failures (e.g. private browsing quota)
		}
	}
}
