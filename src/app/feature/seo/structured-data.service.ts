import { DOCUMENT } from '@angular/common';
import { inject, Service } from '@angular/core';

@Service()
export class StructuredDataService {
	private readonly _document = inject(DOCUMENT);

	set(id: string, data: Record<string, unknown>) {
		this.remove(id);

		const script = this._document.createElement('script');
		script.type = 'application/ld+json';
		script.id = id;
		script.text = JSON.stringify(data);
		this._document.head.appendChild(script);
	}

	remove(id: string) {
		this._document.getElementById(id)?.remove();
	}
}
