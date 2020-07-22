import { Component, OnInit } from '@angular/core';

// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
