import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideSideBar(){
    let navbar = document.querySelector('.offcanvas')!;
    navbar.classList.remove('show');
    let backdrop = document.querySelector('.offcanvas-backdrop')!;
    backdrop.remove();
    console.log(navbar)
  }
}
