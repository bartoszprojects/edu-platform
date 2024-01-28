import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.sass']
})
export class BasicsComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    this.basicsBasics1()
  }

  basicsBasics1() {

    // ------------------------------------------------------------------
    // DESTRUCTURING

    const myObj1 = {
      name: 'name1',
      surname: 'surname1',
      age: 15
    }
    const { name, age } : { name: string, age: number } = myObj1
    // instead of using:
    // const surname = myObj1.surname
    // we can use destructuring:
    const { surname } : { surname: string } = myObj1


  }

}
