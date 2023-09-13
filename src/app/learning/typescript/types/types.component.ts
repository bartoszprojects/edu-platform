import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {GlobalService} from "../../../services/global.service";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.sass']
})
export class TypesComponent implements OnInit {
  panelOpenState = false;
  snippets$: Observable<any>;

  constructor(private globalService: GlobalService) {
    this.snippets$ = this.globalService.getCodeSnippet('typescript', 'types')
  }

  ngOnInit() {
    this.basicsTypes1()
    this.typesForFunctions1()
    this.advancedTypes1()
    this.typesGenerics1()
  }

  basicsTypes0() {
    const myObj1 = {
      name: 'name1',
      surname: 'surname1',
      age: 15
    }
    // it is not good to not typing destructured variables, in this example typescript guesses kind of type but what
    // if I am getting data from app?
  }

  basicsTypes1() {
    // Basic types

    // ------------------------------------------------------------------
    // PRIMITIVE TYPES
    // these types are used to define short type for normal variables
    const myString: string = 'myString';
    const myNumber: number = 1;
    const myBoolean: boolean = true;
    const myNull : null = null;
    const myUndefined: undefined = undefined;

    // ------------------------------------------------------------------
    // SPECIAL TYPES
    // these types are used for functions or object properties

    // VOID - this type means that there is no return.
    // return = null || return = undefined
    function voidExample1(): void {
      console.log('Hello!')
    }

    // -------------------------------

    // NEVER - this type means that this func will never produce any return
    // return = ??
    function neverExample1(): never {
      throw new Error();
    }
    function neverExample2(): Promise<never> {
      while (true) {
        console.log('This func will never ends and never produce any return value')
      }
    }

    // -------------------------------

    // ANY - this type means that the function may return any type
    // return = string | number | boolean | ...anything
    function anyExample1(): any {
      return ['1',[[[3,4,'1',[1,2,3]]]]]
    }

    // -------------------------------

    // UNKNOWN - this type means that the function may return any type but you cannon assign any properties to this vra
    // return = string | number | boolean | ...anything
    const unknown1: unknown = 'unknown1'
    // const unknown1Length: number = unknown1.length // error

    // ------------------------------------------------------------------
    // ADVANCED TYPES

    // Arrays

    const array1: string[] = ['1','2','3','4','5']
    const array2: number[] = [1,2,3,4,5,6,7,8,9,10]
    const array3: boolean[] = [true, true, true, false, true]

    // Unions

    const mixedVar1: string | number = 1
    const mixedVar2: string | number = '1'
    const mixedVar3: string | number | boolean = '1'

    const mixedArray1: Array<string | number> = ['1', '2', 3, 4]
    const mixedArray2: (string | number)[] = ['1', '2', 3, 4];
    const mixedArray3: (number[] | string[]) = ['1', '2', '3', '4'];
    const mixedArray4: (number[] | string[]) = [1,2,3,4,5,6];

    // Object Types

    const obj1: { name: string; age: number } = { name: "Alice",  age: 30};
    function obj2(person: { name: string; age: number }) {
      return "Hello " + person.name;
    }

    // Interface Types
    // Using interface you can build bigger scheme of your data shape

    interface Person {
      name: string;
      surname: string;
      age: number;
      extraInfo?: string;
    }

    let person1: Person = {
      name: 'name1',
      surname: 'surname1',
      age: 25
    }

    // Type Aliases
    // Using type aliases you can create your own shorter data shape
    interface myInterface1 { name: string, age: number }
    type myUnionType1 = string | boolean | number | myInterface1
    const myFunc1 = (): myUnionType1 => ''


    // Type Tuples
    // Using tuples you can create scheme of your array but this force you to use certain order!

    let tupleType1: [string, number, string] = ["apple", 3, '3'];

    // Type Intersections
    // Using intersections you can join multi types!

    type A = { foo: number };
    type B = { bar: string };
    type C = A & B
    let result: C = { foo: 42, bar: "Hello" };

    // -------------------------------

    interface interface1 { city: string, country: string }
    interface interface2 { street: string}

    function joinTypes(data: interface1 & interface2): any {
      return data
    }
    // without using ' & interface2' we would not be able to use 'street' property
    joinTypes({city: "city", country: "country", street: "street"})

    // ------------------------------------------------------------------
    // UTILITY TYPES

    // Record Type



  }

  typesForFunctions1() {
    // Types for functions
    // If we are using Higher-Order functions, and we pass func as argument, then we have to put type for this func
    // because it is normal argument of func like 'numb: number', 'name: string'

    type reusableFuncType = (number: number) => number

    const operation1 = (numb: number): number => numb + 100
    const operation2 = (numb: number): number => numb * 10

    const higherOrderFunc = (name: string, func: reusableFuncType, val: number): number => {
      console.log(`Hello ${name}, we are working here!`)
      return func(val)
    }

    const final = higherOrderFunc('Peter', operation2, 2)
    console.log('typesForFunctions1: ', final)

  }

  advancedTypes1() {
    interface taskInterface {
      name: string;
      type: string;
    }

    const tasks: taskInterface[] = [
      {name: 'task1', type: 'normal'},
      {name: 'task2', type: 'recurring'},
      {name: 'task3', type: 'normal'},
      {name: 'task4', type: 'recurring'},
      {name: 'task5', type: 'normal'},
    ]

    type taskType = taskInterface['type'];
    type ResultType = { [T in taskType]: taskInterface[]; };

    const reduced = (items: taskInterface[]) =>
        items.reduce((acc: ResultType, task: taskInterface) => (
            {...acc, [task.type]: [...acc[task.type] || [], task]}
        ), {})

    console.log('advancedTypes1: ', reduced(tasks))
  }

  typesGenerics1() {
    // Types - Generics
    // There is possibility to build very generic type for classes, objects or functions. We can use generic types
    // to implement undefined type when make for example function and define type later when call this function
    // We can reuse this function with different types!

    // ------------------------------------------------------------------

    // You can use <T> generic type and dedice later what kind of type to use
    const myGenericFunc1 = <T>(genericParam: T): string => `generic param: ${genericParam}`

    // You can use explicit type <string> or let typescript infer your type
    console.log('myGenericFunc: ', myGenericFunc1<string>('string'))

    // Other examples ...
    console.log('myGenericFunc: ', myGenericFunc1<number>(123))
    console.log('myGenericFunc: ', myGenericFunc1<boolean>(true))
    console.log('myGenericFunc: ', myGenericFunc1<(string | number)[]>([1,'2',3, '4']))

    // ------------------------------------------------------------------
    const myArray1: string[] = ['string1', 'string2', 'string3', 'string4', 'string5']
    const myArray2: number[] = [1, 2, 3, 4, 5]


    // ...without using generic types I have to create two separate functions to work with 'string, number' params
    const getRandomStringElem = (elems: string[]): string => {
      let randomIndex = Math.floor(Math.random() * elems.length);
      return elems[randomIndex]
    }

    const getRandomNumberElem = (elems: number[]): number => {
      let randomIndex = Math.floor(Math.random() * elems.length);
      return elems[randomIndex]
    }

    console.log('getRandomStringElem: ', getRandomStringElem(myArray1))
    console.log('getRandomNumberElem: ', getRandomNumberElem(myArray2))

    // using generic <T> type I can call this func with any type I want
    const getRandomGenericElem = <T>(elems: T[]): T => {
      let randomIndex = Math.floor(Math.random() * elems.length);
      return elems[randomIndex]
    }

    console.log('getRandomGenericElem: ', getRandomGenericElem<string>(myArray1))
    console.log('getRandomGenericElem: ', getRandomGenericElem<number>(myArray2))

    // ------------------------------------------------------------------
    interface interface1 { val: string }

    interface interface2 { val: number }

    const obj1: interface1 = { val: 'myValue1'}
    const obj2: interface2 = { val: 123}

    // Here I have two generic types
    const myGenericFunc2 = <T, U>(obj: T, val: U): string => {
      const someAction = (typeof val === 'number') ? val + 100 : val
      return `generic params: ${obj} - ${val}`
    }

    const genFunc1 = myGenericFunc2<interface1, number>(obj1, 105)
    const genFunc2 = myGenericFunc2(obj2, 'string value')
    // I can use explicit types for generic types also: '<interface2, string>'
    // const genFunc2 = myGenericFunc2<interface2, string>(obj2, 'string value')

    console.log('myGenericFunc2: ', genFunc1)
    console.log('myGenericFunc2: ', genFunc2)

    // ------------------------------------------------------------------

  }

}
