import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() value: string;
  @Input() tagIndex: number;

  animation: string;

  constructor() { }

  ngOnInit(): void {
    this.animation = this.tagIndex % 2 === 0 ? "animate__fadeInUp" : "animate__fadeInDown";
  }
}
