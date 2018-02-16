import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private _router: Router) { }
  goHome(){
    this._router.navigate(["/"]);
  }
  openMenu(){
    let slide = document.getElementById('slide-menu');
    let cover = document.getElementById('menu-cover');
    cover.style.marginLeft = '0%';
    cover.style.transition = "0.3s";
    slide.style.marginRight = "0px";
    slide.style.transition = "0.5s";
    document.body.style.overflow = 'hidden';
  }


  ngOnInit() {
  }

}
