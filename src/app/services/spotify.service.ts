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
      Authorization: 'Bearer BQAkmi8RainKRLPds003tU08e8pQSrx5pepQ_BPFTJLYDivsnUwAHo9_RMhEz_2clP8NfbSjE3xvz-xQpF19FJWZFWOjA8rcLR1zuCXjzJZ1GFo0fBbbYEgxroIsI3Y7fyO1ITNCEBu_XPXQ'
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
