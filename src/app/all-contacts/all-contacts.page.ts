import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NumberSelectedService } from '../service/number-selected.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.page.html',
  styleUrls: ['./all-contacts.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllContactsPage implements OnInit {
  contactList = [
    { name: 'Aaban', number: { Home: 9112345875349, mobile: 5647219856 } },
    { name: 'Aabharan', number: { Home: 5298273546 } },
    { name: 'Aabhas', number: { Home: 9007952936 } },
    { name: 'Aabhat', number: { Home: 1579245963 } },
    { name: 'Aabheer B', number: { Home: 25720044916 } },
    { name: 'Aabheer V', number: { Home: 53572591033 } },
    { name: 'Aabher', number: { Home: 35150416047 } },
    { name: 'Aabi Narma', number: { Home: 94140652749 } },
    { name: 'Aabilesh', number: { Home: 83838129147 } },
    { name: 'Aabir', number: { Home: 22801091059 } },
    { name: 'Naabhak Sid', number: { Home: 19710127017 } },
    { name: 'Naabhas', number: { Home: 29805350016 } },
    { name: 'Naabhi Faran', number: { Home: 59594579806 } },
    { name: 'Naag', number: { Home: 9112345875349 } },
    { name: 'Naagadatha', number: { Home: 9112345875349 } },
    { name: 'Naagarjun Gugan', number: { Home: 9112345875349 } },
    { name: 'Naagdhar', number: { Home: 9112345875349 } },
    { name: 'Naagendra', number: { Home: 9112345875349 } },
    { name: 'Naagesh', number: { Home: 9112345875349 } },
    { name: 'Naagpal', number: { Home: 9112345875349 } },
    { name: 'Baadal', number: { Home: 9112345875349 } },
    { name: 'Baala', number: { Home: 9112345875349 } },
    { name: 'Baalaaditya', number: { Home: 9112345875349 } },
    { name: 'Baalaaji', number: { Home: 9112345875349 } },
    { name: 'Baalaark', number: { Home: 9112345875349 } },
    { name: 'Baalagopaal', number: { Home: 9112345875349 } },
    { name: 'Cadman', number: { Home: 9112345875349 } },
    { name: 'Caldwell', number: { Home: 9112345875349 } },
    { name: 'Caleb', number: { Home: 9112345875349 } },
    { name: 'Calvert', number: { Home: 9112345875349 } },
    { name: 'Da', number: { Home: 9112345875349 } },
    { name: 'Daakshi', number: { Home: 9112345875349 } },
    { name: 'Daaman', number: { Home: 9112345875349 } },
    { name: 'Daamodar', number: { Home: 9112345875349 } },
    { name: 'Daanish', number: { Home: 9112345875349 } },
    { name: 'Gadadhara', number: { Home: 9112345875349 } },
    { name: 'Gadhadhar', number: { Home: 9112345875349 } },
    { name: 'Gadhar', number: { Home: 9112345875349 } },
    { name: 'Gadin', number: { Home: 9112345875349 } },
    { name: 'Gagan', number: { Home: 9112345875349 } },
    { name: 'Gagandeep', number: { Home: 9112345875349 } },
    { name: 'Uchadev', number: { Home: 9112345875349 } },
    { name: 'Uchit', number: { Home: 9112345875349 } },
    { name: 'Uchith', number: { Home: 9112345875349 } },
    { name: 'Udai', number: { Home: 9112345875349 } },
    { name: 'Udanda', number: { Home: 9112345875349 } },
    { name: 'Udant', number: { Home: 9112345875349 } },
    { name: 'Udanth', number: { Home: 9112345875349 } },
    { name: 'Udar', number: { Home: 9112345875349 } },
    { name: 'Udarathi', number: { Home: 9112345875349 } },
    { name: 'Raadhak', number: { Home: 9112345875349 } },
    { name: 'Raadhik', number: { Home: 9112345875349 } },
    { name: 'Raag', number: { Home: 9112345875349 } },
    { name: 'Raagav', number: { Home: 9112345875349 } },
    { name: 'Raagavan', number: { Home: 9112345875349 } },
    { name: 'Raaghav', number: { Home: 9112345875349 } },
    { name: 'Raagul', number: { Home: 9112345875349 } },
  ];
  constructor(
    private cdRef: ChangeDetectorRef,
    private _numberSelectedService: NumberSelectedService,
    private router: Router
  ) {}

  ngOnInit() {}

  randomColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }
  goHome(phoneNumber) {
    let numstr = '' + phoneNumber;
    numstr = numstr.slice(-10);
    this._numberSelectedService.contactNumber = Number(numstr);
    this.router.navigate(['home']);
  }
}
