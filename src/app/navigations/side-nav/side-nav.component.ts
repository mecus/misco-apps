import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  closeMenu(){
    let slide = document.getElementById('slide-menu');
    let cover = document.getElementById('menu-cover');
    cover.style.marginLeft = '-100%';
    cover.style.transition = "0.3s";
    slide.style.marginRight = "-300px";
    slide.style.transition = "0.5s";
    document.body.style.overflow = 'auto';

  }

  ngOnInit() {
   window.addEventListener('click', (e: any)=>{
    if(e.target.className == "menu-cover"){
      return this.closeMenu();
    }

   });
  }

}
