import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.sass']
})
export class GenericsComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    this.basicsGenerics1()
  }

  basicsGenerics1() {
    // 1
    // basic generics
    const func1 = <T>(arg1: T): T => {
      console.log('obj1: ', arg1)
      return arg1
    }

    func1<string>('string1')
    func1<string>('string2')
    func1<number>(155)
    func1<number[]>([1,2,3])
    func1<(number | string)[]>([1,2,3,'4'])

    interface interface1 {
      name: string,
      age: number
      isAdult?: boolean;
      extra: string | number | string[]
    }

    const obj1 = {
      name: "name1",
      age: 55,
      extra: ['data1', 'data2']
    }

    const func2 = <T,U>(arg1: T, arg2: U, arg3: string | number): T => {
      console.log('obj2: ', arg1, arg2, arg3)
      return {...arg1, arg3}
    }

    func2<interface1, string>(obj1, 'arg2', 'stringParam')
    // 2
    // generic interfaces

    interface interface2<T> {
      name: string;
      extras: string | (string | number [])
      data: T
    }

    const obj2: interface2<string> = {
      name: 'name2',
      extras: [1,2,3],
      data: 'string'
    }
    const obj3: interface2<number> = {
      name: 'name2',
      extras: [1,2,3],
      data: 11
    }
  }

}
