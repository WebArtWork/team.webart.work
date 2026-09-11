export interface CartProduct {
	id: string;
	name: string;
	price: number;
}

export interface CartItem extends CartProduct {
	qty: number;
}

export interface CartOrder {
	fullName: string;
	email: string;
	phone: string;
	address: string;
	city: string;
	postalCode: string;
	notes: string;
}
