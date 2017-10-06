import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TorneioProvider } from '../../providers/torneio/torneio';
import { Ciclo } from '../../models/torneio/ciclo';

@IonicPage()
@Component({
  selector: 'page-torneio',
  templateUrl: 'torneio.html'
})
export class TorneioPage {
  torneioItems: Ciclo[] = [];

  constructor(public navCtrl: NavController, public torneioProvider: TorneioProvider) {
    this.torneioProvider.ciclos().then(ciclos => {
      this.torneioItems = ciclos;
    });
  }

  ionViewDidLoad() {
  }

  barClicked(evt, ciclo, idPatrulha) {
    // console.log("Para detalhe => " + JSON.stringify(evt) + " Ciclo: " + idCiclo + " Patrulha: " + idPatrulha);
    this.navCtrl.push('CicloDetalhePage', { ciclo: ciclo, idPatrulha: idPatrulha });
  }
}
