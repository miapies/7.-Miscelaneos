import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular/platform/platform';

@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrar_tutorial: true
  }

  constructor(private storage: Storage,
    private platform: Platform) {
    console.log('Hello AjustesProvider Provider');

  }

  cargar_storage() {

    const promesa = new Promise((resolve, reject) => {

      if (this.platform.is('cordova')) {
        // Dispositivo
        this.storage.get('ajustes')
          .then((val) => {
            if(val) {
              this.ajustes = val;
              console.log('Ajustes: ' + JSON.stringify(this.ajustes));
            }
            resolve();
          })
          .catch((error) => console.error('Error: ' + JSON.stringify(error)));

      } else if (localStorage.getItem('ajustes')) {
        // Escritorio
        this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      }

    });

    return promesa;

  }

  guardar_storage() {
    if (this.platform.is('cordova')) {
      // Dispositivo
      this.storage.set('ajustes', this.ajustes);
    } else {
      // Escritorio
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }
  }

}
