import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.scss']
})

export class SearchGamesComponent {

  constructor(private router: Router) { }

  onSubmit(form : NgForm) {
    this.router.navigate(['search', form.value.search])
  }

}
