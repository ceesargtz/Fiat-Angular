import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
cerrado=true
  constructor() { }

  ngOnInit() {
  }
  darClick(){

    if (screen.width<768){
      console.log("movil")
      if(this.cerrado==true){
        document.getElementById('menu2').style.display="block"
        this.cerrado=false
      }else{
        document.getElementById('menu2').style.display="none"
        this.cerrado=true
      }
    }

}
}
