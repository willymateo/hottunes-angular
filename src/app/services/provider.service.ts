import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HappiResponse } from '../interfaces/Artist';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  base_url: string = environment.BASE_URL_API_HAPPI_MUSIC;
  headers: HttpHeaders = new HttpHeaders()
  .set("x-happi-key", environment.API_KEY_HAPPI_MUSIC);

  constructor(
    private http: HttpClient,
  ) { }

  getArtist(idArtist: number): Observable<HappiResponse>{
    return this.http.get<HappiResponse>(`${this.base_url}/artists/${ idArtist }`, {
      headers: this.headers,
    });
  }
}
