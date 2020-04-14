import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NumberSelectedService } from '../service/number-selected.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public router: Router,
    public _numberSelected: NumberSelectedService
  ) {}
  toContacts() {
    this.router.navigate(['all-contacts']);
  }
}
