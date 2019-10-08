import { Component, Input, OnInit } from '@angular/core';

export class DotMenuItem {
	icon: string;
	title: string;
	classList: string;
	click: Function;
	visible: boolean;
	visibleFn: Function;
	constructor(title: string, click: Function, icon?: string, classList?: string, visible?: Function | boolean) {
		this.title = title;
		this.icon = icon;
		this.click = click || (() => { });
		this.classList = classList;

		if (visible) {
			if (typeof (visible) === 'function') {
				this.visibleFn = visible;
			} else {
				this.visible = visible;
			}
		} else {
			this.visible = true;
		}
	}
}

@Component({
	selector: 'app-dot-menu',
	templateUrl: './dot-menu.component.html'
})
export class DotMenuComponent implements OnInit {
	_options: Array<DotMenuItem>;

	@Input()
	model: any;

	@Input()
	options: Array<DotMenuItem>;

	@Input()
	upDrop = false;

	constructor() {
		this._options = [];
	}

	ngOnInit(): void {
		this._options = this.options.map(opt => {
			if (opt && typeof (opt.visibleFn) === 'function') {
				opt.visible = opt.visibleFn(this.model);
			}
			return opt;
		});
	}

}
