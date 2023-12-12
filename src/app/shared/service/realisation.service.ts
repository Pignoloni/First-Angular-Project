import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Realisation} from "../model/realisation.model";

@Injectable({
  providedIn: 'root'
})
export class RealisationService {

  constructor(public http: HttpClient) { }

  getAll(): Observable<Realisation[]>{
    return this.http.get<Realisation[]>(
      'https://angular-api.bes-webdeveloper-seraing.be/api/realisations'
    )
  }
}
