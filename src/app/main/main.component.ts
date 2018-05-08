import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PeticionService } from '../services/peticion.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [PeticionService]
})
export class MainComponent implements OnInit {
  public lista_pokemones;
  public parametro: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _peticionService: PeticionService

  ) { }

  ngOnInit() {
     // Llamando al servicio _peticionService 
     this._peticionService.getArticulos().subscribe(
      result => {
        console.log(result);
        this.lista_pokemones = result;

      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
    
    this._route.params.forEach((params:Params) => {
      this.parametro = params['ident'];
      console.log(params);
    });
  }


  public sumarLike(event){
    var likes = <HTMLInputElement>document.getElementById("num_likes");
    var num_likes = parseInt(likes.value);
    console.log(num_likes);
    num_likes= num_likes+1;
    likes.value = num_likes.toString();
  }

  public restarLike(event){
    var likes = <HTMLInputElement>document.getElementById("num_likes");
    var num_likes = parseInt(likes.value);
    console.log(num_likes);
    num_likes= num_likes-1;
    likes.value = num_likes.toString();
  }

}
