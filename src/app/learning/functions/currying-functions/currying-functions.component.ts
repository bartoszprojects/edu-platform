import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-currying-functions',
  templateUrl: './currying-functions.component.html',
  styleUrls: ['./currying-functions.component.sass']
})
export class CurryingFunctionsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.curryingBasics1()
  }

  curryingBasics1() {
    //----------------------------------------------------------------
    ////////// 1. Currying functions
    // Using Currying functions I can decide how many parameters and when I will use

    //----------------------------------------------------------------
    // example 1

    function add1(x: number) {
      console.log('.. any action from add1 func')
      return function add2(y: number) {
        console.log('.. any action from add2 func')
        return function add3(z: number) {
          console.log('.. any action from add3 func')
          return x + y + z
        }
      }
    }
    const final = add1(1)(2)

    //----------------------------------------------------------------
    // example 2

    // in traditional approach with normal func I have to pass three arguments into function
    // these three parameters are mandatory. Even If I convert "c" argument into "c?" optional then
    // I will have error because inside body of func there is "a+b+c"
    const normalFunc = (a: number, b: number, c: number): number => a + b + c
    console.log('learningGeneralFunctions - normalFunc: ', normalFunc(1,2,3))

    // in currying approach I can pass as many arguments as I want when I'm calling the func
    const curryingFunc = (a: number) => (b: number) => (c: number): number => a + b + c
    console.log('learningGeneralFunctions - curryingFunc:', curryingFunc(1)(2)(3))

    // above example is the currying function but using old js approach
    const oldCurryingFunc = function(a: number) {
      return function(b: number) {
        return function(c: number) {
          return a + b + c
        }
      }
    }
    console.log('learningGeneralFunctions - oldCurryingFunc:', oldCurryingFunc(1)(2))
  }

}
