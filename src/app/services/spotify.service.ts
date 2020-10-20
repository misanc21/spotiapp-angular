import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spoti servce listo')
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBtYxFy-Ko7oj7sR1Jkwnlfn6HKdhn9rYqEtZfMc177G2364wN4kxcjBhqeSfi9gIYzty0sRCj3_0siXBJvH5ZcQ7XZn20g2RKqJglzFaJp4xK_LUuQHKQM0xj4hPVA0iAVEysE-Q19cRje'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
  }

}
