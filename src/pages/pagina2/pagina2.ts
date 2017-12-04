import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) { }

  ir_pagina3() {
    this.navCtrl.push("mi-pagina3");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter');
    // const numero = Math.round(Math.random() * 10);
    // console.log(numero);

    // if (numero >= 3) {
    //   return true;
    // } else {
    //   return false;
    // }
    const promesa = new Promise((resolve, reject) => {

      const confirm = this.alertCtrl.create({
        title: '¿Seguro?',
        message: '¿Está seguro que desea entrar?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              resolve(false);
            }
          },
          {
            text: 'Sí, seguro',
            handler: () => {
              resolve(true);
            }
          }
        ]
      });
      confirm.present();

    });

    return promesa;

  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave');

    const promesa = new Promise((resolve, reject) => {
      const loader = this.loadingCtrl.create({
        content: "Espere por favor...",
        duration: 2000
      });
      loader.present();
      loader.onDidDismiss(() => {
        resolve(true);
      });
    });

    return promesa;
  }
}
