import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-compositions-functions',
  templateUrl: './compositions-functions.component.html',
  styleUrls: ['./compositions-functions.component.sass']
})
export class CompositionsFunctionsComponent implements OnInit{
  constructor() {

  }

  ngOnInit() {
    // this.basicCompositions1()
    this.basicCompositions2()
  }

  basicCompositions1() {
    //----------------------------------------------------------------
    // Whats going on:
    // Advantages:


    //----------------------------------------------------------------
    ////////// 1. Very basic example

    function add(numb: number): number {
      return numb + 10
    }

    function multiply(numb: number): number {
      return numb * 10
    }

    console.log(add(multiply(2)))

    //----------------------------------------------------------------


    function add1(numb: number): number {
      return numb + 1
    }

    function add2(numb: number): number {
      return numb + 2
    }

    function add3(numb: number): number {
      return numb + 3
    }

    function add4(numb: number): number {
      return numb + 4
    }

    const compose = (...functions: any[]) => (x: any) => functions.reduceRight((acc, fn) => fn(acc), x)

    const result = compose(add1, add4, add2)
    // it is the same like: add1(add2(add3(1))))

    console.log('compose result: ', result(1))
  }

  basicCompositions2() {

    //----------------------------------------------------------------
    ////////// 1. Advanced example
    // Functions Compositions are very helpful when you have chain of actions on any data:

    interface Developer {
      name: string;
      age: number;
      exp: number;
      minSalary: number;
      timeZone: string;
      from: string;
      techno: string[];
    }

    const programmers = [
      { name: 'John Travolta', age: 55, experience: 7, minSalary: 4000, timeZone: 'Europe', from: 'Germany', techno: ['dart', 'javascript', 'python'] },
      { name: 'Jane Smith', age: 28, exp: 4, minSalary: 4500, timeZone: 'America', from: 'United States', techno: ['java', 'javascript'] },
      { name: 'David Johnson', age: 32, exp: 8, minSalary: 5500, timeZone: 'Europe', from: 'United Kingdom', techno: ['python', 'ruby', 'node.js'] },
      { name: 'Maria Garcia', age: 41, exp: 5, minSalary: 4800, timeZone: 'America', from: 'Spain', techno: ['java', 'c++', 'react'] },
      { name: 'Elena Petrova', age: 27, exp: 3, minSalary: 4200, timeZone: 'Europe', from: 'Russia', techno: ['javascript', 'python', 'angular'] },
      { name: 'Ahmed Ali', age: 29, exp: 6, minSalary: 5000, timeZone: 'Asia', from: 'Egypt', techno: ['python', 'java'] },
      { name: 'Luis Fernandez', age: 31, exp: 7, minSalary: 5200, timeZone: 'America', from: 'Mexico', techno: ['c#', 'javascript', 'vue.js'] },
      { name: 'Sophia Chen', age: 44, exp: 2, minSalary: 4100, timeZone: 'Asia', from: 'China', techno: ['javascript', 'react'] },
      { name: 'Andrei Popov', age: 33, exp: 9, minSalary: 6000, timeZone: 'Europe', from: 'Romania', techno: ['java', 'python', 'angular'] },
      { name: 'Mohammed Hassan', age: 34, exp: 10, minSalary: 7000, timeZone: 'Asia', from: 'Saudi Arabia', techno: ['c++', 'javascript'] },
      { name: 'Isabella Rossi', age: 29, exp: 5, minSalary: 4800, timeZone: 'Europe', from: 'Italy', techno: ['python', 'ruby', 'node.js'] },
      { name: 'Mikhail Ivanov', age: 57, exp: 4, minSalary: 4500, timeZone: 'Europe', from: 'Russia', techno: ['javascript', 'python', 'angular'] },
      { name: 'Anna Mueller', age: 27, exp: 3, minSalary: 4200, timeZone: 'Europe', from: 'Germany', techno: ['java', 'c++'] },
      { name: 'Carlos Lopez', age: 30, exp: 6, minSalary: 5000, timeZone: 'America', from: 'Mexico', techno: ['c#', 'javascript', 'vue.js'] },
      { name: 'Emily Wang', age: 26, exp: 2, minSalary: 4100, timeZone: 'Asia', from: 'China', techno: ['javascript', 'react', 'angular'] }]

      const excludeAge = (programmers: Developer[]) => programmers.filter((programmer: Developer) => programmer.age < 40)
      const excludeExp = (programmers: Developer[]) => programmers.filter((programmer: Developer) => programmer.exp > 3)
      const excludeSalary = (programmers: Developer[]) => programmers.filter((programmer: Developer) => programmer.minSalary < 6000)
      const excludeTechno = (programmers: Developer[]) => programmers.filter((programmer: Developer) => programmer.techno.length > 2)

      const categorizeByExp = (programmers: Developer[]) =>
          programmers.reduce((acc: any, programmer: any) => (
                    (programmer.exp > 5) ?
                        { ...acc, RealSenior: [ ...acc.RealSenior, programmer] } :
                        { ...acc, PoorSenior: [ ...acc.PoorSenior, programmer] }),
                        { RealSenior: [] as any[], PoorSenior: [] as any[]})

    type taskType = Developer['timeZone'];
    type ResultType = { [T in taskType]: Developer[]; };

    const categorizeByTimeZone = (programmers: Developer[]) => {
      return programmers.reduce((acc: ResultType, programmer: Developer) => (
          {...acc, [programmer.timeZone]: [...acc[programmer.timeZone] || [], programmer]}
      ), { })
    }

    const compose = (operation: any, ...functions: any[]) => (x: any) => {
      const composeResult = functions.reduceRight((acc, fn) => fn(acc), x) // ! reducer from right to the left
      return operation(composeResult)
    }

    const result = compose(categorizeByTimeZone, excludeTechno, excludeSalary, excludeExp, excludeAge)
    console.log('result of compose: ', result(programmers))
  }
}
