import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NumberSelectedService } from '../service/number-selected.service';
import { Router } from '@angular/router';
import {
  Contacts,
  Contact,
  ContactField,
  ContactName,
} from '@ionic-native/contacts/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.page.html',
  styleUrls: ['./all-contacts.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllContactsPage implements OnInit, AfterViewInit {
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;
  originalContactList = [];
  originalContactListData = [];
  maximumLength: number = 0;
  constructor(
    private cdRef: ChangeDetectorRef,
    private _numberSelectedService: NumberSelectedService,
    private router: Router,
    public _contacts: Contacts,
    public platform: Platform,
    public http: HttpClient
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.platform.is('android')) {
      // online to work in android application
      this._contacts
        .find(['displayName', 'name', 'phoneNumbers'], {
          filter: '',
          multiple: true,
        })
        .then((data) => {
          this.contactListLoader(data);
        });
    } else {
      // to load offline sample data to work in the web view
      this.http
        .get('../../assets/sampleContact.json')
        .subscribe((data: Array<Contact>) => {
          this.contactListLoader(data);
        });
    }
  }

  contactListLoader(data) {
    console.log(data);
    data = data
      .filter((a) => {
        // to remove the contacts which has no phone number
        if (a.phoneNumbers !== null) {
          return true;
        }
      })
      .sort((a, b) => {
        // to sort according to the first name
        if (
          a['_objectInstance']['displayName'] <
          b['_objectInstance']['displayName']
        ) {
          return -1;
        } else if (
          a['_objectInstance']['displayName'] >
          b['_objectInstance']['displayName']
        ) {
          return 1;
        } else {
          return 0;
        }
      });
    console.log(data);
    // ot use in loadExtraData  using infinite scroll
    this.originalContactListData = data;
    for (let i = 0; i <= 19; i++) {
      if (this.originalContactList) {
        this.originalContactList = [...this.originalContactList, data[i]];
        this.cdRef.detectChanges();
      } else {
        this.originalContactList.push(data[i]);
      }
      this.maximumLength++; // to track actual data loaded on screen
    }
  }

  loadExtraData(event) {
    console.log('Done');
    if (this.maximumLength < this.originalContactListData.length) {
      let tempMax = this.maximumLength;
      for (let i = tempMax - 1; i <= tempMax + 19; i++) {
        if (this.originalContactList) {
          this.originalContactList = [
            ...this.originalContactList,
            this.originalContactListData[i],
          ];
          this.cdRef.detectChanges();
        } else {
          this.originalContactList.push(this.originalContactListData[i]);
          this.cdRef.detectChanges();
        }
        this.maximumLength++;
      }
    }
    event.target.complete(); // to disable loader
    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.maximumLength > this.originalContactListData.length) {
      event.target.disabled = true;
    }
  }

  randomColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }
  goHome(phoneNumber) {
    let numstr = phoneNumber.toString();
    console.log(numstr);
    numstr = numstr.trim();
    numstr = numstr.replace(/ +/g, '');
    numstr = numstr.slice(-10);
    console.log(numstr);
    this._numberSelectedService.contactNumber = Number(numstr);
    this.router.navigate(['home']);
  }
}
