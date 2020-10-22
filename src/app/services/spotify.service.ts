import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spoti servce listo')
  }

  getQuery(query:string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAdRT_n5EuUvILOQOdlqRIWubtyibOqHXMazMNiGPSXsTNoxv05Uh2xEJt6I-gcgpJMQ7CaK7s0otaFg_Qr_mO28Z410N0XCowXMvJ03ziMummUPf9Hf4qOWnRTdoqiVoMiwIH73IDlOkZ8'
    })

    const url = `https://api.spotify.com/v1/${query}`
    return this.http.get(url, {headers})
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
              .pipe(map(data => data['albums'].items))
  }

  getArtist(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist`)
                    .pipe(map(data => data['artists'].items ))
  }

}
