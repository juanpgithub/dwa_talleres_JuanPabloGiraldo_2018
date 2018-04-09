import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
