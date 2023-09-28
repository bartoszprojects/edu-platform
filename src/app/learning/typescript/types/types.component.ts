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
    // this.basicsTypes1()
    // this.typesForFunctions1()
    // this.advancedTypes1()
    // this.typesGenerics1()
    // this.typesUtilsTypes1()
    // this.everythingMixedTogether()
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

                // we declare explicitly here that this array can contain only strings
                const myArray01: string[] = []
                myArray01.push('string1')
                myArray01.push('string1')
                // myArray01.push(true) - error - we only can push "string" value
                // myArray01.push(155) - error - we only can push "string" value


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

              // UNKNOWN - this type means that the function may return any type but you cannon assign any properties to this var
              // return = string | number | boolean | ...anything
              const unknown1: unknown = 'unknown1'
              // const unknown1Length: number = unknown1.length // error

    // ------------------------------------------------------------------
    // ADVANCED TYPES

          // TYPE ARRAYS

              const array1: string[] = ['1','2','3','4','5']
              const array2: number[] = [1,2,3,4,5,6,7,8,9,10]
              const array3: boolean[] = [true, true, true, false, true]

          // TYPE UNIONS

              const mixedVar1: string | number = 1
              const mixedVar2: string | number = '1'
              const mixedVar3: string | number | boolean = '1'

              const mixedArray1: Array<string | number> = ['1', '2', 3, 4]
              const mixedArray2: (string | number)[] = ['1', '2', 3, 4];
              const mixedArray3: (number[] | string[]) = ['1', '2', '3', '4'];
              const mixedArray4: (number[] | string[]) = [1,2,3,4,5,6];

          // TYPE OBJECT

              const obj1: { name: string; age: number } = { name: "Alice",  age: 30};
              function obj2(person: { name: string; age: number }) {
                return "Hello " + person.name;
              }

          // TYPE INTERFACE
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

          // TYPE ALIASES
          // Using type aliases you can create your own shorter data shape

              interface myInterface1 { name: string, age: number }
              type myUnionType1 = string | boolean | number | myInterface1
              const myFunc1 = (): myUnionType1 => ''

          // TYPE TUPLES
          // Using tuples you can create scheme of your array but this force you to use certain order!

                let tupleType1: [string, number, string] = ["apple", 3, '3'];

          // TYPE INTERSECTION
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

          // TYPE INHERITANCE
          // Using 'extends' keyword we can inherit all properties from another object / interface / class

              // -------------------------------

                  interface interface12 {
                    name: string,
                    surname: string
                  }
                  interface interface13 extends interface12 {
                    age: number
                  }

                  // using 'interface13' type we have to use all properties from interface12 + interface13
                  const myObj1: interface13 = { name: "name1", surname: "surname1", age: 15 }

          // TYPE INTERSECTION vs TYPE INHERITANCE
          // (not finished)
              // -------------------------------

                  type myType30 = { value: string }
                  type myType31 = { value: number }

                  type mixed30 = myType30 & myType31
                  // const myObj40: mixed30 = { value: 'string' }


                  // interface myInterface30 { value: string }
                  // interface myInterface31 { value: number }
                  // interface mixedInterface32 extends myInterface30, myInterface31 {}
                  // const myObj41: mixedInterface32 = { value: 'string' }


          // TYPE LITERAL - content of value is type, not type of value => "stringContent" is type!
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

          // TYPE CONDITIONAL
          // Using 'extends' keyword we can create conditional expressions

              // VERY BASIC EXAMPLE -------------------------------

                  let exampleVar0 = "myString1"

                  // if type of 'exampleVar0' == string then 'checkTypes0' == string, otherwise number
                  type checkTypes0 = typeof exampleVar0 extends string ? string : number

                  // so 'myVar0' can be only a string type
                  const myVar0: checkTypes0 = 'string'

              // VERY BASIC EXAMPLE -------------------------------

                  const exampleVar3 = "customText"

                  type checkTypes1 = typeof exampleVar3 extends "customText" ? typeof exampleVar3 : number

                  const myVar1: checkTypes1 = 'customText'

              // -------------------------------

                  const countryCode1 = "PL=Poland"
                  const countryCode2 = "GER?Germany"

                  type checkString<T> = T extends `${string}=${string}` ? true : false

                  type t3 = checkString<typeof countryCode1>
                  type t4 = checkString<typeof countryCode2>


              // -------------------------------

                  interface interface21 { name: string, additional: string }
                  interface interface22 { name: string, additional: number }

                  type checkTypes2 = interface22 extends Record<keyof interface21, number> ? string : number

                  const myFunc21 = (arg: checkTypes2): checkTypes2 => arg

                  myFunc21(21)

              // MEDIUM EXAMPLE -------------------------------

                  interface interface30 { value: string }

                  const myObj30 = null
                  const myObj31: interface30 = { value: "string" }

                  type checkTypes3<T> = T extends interface30 ? interface30 : typeof myObj30

                  const myFunc30 = <T>(arg: checkTypes3<T>): checkTypes3<T> => {
                        return arg
                  }

                  myFunc30<checkTypes3<typeof myObj31>>(myObj31)
                  myFunc30<checkTypes3<typeof myObj30>>(myObj30)

              // SUB-EXAMPLE -------------------------------
              // DISTRIBUTIVE CONDITIONAL TYPES (conditional type & unions & never)
              // If conditional type is working with unions then it is going through every elem of given union
              // type Exclude<T, U> = T extends U ? never : T;

                  type literals = 'a'|'b'|'c'
                  type literalsToExclude = 'a'|'b'

                  // here is distributive => typescript gives union array and map over each elem ('a', 'b', 'c')
                  type myExclude<T> = T extends literalsToExclude ? never : T

                  type result = myExclude<literals> // Type: 'c'

                  // if you don't want typescript to loop over union array then use square brackets [T]
                  // type myExclude<T> = [T] extends literalsToExclude ? never : [T]

                  // ---------------------

                  type myTypes2 = string | number | boolean
                  // exclude every type from 'myTypes2' if not compare to string | number
                  type myExclude3<T> = T extends string | number ? T : never

                  type resultType1 = myExclude3<myTypes2> // Type: string | number

                  type ToArray<Type> = Type extends any ? Type[] : never;

                  type StrArrOrNumArr = ToArray<string | number>;

              // SUB-EXAMPLE -------------------------------
              // INFERENCE WITH CONDITIONAL TYPES (infer)
              // using INFER keyword typescript try to guess part of type (literal or normal) and extract it.

                  // ---------------------

                  const myArray15 = ['a', 2, true]

                  // it guesses all types of 'myArray15'
                  // if my Type is of Type Array then guess all items types from this Array and return these items types
                  type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
                  type returnType0 = Flatten<typeof myArray15> // Type: string | number | boolean

                  // ---------------------

                  type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;
                  type functionResultType1 = GetReturnType<(arg: any) => void>

                  // ---------------------

                  const myString14 = "https://mydomain.com/?category=history" // literal
                  const myString15 = "https://mydomain.com/?category=chemistry" // literal
                  let myString16 = "any string" // real

                  // typescript extract & guess value from literal 'category=category' and pass it to true branch
                  type inferResult1<T extends string | null> = T extends `https://${ string }?${ infer GUESS }` ? GUESS : null

                  type resultType14 = inferResult1<typeof myString14> // Type: (literal) category=history
                  type resultType15 = inferResult1<typeof myString15> // Type: (literal) category=chemistry
                  type resultType16 = inferResult1<typeof myString16> // Type: (real) null

                  // ---------------------

                  type inferType<T> = T extends (infer A)[] ? A : never
                  type resultType2 = inferType<string[] | number[] | string>

          // MAPPED TYPES
          // Purpose of this type is to create a new type by iterating over the properties of the existing type/interface

              // SIMPLE EXAMPLE ---------------------
              // ..creating new type from existing interface keys

                  interface myInterface51 { value1: string, value2: number, value3: boolean }

                  // here we create keys from keys of another interface but all values are 'string'
                  // { keys from 'myInterface51': every value = string }
                  type myMappedType51 = { [Key in keyof myInterface51]: string }

                  const myObj51: myMappedType51 = { value1: "string1", value2: "string2", value3: "string3" }

                  // MEDIUM EXAMPLE ---------------------
                  //
                  type myType52 = { name: string, value: number, isValid: boolean, exp: string[] }

                  type myMappedType52 = { [Key in keyof myType52 as Exclude<Key, 'exp'>]: myType52[Key] }

                  const myObj52: myMappedType52 = { name: "string", value: 15, isValid: false }


          // ASSERTION TYPES - as
          // You are using assertion types in the situation when you may know better than 'typescript-infer-system'
          // which type is the best to use

              // SIMPLE EXAMPLE ---------------------
              // Generic Example

                  // here we left decision for typescript to infer the type (any[])
                  const myArray70 = []
                  // here typescript guess any[] type, but I overrule this decision and claim that the type is string[]
                  const myArray700 = [] as string[]

              // SIMPLE EXAMPLE ---------------------
              // External file example

                  // here typescript cannot infer which type 'button' var is because origin of this value is from other file
                  // Then we can use "as" keyword to tell typescript that we know better which type should be used here
                  const button = document.querySelector("#myButton") as HTMLButtonElement;
                  button.disabled = true;

                  // without using "as" keyword (assertion) - typescript doesn't know If button has 'disabled' property
                  // const button = document.querySelector("#myButton")
                  // button.disabled = true; // ERROR

              // SIMPLE EXAMPLE ---------------------
              // Function return example

                  // here we create function that returns string | number depends on 'arg'
                  // ..so sometimes it returns string and sometimes a number
                    function complexReturn(arg: string | number): string | number {
                      if (typeof arg === "number") {
                        return 123
                      }
                      return "123"
                    }

                  // if my result variable is type string then typescript cannot infer it because function can return string | number
                  // const result71: string = complexReturn('123') // ERROR

                    // .. so here we ensure typescript that we know that in this case it returns a string
                    const result71: string = complexReturn('123') as string
                    // .. but be careful using assertions. If I put '123' value here it returns string, not a number but there is no error!
                    const result72: number = complexReturn('123') as number


              // SIMPLE EXAMPLE ---------------------
              // JSON Example



              // OTHERS ---------------------

                  // the same result
                    // annotation with different syntax
                    const myArray71: string[] = []
                    // annotation with different syntax
                    const myArray72: Array<string> = []
                    // inference because we are typing inside value of variable
                    const myArray73 = new Array<string>
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
        // EXCLUDE Type - Exclude<UnionType, ExcludedMembers>
        // This util type is to exclude some types from the union type
        // type Exclude<T, U> = T extends U ? never : T;

            // -------------------------------

                type myLiteralUnion1 = "string1" | "string2" | "string3" // literal union
                // here we exclude literal "string3" from the union
                type excludeFromLiteralUnion = Exclude<myLiteralUnion1, "string3">

            // -------------------------------

                type myUnion1 = string | number | boolean | null | undefined
                // here we exclude 'null' and 'undefined' from the union
                type excludeFromTypeUnion = Exclude<myUnion1, null | undefined>

            // -------------------------------

                type func1Type = (arg: number) => number
                type func2Type = (arg: string) => string
                interface myInterface5 { name : string }

                type myUnion2 = string | number | boolean | null | func1Type | func2Type | myInterface5

                // here we exclude all functions from the union
                type excludeFunctionsFromUnion = Exclude<myUnion2, Function>
                // here we exclude all objects from the union
                type excludeObjectsFromUnion = Exclude<myUnion2, object>


  }

  typesGenerics1() {
    // Types - Generics
    // There is possibility to build very generic type for classes, objects or functions. We can use generic types
    // to implement undefined type when make function and define type later when call this function
    // We can reuse this function with different types!

        // ------------------------------------------------------------------

            // You can use <T> generic type and decide later what kind of type to use
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
        // from 27.09



        // ------------------------------------------------------------------
        // GENERIC CONSTRAINTS ('extends' keyword
        // We can force our generic <T> to have only specific type

            // -------------------------------

            // ths is function with generic type <T>. This generic accepts all types
            const myFunc30 = <T>(arg: T): T => arg
            const myResult30 = myFunc30(77)

            // here we use generic type with 'extends' keyword to ensure that <T> is only 'string' type
            const myFunc31 = <T extends string>(arg: T): T => arg
            const myResult31 = myFunc31('only string')

            // -------------------------------

            interface myInterface41 { value: number, data: string[] }
            const myObj31: myInterface41 = { value: 155, data: ['1', '2', '3'] }

            const myFunc32 = <Type1, Type2 extends keyof Type1>(param1: Type1, param2: Type2[]):
              Type1 & { other: string, keys: Type2[] } => {
              return { ...param1, other: 'otherValue', keys: param2 };
            }

            const myResult32 = myFunc32(myObj31, ['value', 'data']);
            console.log(myResult32);
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

  everythingMixedTogether() {
    // ------------------------------------------------------------------

  }

}
