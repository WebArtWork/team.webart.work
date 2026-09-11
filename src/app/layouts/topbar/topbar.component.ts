import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '@wawjs/ngx-ui';

@Component({
	selector: 'app-topbar',
	imports: [RouterLink],
	templateUrl: './topbar.component.html',
	styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
	private readonly _themeService = inject(ThemeService);
	protected readonly mode = computed(() => this._themeService.mode() ?? 'dark');
	protected readonly mobileMenuOpen = signal(false);
	protected readonly toggleLabel = computed(() =>
		this.mode() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
	);
	protected toggleMode() {
		this._themeService.setMode(this.mode() === 'dark' ? 'light' : 'dark');
	}
}
