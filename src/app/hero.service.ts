import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

	constructor(private heroService: HeroService) { }

	getHeroes(): void {
  	this.heroes = this.heroService.getHeroes();
	}

	ngOnInit() {
  	this.getHeroes();
	}

}
