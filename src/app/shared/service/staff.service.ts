import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Staff} from "../model/staff.model";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(public http: HttpClient) { }

  getAll(): Observable<Staff[]>{
    return this.http.get<Staff[]>(
      'https://angular-api.bes-webdeveloper-seraing.be/api/team-members/'
    );
  }
}
