import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppareilsService {

  appareilsSubject = new Subject<any[]>();

  appareils = [
    {
      id: 1,
      name:'Machine à laver',
      status:'éteint'
    },
    {
      id: 2,
      name:'Frigo',
      status:'allumé'
    },
    {
      id: 3,
      name:'Ordinateur',
      status:'éteint'
    }
  ];

  constructor() { }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}

emitAppareilSubject() {
  this.appareilsSubject.next(this.appareils.slice());
}

  switchOnAll() {
    for ( let appareil of this.appareils) {
      appareil.status = "allumé";
    }
  }

  switchOffAll() {
    for ( let appareil of this.appareils) {
      appareil.status = "éteint";
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
}

switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
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


}





/* <!-- =======================================================
* Author: Boujjou Achraf
* License: https://www.linkedin.com/in/achrafboujjou/
======================================================== --> */