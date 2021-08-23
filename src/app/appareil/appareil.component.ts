import { Component, Input, OnInit } from '@angular/core';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() index!: number;
  @Input() id!: number;


  constructor(private appareilService: AppareilsService) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
}

}


/* <!-- =======================================================
* Author: Boujjou Achraf
* License: https://www.linkedin.com/in/achrafboujjou/
======================================================== --> */
