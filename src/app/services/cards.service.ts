import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cardCreationDTO } from '../modules/card/models/cardCreationDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'directors';

  public create(card: cardCreationDTO){
    const formData = this.buildFormData(card);
    return this.http.post(this.apiURL, formData); 
  }

  private buildFormData(card: cardCreationDTO): FormData{
    const formData = new FormData();
    formData.append('title', card.title);
    return formData;
  }
}
