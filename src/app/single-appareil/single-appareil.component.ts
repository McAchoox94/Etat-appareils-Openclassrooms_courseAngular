import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilsService } from '../services/appareils.service';

export interface PeriodicElement {
  name: string;
  status: string;
}

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appareilService: AppareilsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)!.name;
    this.status = this.appareilService.getAppareilById(+id)!.status;
  }

  ELEMENT_DATA: PeriodicElement[] = [
    {status: this.status, name: this.name},
  ];

  displayedColumns: string[] = ['name', 'status'];
  dataSource = this.ELEMENT_DATA;
  

}



/* <!-- =======================================================
* Author: Boujjou Achraf
* License: https://www.linkedin.com/in/achrafboujjou/
======================================================== --> */