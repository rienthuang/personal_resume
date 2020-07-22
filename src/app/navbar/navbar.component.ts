import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navbarContent') navbarContent: ElementRef;


  strictNavbar = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    window.scrollY >= 10 ? this.strictNavbar = true : this.strictNavbar = false;
  }

  closeNavBar() {
    if (this.navbarContent.nativeElement.classList.contains('show')) {
      this.renderer['removeClass'](this.navbarContent.nativeElement, 'show')
    }
  }

}
