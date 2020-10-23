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
      Authorization: 'Bearer BQCTrcNzIzyNrpg8aRuyIIc6mvkh7yRvDQ36Bg4tNsfzi3W68DzuDdyjtI_GI0-5uzwi1cfl8REg2cvNeOKAzA4Muz6wpZ-PaPlDh7E4nQ7VhcVCAzsoS-4rEcgKY7Q-kxwJJHm_nvCvBRsK'
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

  getArtistById(id:string){
    return this.getQuery(`artists/${id}`)
  }

  getTopTracksByArtist(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
                .pipe(map(data=> data['tracks']))
  }

}
