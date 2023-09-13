import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-higher-order-functions',
  templateUrl: './higher-order-functions.component.html',
  styleUrls: ['./higher-order-functions.component.sass']
})
export class HigherOrderFunctionsComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
    // this.higherOrderBasics0()
    // this.higherOrderBasics1()
    this.higherOrderBasics2()

  }

  higherOrderBasics0() {
    // Higher Order Functions - function that can take another function as an argument or return another function
    // Advantages:

    // 1. Basic Example
    //----------------------------------------------------------------


  }

  higherOrderBasics1() {
    // 1. Basic Example - old javascript

    //----------------------------------------------------------------

    const workersArray = ['adam', 'eva', 'peter', 'michael']

    function goodDay(person: string): string {
      return `Nice to meet you, dear ${person}`
    }

    function badDay(person: string): string {
      return `I don't want to talk with you ${person}`
    }

    function amazingDay(person: string): string {
      return `I love you ${person} !! <3`
    }

    function allPersons(persons: string[], welcomeType: (person: string) => string): void {
      for (let w of persons) {
        console.log(welcomeType(w))
      }
    }

    // allPersons(workersArray, goodDay)
    // allPersons(workersArray, badDay)
    // allPersons(workersArray, amazingDay)

    // 2. Basic Example - new javascript
    //----------------------------------------------------------------
    const workersArray2: string[] = ['adam', 'eva', 'peter', 'michael']

    const goodDay2 = (person: string): string => `Nice to meet you, dear ${person}`
    const badDay2 = (person: string): string => `I don't want to talk with you ${person}`
    const amazingDay2 = (person: string): string => `I love you ${person} !! <3`

    const allPersons2 = (persons: string[], welcomeType: (person: string) => string): void => {
      persons.map((person: string) => console.log(welcomeType(person)))
    }

    allPersons2(workersArray2, goodDay2)
    allPersons2(workersArray2, badDay2)
    allPersons2(workersArray2, amazingDay2)

  }

  higherOrderBasics2() {
    interface Client {
      name: string;
      position: string;
      age: number;
      exp: number;
      budget: number;
      languages: string[];
    }

    const clientsArray: Client[] = [
      { name: 'john', position: 'programmer', age: 55, exp: 4, budget: 1400, languages: ['python', 'pascal'] },
      { name: 'Michael', position: 'tester', age: 24, exp: 4, budget: 900, languages: ['php', 'python'] },
      { name: 'peter', position: 'tester', age: 41, exp: 1, budget: 1900, languages: ['php', 'javascript'] },
      { name: 'Eva', position: 'programmer', age: 67, exp: 6, budget: 2100, languages: ['c', 'javascript'] },
      { name: 'peter', position: 'tester', age: 35, exp: 11, budget: 2300, languages: ['pascal', 'c'] },
      { name: 'john', position: 'designer', age: 22, exp: 2, budget: 1200, languages: ['python'] },
      { name: 'Paula', position: 'programmer', age: 21, exp: 3, budget: 1450, languages: ['c++', 'javascript'] },
      { name: 'brad', position: 'programmer', age: 37, exp: 3, budget: 1550, languages: ['dart', 'javascript', 'typescript'] },
      { name: 'bart', position: 'tester', age: 28, exp: 7, budget: 1610, languages: ['typescript', 'dart'] },
      { name: 'eva', position: 'tester', age: 39, exp: 4, budget: 1800, languages: ['python', 'dart'] },
    ]

    function isNotPositiveNaturalNumber(value: number) {
      return isNaN(value) || value <= 0 || !Number.isInteger(value);
    }

    function checkName(clients: Client[]) {
      return clients.map((client: Client): Client => (
        {...client, name : client.name.charAt(0).toUpperCase() + client.name.slice(1)}
      ))
    }

    function sayNiceHello(clients: Client[]): string[] {
      return clients.map((client) => `Hello, nice to meet you ${client.name}`)
    }

    function sayOfficialHello(clients: Client[]): string[] {
      return clients.map((client: Client): string => `Welcome. It is good to meet you ${client.name}`)

    }

    function sayFriendlyHello(clients: Client[]): string[] {
      return clients.map((client: Client): string => `Yo ${client.name}, what's up bro?`)
    }


    function excludeAge(clients: Client[], age: number): Client[] {
      return clients.filter((client: Client): boolean => client.age >= age)
    }

    function excludeBudget(clients: Client[], budget: number): Client[] {
      return clients.filter((client: Client) => client.budget > budget)
    }


    function categorizeByPosition(clients: any[], type: string) {
      if (!['name', 'position'].includes(type)) throw new Error('Custom Error: Wrong type of client')

      return clients.reduce((acc, client: any) => (
        { ...acc, [client[type]]: [...acc[client[type]] || [], client] }
      ),{ })
    }

    function categorizeByBudget(clients: any[], budget: number) {
        return clients.reduce((acc, client) => (
            (client.budget > budget) ?
              { ...acc, richClients: [ ...acc.richClients, client] } :
              { ...acc, poorClients: [ ...acc.poorClients, client] }
          ),
          { richClients: [] as any[], poorClients: [] as any[]})
    }

    function manageClients(clients: any[], sayHelloFunc: any, excludeFunc: any, excludeVal: any, categorizeFunc: any, categorizeVal?: number | string) {
        let converted = checkName(clients)
        converted = excludeFunc(converted, 1000)
      console.log(sayHelloFunc(converted))
      return categorizeFunc(converted, categorizeVal)
    }

    console.log(manageClients(clientsArray, sayOfficialHello, excludeBudget, 1000, categorizeByPosition, 'name'))

  }
}
