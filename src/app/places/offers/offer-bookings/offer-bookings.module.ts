import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfferBookingsPage } from './offer-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: OfferBookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OfferBookingsPage]
})
export class OfferBookingsPageModule { }
