import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {GlobalService} from "../../../services/global.service";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.sass']
})
export class BasicsComponent {
  panelOpenState = false;
  snippets$: Observable<any>;

  constructor(private globalService: GlobalService) {
    this.snippets$ = this.globalService.getCodeSnippet('functions', 'functions')
  }

  ngOnInit() {
    this.functionsBasicsPureNotPureFunctions()
    this.basicsThis1()
    this.functionsCall1()
    this.functionsApply1()
    this.functionsBind1()

  }

  functionsBasicsPureNotPureFunctions() {

    //----------------------------------------------------------------
    ////////// 1. Pure Functions
    // Pure Function means that the function does not mutate / change data that going into the function (arguments of the functions).
    // The final return of the function is not change If we are calling function again and again with the same parameters
    // advantages: avoiding unexpected behaviours like suddenly changed data
    // disadvantages:
    function pureFunc1(a: number, b: number): number {
      // this is pure func because we always have the same result with the same arguments
      return a + b;
    }

    pureFunc1(1,5)
    pureFunc1(3,5)

    //----------------------------------------------------------------

    function pureFunc2(a: number, b: number): number {
      let innerNumb = 155
      // this is pure func because the inner extra variable is a constant and we can predict the result of this func
      return a + b + innerNumb;
    }

    pureFunc2(1,5)
    pureFunc2(3,5)

    //----------------------------------------------------------------
    ////////// 1. Not-Pure Functions
    // advantages:
    // disadvantages:

    let externalNumber = 5
    function unPureFunc1(a: number, b: number): number {
      // this is not a pure func because we have external variable that may be changed in the future
      return a + b + externalNumber;
    }

    unPureFunc1(1,5)
    unPureFunc1(3,5)

    //----------------------------------------------------------------

    function unPureFunc2(a: number, b: number): number {
      let random = Math.random()
      // this is also a not pure func even with internal variable because we don't know the exact result
      return a + b + random;
    }

    unPureFunc2(1,5)
    unPureFunc2(3,5)


    //----------------------------------------------------------------

    function unPureFunc3(array: string[]): string {
      array.push('z')
      // this is not a pure func because we mutate origin array with new array element. Then if we return
      return array[-1]
    }

    unPureFunc3(['a', 'b', 'c'])
    unPureFunc3(['d', 'e', 'f'])


    //----------------------------------------------------------------

    function unPureFunc4(number: number): void {
      let total = number + 100
      // this is not a pure func because there is side effect: console.log instead of returning data
      console.log(total)
    }

    unPureFunc4(147)


    //----------------------------------------------------------------

    const exampleData = {"users": [{"name": "name1"}, {"name": "name2"}]}

    function unPureFunc5(data: any): any {
      // this is not a pure func because we mutate the original data by adding new [key][value] to data argument
      // instead of this we should create new object to return:
      // return {...data, "newProperty": [1,2,3,4,5]}
      data['newProperty'] = [1,2,3,4,5]
      return data
    }

    console.log('data: ', unPureFunc5(exampleData))
  }

  basicsThis1() {
    //----------------------------------------------------------------
    ////////// 1. Basics -  This
    //


  }

  functionsCall1() {

    //----------------------------------------------------------------
    ////////// 1. Functions .call()
    // Using this built-in method of javascript function I can call method of object inside second object

    //----------------------------------------------------------------
    // example 1

    const person: any = {
      extraInfo: 'extraInfo1',
      fullName: function(): string {
        return `this is full name: ${this.name} ${this.surname}`;
      }
    }

    const object1 = {
      'name': 'John',
      'surname': 'Travolta',
    }

    const object3 = {
      'name': 'Patrick',
      'surname': 'Novel',
    }

    // Below I can use my object method 'fullName()' from 'person' object into other function 'object3'
    const called = person.fullName.call(object3);
    console.log('functionsCall1 - called: ', called);

    //----------------------------------------------------------------
    // example 2

    const person2 = {
      firstName: 'John',
      lastName: 'Doe',
    };

    function greet(this: typeof person2, extraArg?: string) {
      console.log(`${extraArg}, ${this.firstName} ${this.lastName}`);
    }
    // I can .call() normal function, not only method from the object
    greet.call(person2, 'Hello, this is extra argument');

    //----------------------------------------------------------------
    // example 3

    const travelAgency1: any = {
      name: 'travelAgency1',
      direction: 'Egypt',
      price: 1500,
      travelers: [],
      addTraveler: function (traveler: string): any {
        this.travelers.push({ traveler: traveler, direction: `${this.direction}` })
        console.log(`Welcome to ${this.direction} ${traveler}`)
      }
    }

    console.log('travelAgency1: ', travelAgency1)
    travelAgency1.addTraveler('Bart Lech')
    travelAgency1.addTraveler('John Doe')
    // it is not working because I am not calling normal function but method of the object. If I assign this method
    // to variable then this is another copy of object. I am not invoke this environment of travelAgency1:

    // const travelAgency1AssignedToVar = travelAgency1.addTraveler
    // travelAgency1AssignedToVar('Not Work')
    // And this is point where I have to use .call() to redirect 'this' (environment of object) to next copy

    const travelAgency1AssignedToVar = travelAgency1.addTraveler
    travelAgency1.addTraveler.call(travelAgency1, 'Work Work')
    travelAgency1.addTraveler.call(travelAgency1, 'Work2 Work2')

    // also I can use / borrow method from certain object for another object. I am just redirect 'this' env to
    // another func

    const travelAgency2: any = {
      name: 'travelAgency2',
      direction: 'Paris',
      price: 1100,
      travelers: []
    }

    console.log('travelAgency2: ', travelAgency2)
    travelAgency1.addTraveler.call(travelAgency2, 'Name2 Name2')


  }


  functionsApply1() {

    //----------------------------------------------------------------
    ////////// 1. Functions .apply()
    //
  }


  functionsBind1() {

    //----------------------------------------------------------------
    ////////// 1. Functions .bind()
    //
  }
}
