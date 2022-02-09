import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.scss']
})
export class AlphabetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("the length of array is ",this.alphabets.length); 
  }
  alphabets:string[]=[ "a", "ą", "b", "c", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o", "ó", "p", "q", "r", "s", "ś", "t", "u", "v", "w", "x", "y", "z", "ź", "ż"]
}
