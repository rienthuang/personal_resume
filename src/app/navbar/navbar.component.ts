import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navbarContent') navbarContent: ElementRef;


  strictNavbar = false;
  navbarOpened = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (!this.navbarOpened) {
      this.setStrictNavWhenNavbarClosed();
    }
  }

  closeNavBar() {
    if (this.navbarContent.nativeElement.classList.contains('show')) {
      this.navbarOpened = false;
      this.renderer['removeClass'](this.navbarContent.nativeElement, 'show');
      this.setStrictNavWhenNavbarClosed();
    }
  }

  toggleNavbar() {
    if (!this.navbarOpened) {
      setTimeout(() => {
        this.strictNavbar = true;
        this.navbarOpened = true;
      }, 200);
    } else {
      this.navbarOpened = false;
      this.setStrictNavWhenNavbarClosed();
    }
  }

  setStrictNavWhenNavbarClosed() {
    window.scrollY >= 10 ? this.strictNavbar = true : this.strictNavbar = false;
  }

}
