import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppareilsService {

  appareilsSubject = new Subject<any[]>();

  // appareils = [
  //   {
  //     id: 1,
  //     name:'Machine à laver',
  //     status:'éteint'
  //   },
  //   {
  //     id: 2,
  //     name:'Frigo',
  //     status:'allumé'
  //   },
  //   {
  //     id: 3,
  //     name:'Ordinateur',
  //     status:'éteint'
  //   }
  // ];


// private appareils: any[] = [];

appareils!:{id: number, name: string, status:string} [];


  constructor( private httpClient: HttpClient ) { }

emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice(0));
  }

getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}

  switchOnAll() {
    for ( let appareil of this.appareils) {
      appareil.status = "allumé";
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for ( let appareil of this.appareils) {
      appareil.status = "éteint";
    }
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
}

switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
}


addAppareil(name: string, status: string) {
  const appareilObject = {
    id: 0,
    name: '',
    status: ''
  };
  appareilObject.name = name;
  appareilObject.status = status;
  appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
  this.appareils.push(appareilObject);
  this.emitAppareilSubject();
}

saveAppareilsToServer() {
  this.httpClient
    .put('https://etat-appareils-oc-angular12-default-rtdb.firebaseio.com/appareils.json', this.appareils)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

getAppareilsFromServer() {
  this.httpClient
    .get<any[]>('https://etat-appareils-oc-angular12-default-rtdb.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

}





/* <!-- =======================================================
* Author: Boujjou Achraf
* License: https://www.linkedin.com/in/achrafboujjou/
======================================================== --> */