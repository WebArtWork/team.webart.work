import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '@wawjs/ngx-translate';
import { ThemeService } from '@wawjs/ngx-ui';
import { CartService } from '../../feature/cart/cart.service';

@Component({
	selector: 'app-topbar',
	imports: [RouterLink],
	templateUrl: './topbar.component.html',
	styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
	private readonly _themeService = inject(ThemeService);
	private readonly _languageService = inject(LanguageService);
	private readonly _cart = inject(CartService);
	protected readonly cartCount = this._cart.count;
	protected readonly mode = computed(() => this._themeService.mode() ?? 'dark');
	protected readonly mobileMenuOpen = signal(false);
	protected readonly languageMenuOpen = signal(false);
	protected readonly toggleLabel = computed(() =>
		this.mode() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
	);
	protected readonly languages = computed(() => this._languageService.languages());
	protected readonly currentLanguage = computed(() =>
		this._languageService.getLanguage(this._languageService.language()),
	);
	protected toggleMode() {
		this._themeService.setMode(this.mode() === 'dark' ? 'light' : 'dark');
	}
	protected async setLanguage(code: string) {
		await this._languageService.setLanguage(code);
		this.languageMenuOpen.set(false);
	}
}
