import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebasePrv: FirebaseProvider) {
  }

  ionViewDidLoad() {
  }

  get user() {
    return JSON.stringify(this.firebasePrv.user, null, 3);
  }

  get photoURL() {
    if (this.firebasePrv.user) {
      return this.firebasePrv.user.photoURL;
    } else {
      return "";
    }
  }

  get name() {
    if (this.firebasePrv.user) {
      return this.firebasePrv.user.displayName;
    } else {
      return "";
    }
  }
}