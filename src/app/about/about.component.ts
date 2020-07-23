import { Component, OnInit } from '@angular/core';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills = [
    "NodeJS",
    "AngularJS",
    "Java",
    "Html/CSS",
    "Docker",
    "Basic AWS",
    "Basic GCP"
  ];
  faDownload = faDownload;

  constructor() { }

  ngOnInit(): void {
  }

}
