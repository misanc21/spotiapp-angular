import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artista : any = {}
  topTracks : any = []
  loading : boolean = true

  constructor(private router : ActivatedRoute, private spotify : SpotifyService) { 

    this.router.params.subscribe(params=>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtist(id){
    this.loading = true
    this.spotify.getArtistById(id)
        .subscribe(art => {
          this.artista = art 
          this.loading = false
        })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracksByArtist(id)
    .subscribe(t => {
      this.topTracks = t
      console.log(t)
    })
  }

}
