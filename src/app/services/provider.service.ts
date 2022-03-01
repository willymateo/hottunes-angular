import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  url:string = environment.BASE_URL;

  constructor(
    private http
  ) { }
}
