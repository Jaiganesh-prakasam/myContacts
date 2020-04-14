import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllContactsPageRoutingModule } from './all-contacts-routing.module';

import { AllContactsPage } from './all-contacts.page';
import { SearchPipe } from '../pipe/search.pipe';
import { SortPipe } from '../pipe/sort.pipe';
import { InitialsPipe } from '../pipe/initials.pipe';
import { Contacts } from '@ionic-native/contacts/ngx';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllContactsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [AllContactsPage, SortPipe, SearchPipe, InitialsPipe],
  providers: [Contacts],
})
export class AllContactsPageModule {}
