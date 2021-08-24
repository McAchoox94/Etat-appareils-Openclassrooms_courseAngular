import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth = false;

  appareils! :any[];
  appareilSubscription!: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000
    );
  });

  constructor( private appareilService: AppareilsService ) {}

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
}

ngOnDestroy() {
  this.appareilSubscription.unsubscribe();
}

onSave() {
  this.appareilService.saveAppareilsToServer();
}

onFetch() {
  this.appareilService.getAppareilsFromServer();
}

} 






/* <!-- =======================================================
* Author: Boujjou Achraf
* License: https://www.linkedin.com/in/achrafboujjou/
======================================================== --> */