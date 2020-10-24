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
      Authorization: 'Bearer BQDXIlvLXA75gSKiPXKz5J-GeqQZrMjT-yjad84vshQ-VGbx2zDV-Adm_rRq6nGVdujEUS5iehDuvF9lJFmQLW5JjY_MvNgUYqMSHmk6yAbdV--9mY5kDtV-NvxZ-B7w-mb5mnwSG_hubyNa'
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
