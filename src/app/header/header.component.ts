import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  href: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    this.changeActive(this.href);
  }

  changeActive(url:string) {
    if (url == "/experience") {
      document.getElementById('experience').classList.add('active');
    } else if (url == "/projects") {
      document.getElementById('projects').classList.add('active');
    } else if (url == "/classes") {
      document.getElementById('classes').classList.add('active');
    } else if (url == "/skills") {
      document.getElementById('skills').classList.add('active');
    }
  }

}
