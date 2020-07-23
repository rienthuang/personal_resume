import { Component, OnInit } from '@angular/core';

import { faBook, faUsers, faFistRaised, faBalanceScale } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  faBook = faBook;
  faUsers = faUsers;
  faFistRaised = faFistRaised;
  faBalanceScale = faBalanceScale

  programmingLanguages = [
    { 'name': 'JavaScript (Angular + Node)', 'proficiency': 81 },
    { 'name': 'Java', 'proficiency': 80 },
    { 'name': 'HTML & CSS', 'proficiency': 60 },
    { 'name': 'Python', 'proficiency': 40 },
    { 'name': 'Docker', 'proficiency': 30 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
