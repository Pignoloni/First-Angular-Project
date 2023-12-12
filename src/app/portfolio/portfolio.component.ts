import {Component, OnInit} from '@angular/core';
import {Realisation} from "../shared/model/realisation.model";
import {RealisationService} from "../shared/service/realisation.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{

  realisations: Realisation[] = [];

  constructor(public realisationService:RealisationService) {
  }
  ngOnInit(): void {
    this.realisationService.getAll()
        .subscribe(realisationResponse => this.realisations = realisationResponse);
  }



}
