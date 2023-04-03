import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cardCreationDTO } from '../models/cardCreationDTO';
import { CardsService } from 'src/app/services/cards.service';
import { parseAPIErrors } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  constructor(private cardService: CardsService, private router: Router) { }

  ngOnInit(): void {
  }

  errors = [];

  saveChanges(card: cardCreationDTO){
    this.cardService.create(card)
    .subscribe(()=>{
      this.router.navigate(['/cards']);
    }, errors => this.errors = parseAPIErrors(errors));
  }

}