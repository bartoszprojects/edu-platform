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
    // this.typesForFunctions1()
    // this.advancedTypes1()
    // this.typesGenerics1()
    // this.typesUtilsTypes1()
  }

  basicsTypes1() {

    // ------------------------------------------------------------------
    // GENERAL CONCEPT OF TYPING

        // ------------------------------------------------------------------
        // TYPE ANNOTATION - You explicitly tell TypeScript the type
        // When using the 'annotation' approach, you EXPLICITLY specify the variable's type,
        // and then you can only assign the chosen type to this variable.

            // -------------------------------

                  let myString1: string;
                  myString1 = '123'
                  myString1 = 'string1'

                  // ... we can not assign number type for 'myString1' because earlier we used EXPLICITLY type for this var
                  // myString1 = 123

            // -------------------------------

                  let myArray1: string[] = ['string1', 'string2']
                  myArray1 = ['string2', 'string3']

                  // ... we can not assign number[] type for 'myArray1' because earlier we used EXPLICITLY type for this var
                  // myArray1 = [1, 2]

            // -------------------------------

                let myFunction1: (name: string, age: number) => string

                myFunction1 = (name: string, age: number) => {
                  return (age > 18) ? `you are not to young ${name}` : `you are very young ${name}`
                };

                console.log('myFunction1: ', myFunction1('name1', 19))

                // ... you cannot pass next 'country' argument because you EXPLICITLY created scheme of function types
                // myFunction1 = (name: string, age: number, country: string) => { ... }

        // ------------------------------------------------------------------
        // TYPE INFERENCE - TypeScript guesses the type
        // When using type inference you don't five type of your variable. Instead, you provide a value of this var
        // and typescript is trying to infer your type

            // -------------------------------

                // typescript uses the best algorithm to infer what type you used for your variable
                let myVariable1 = 123
                let myVariable2 = 'string1'
                let myVariable3 = [1, 2, 3, 4, 5]

            // -------------------------------

                // even if you don't put value for variable when initialized, typescript is creating inferred union of types
                let myVariable4;
                myVariable4 = 123
                myVariable4 = 'string2'
                // my variable4 : number | string

        // ------------------------------------------------------------------
        // KEYOF - getting list of object's keys
        // It takes union of literal type from another object's keys and force your variable to use only this scheme
        // It is used only for objects because there are keys

            // -------------------------------

                interface interface11 {
                  name: string;
                  surname: string;
                  age: number
                }

                // ... using 'keyof' we get all keys from interface11 and create union of literal types:
                type getKeysFromInterface = keyof interface11 // ('name' | 'surname' | 'age')

                let myString2: getKeysFromInterface
                myString2 = "name";
                myString2 = "surname";
                // myString2 = "country" // error - 'country' key does not belong to keys of interface1


        // ------------------------------------------------------------------
        // TYPEOF - getting type of object
        // Using typeOf you can copy type from object and create new type with copied schema
        // Typescript copies all keys of object and also infer type of value

             // -------------------------------
                // using 'typeof' we can get keys from objec and also get types of values

                const obj21 = { name: "name1", country: "country1" }
                type obj21Type = typeof obj21 // type { name: string, country: string }
                const obj22: obj21Type = { name: "name2", country: "country2" }

                // const obj23: obj21Type = { name: "name3", country: 23 } - error - country has to be string
                // const obj24: obj21Type = { name: "name3", city: "city2" } - error - there is no 'city' key

            // -------------------------------
                // using 'keyof typeof' we can get only keys of the object and create literac union

                const obj23 = { name: "name1", country: "country1" }
                type obj231OnlyKeys = keyof typeof obj23 // union type "name" | "country"

                const variable23: obj231OnlyKeys = "name"

            // -------------------------------
                // we can copy type of our variable, create our own type and use this type in the future

                const myVariable7: string = 'myVariable7'
                type typeOFmyVariable7 = typeof myVariable7 // we copy 'string' type
                let myString3: typeOFmyVariable7 = 'myVariable7'

                const myVariable8 = 'myVariable8'
                type typeOFmyVariable8 = typeof myVariable8 // we copy 'myVariable8' literal type
                let myString4: typeOFmyVariable7 = 'myVariable8'



        // ------------------------------------------------------------------
        // CONST ASSERTIONS
        // - we convert type of value to LITERAL TYPE
        // - var or object becomes READONLY

            // -------------------------------

            // example of LITERAL

                const myVariable9 = "Hello" // Type: (readonly string) - generic type
                const myVariable10 = "Hello" as const // Type: (readonly "Hello") - literal type

                const myArray2 = ["john", "eva"] // Type: string[]
                const myArray3 = ["john", "eva"] as const // Type: readonly["john", "eva"]


                // To create union of literal types from Array we have to use 'as const' to convert string[] to literals

                const myArray4 = ["PL", "ENG", "FRA", "USA",]
                type getArray4Type = typeof myArray4 // Type: string[]

                const myArray5 = ["PL", "ENG", "FRA", "USA"] as const
                type getArray5Literals = typeof myArray5[number] // Type: (readonly["PL", "ENG", "FRA", "USA")
                // now we can use union of literals:
                const myVariable11: getArray5Literals = "PL"

          // example of READONLY

                let myString12 = "myString12" // Type: string
                let myString13 = "myString13"  as const // Type: (readonly "myString12")
                // myString13 = "changed" // you cannot change this var because it is readonly because of 'as const'

                let myArray6 = [1, 2, 3 ,4 ,5] // Type: number[]
                let myArray7 = [1, 2, 3 ,4 ,5] as const // Type: (readonly[1, 2, 3 ,4 ,5])
                // myArray7.push(6) // you cannot push value to readonly immutable tuple

        // ------------------------------------------------------------------
        // CONST ASSERTION vs CONST vs READONLY

        // ------------------------------------------------------------------
        // GUARD OF TYPES
        //



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

          // -------------------------------

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
                joinTypes({ city: "city", country: "country", street: "street" })

          // Type Literal
          // This type occurs when you tell what kind of values variable can contain instead of what kind of types:
          // "value1" | "value2" instead of "string | number"
          // It's working only for string, number, boolean

            // -------------------------------

                // there you force 'myVariable5' to have only 'value1' value because there is 'const' var type
                // ... so here, typescript set the type of 'myVariable5' value to 'value1', not to the string!

                const myVariable5 = 'value1' // type 'value'
                let myVariable6 = 'value2' // type string

            // -------------------------------

                let possibleNames: "Peter" | "John" | "Eva" = "Peter"
                possibleNames = "Peter"
                possibleNames = "Eva"
                // possibleNames = "Brad" // you cannot assign something else than "Peter" | "John" | "Eva"

                type possibleNumbers = 1 | 2 | 3 | 4;
                let possibleNumber1: possibleNumbers = 2
                // let possibleNumber1: possibleNumbers = 5  // you cannot assign something else than 1 | 2 | 3 | 4

                let possibleStringAndNumbers: "1" | "2" | 3 | 4;
                possibleStringAndNumbers = 3


  }

  typesUtilsTypes1() {
    // ------------------------------------------------------------------
    // UTILITY TYPES

        // ------------------------------------------------------------------
        // RECORD Type - Record<Keys, Type>
        // If we want to create structure of keys and values of our objects we should use Record Type

            // -------------------------------

                type keysUnion = 'value1' | 'value2' | 'anotherValue'

                // Record<( literal keys from keysUnion), ( type number for all values of object) >
                type keyValueScheme = Record<keysUnion, number>

                const myObj1: keyValueScheme = { 'value1': 1, 'value2': 2, 'anotherValue': 3}

            // -------------------------------

                interface myInterface1 { surname: string, age: number, friends: string[] }
                type unionKeys = "John" | "Patrick" | "Eva"

                type fullScheme = Record<unionKeys, myInterface1>

                const myObj2: fullScheme = {
                  "John": { surname : 'surname1', age: 20, friends: []},
                  "Patrick": { surname : 'surname2', age: 30, friends: []},
                  "Eva": { surname : 'surname3', age: 40, friends: []}
                }

        // ------------------------------------------------------------------
        // PICK Type - Pick<Type, Keys>
        // If we want to get some of (keys and their values types) from object we should use Pick Type

            // -------------------------------

                interface myInterface2 { name: string, surname: string, country: string, money: number }

                // we are getting only (name: string, money: number) from interface
                type getSomeOfInterfaceKeys = Pick<myInterface2, "name" | "money">

                const myObj3: getSomeOfInterfaceKeys = { name: "name1", money: 12 }


        // ------------------------------------------------------------------
        // OMIT Type - Omit<Type, Keys>
        // If we want to omit some of (keys and their values types) from object then we should use Omit Type

            // -------------------------------
            // type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

                interface myInterface3 { name: string, surname: string, country: string, money: number }

                // we are excluding some of (keys, values) from interface
                type omitSomeOfInterfaceKeys = Omit<myInterface3, "name" | "surname" | "money">

                const myObj4: omitSomeOfInterfaceKeys = { country: 'country1' }


        // ------------------------------------------------------------------
        // PARTIAL Type - Partial<Type>
        // If we want to make all of (keys, values) optional then we should use Partial Type

            // -------------------------------
            // type Partial<T> = { [P in keyof T]?: T[P]; };

                interface myInterface4 {
                  name?: string,
                  surname: string,
                  country: string,
                  money: number
                }

                // there we set all interface properties as optional. We don't have to use '?' operator inside interface or object
                // (name?: string). Sometimes this is not good to use '?' operator inside reusable interface. For one purpose
                // property should be optional, for another purpose it should be required. Partial Type is the best for this
                type makeAllOptional = Partial<myInterface4>

                const myObj5: makeAllOptional = { money: 15 }
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

  typesGenerics0() {

    // ------------------------------------------------------------------
    // GENERIC Types
    //

        // -------------------------------
  }

}
