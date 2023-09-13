import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import * as snippets from './code-snippets/snippets';

@Component({
  selector: 'app-generators-functions',
  templateUrl: './generators-functions.component.html',
  styleUrls: ['./generators-functions.component.sass']
})
export class GeneratorsFunctionsComponent implements OnInit {
  sanitizedSnippets: Record<string, SafeHtml>;

  private sanitizeSnippet(snippet: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(snippet);
  }

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedSnippets = Object.fromEntries(
      Object.entries(snippets).map(([key, value]) => [key, this.sanitizeSnippet(value)])
    );
  }


  ngOnInit() {
    // this.generatorBasics0()
    // this.generatorsBasics1()
    // this.generatorsBasics2()
    // this.generatorsBasics3()
    this.generatorsBasics4()
  }

  generatorBasics0() {
    // We can create custom generator from array or string using '[Symbol.iterator]()'
    const myArray = ["1", "2", "3", "4"];
    const customIterator = myArray[Symbol.iterator]();

    console.log('generatorsBasics0: ', customIterator.next());
    console.log('generatorsBasics0: ', customIterator.next());

  }

  generatorsBasics1(): void {
    //----------------------------------------------------------------
    ////////// 1. Very basic example
    function* generator1() {
      yield 1
      yield 2
      yield 3
    }

    // We have to assign generator func to variable to avoid creating next instances. Otherwise, during calling this
    // func there will be new generator1() instance and it will start from beginning
    const gen1 = generator1()

    console.log('generatorsBasics1: ', gen1.next())
    // output: {value: 1, done: false}
    console.log('generatorsBasics1: ', gen1.next())
    // output: {value: 2, done: false}
    console.log('generatorsBasics1: ', gen1.next())
    // output: {value: 3, done: false}
    console.log('generatorsBasics1: ', gen1.next())
    // output: {value: undefined, done: true}

    //----------------------------------------------------------------
    ////////// 2. Iterate generator
    // We can iterate through all elements of generator (all yields) using for loop.
    // The next() func will be automatically used
    function* generator2() {
      yield 1
      yield 2
      yield 3
    }

    const gen2 = generator2()

    for (const elem of gen2) {
      console.log('generatorsBasics1 iterated elem ', elem)
    }

    //----------------------------------------------------------------
    ////////// 3. Spread generator
    // It is treat like an array but with manually iterations. So then we can use spread operator!

    function* generator3() {
      yield 1
      yield 2
      yield 3
    }

    const gen3 = generator3()

    const values = [...gen3]
    console.log('generatorsBasics1 spread: ', values)

    //----------------------------------------------------------------
    ////////// 4a. Close generator - return inside
    // We can close generator using return method outside or inside *func

    function* generator4(arg1: number) {
      if (arg1 === 5) return
      yield 1
      yield 2
      yield 3
    }

    const gen4 = generator4(5)

    console.log('generatorsBasics1 return inside: ', gen4.next())
    // if arg1 === 5 then output is: { value: undefined, done: true }

    //----------------------------------------------------------------
    ////////// 4b. Close generator - return outside
    // We can close generator using outside .return() method. We can also pass final value during closing generator

    function* generator5(): any {
      yield 1
      yield 2
      yield 3
    }

    const gen5 = generator5()

    console.log('generatorsBasics1 return outside: ', gen5.next())
    console.log('generatorsBasics1 return outside: ', gen5.next())
    console.log('generatorsBasics1 return outside: ', gen5.return(155))
    // After using return() method the generator is closed and it ignores any other next() keywords
    console.log('generatorsBasics1 return outside: ', gen5.next())
    // { value: undefined, done: true }

    //----------------------------------------------------------------
    ////////// 4c. Close generator - throw
    // We can close generator using throw() method.

  }

  generatorsBasics2(): void {
    function* generator2() {
      let numb = 0

      while (true) {
        yield numb++
      }
    }

    const gen2 = generator2()

    console.log('generatorsBasics2: ', gen2.next())
    console.log('generatorsBasics2: ', gen2.next())
    console.log('generatorsBasics2: ', gen2.next())

  }

  generatorsBasics3(): void {
    const customGenerator = {
      index: 0,
      data : ['data1', 'data2', 'data3', 'data4'],
      next() {
        return (this.index < this.data.length) ?
          { value: this.data[this.index++], done: false }
          : { value: undefined, done: true }
      },
    }

    console.log('generatorsBasics3: ', customGenerator.next())
    console.log('generatorsBasics3: ', customGenerator.next())
    console.log('generatorsBasics3: ', customGenerator.next())
    console.log('generatorsBasics3: ', customGenerator.next())
    console.log('generatorsBasics3: ', customGenerator.next())

  }

  generatorsBasics4(): void {
    //----------------------------------------------------------------
    ////////// 1. Generators & Throw & Try&Catch

    function* generator1() {
      yield 1
      yield 2
      yield 'error'
      yield 4
    }

    const gen1 = generator1()

    console.log('gen1: ', gen1.next())
    console.log('gen1: ', gen1.next())
    console.log('gen1: ', gen1.throw('Manual Error thrown by generator.throw()'))
    console.log('gen1: ', gen1.next())
    console.log('...actions after...')

  }



  }
