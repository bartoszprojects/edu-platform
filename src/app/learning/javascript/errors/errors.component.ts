import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.sass']
})
export class ErrorsComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
    // this.javascriptErrors1()
    this.javascriptErrors3()
    // this.javascriptErrors2()
  }

  async javascriptErrors1() {
    //----------------------------------------------------------------
    ////////// 1. Try Catch
    // The main purpose of using a try-catch block is to handle potential errors without stopping the script.
    // In the example below, if code that generates an error is not placed inside a 'try-catch' block, the next
    // lines of the script will not be executed.

    try {
      let json = "{ bad json }";
      let parsedJSON = JSON.parse(json);
    } catch (error) {
      console.log('default error: ', error)
    }
    console.log('log after try & catch');
    //----------------------------------------------------------------
    ////////// 1b. Throw
    // We can create custom errors if we don't want to rely on default javascript errors. Please be careful because
    // if the throw error is not placed in surrounding of 'try-catch' block then it will stop the script


   try {
     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
     const jsonData = await response.json();

     if (!response.ok) {
       // I can raise error manually with my own condition when error should appear. If there is no 'throw'
       // statement then normal js error system is working
       throw new TypeError("Custom Error: Problem with fetching data");
     }

     if (!jsonData.name) {
       // I can raise error manually with my own condition when error should appear
       throw new SyntaxError("Custom Error: Incomplete data: no 'name' field");
     }
     console.log('actions after throwing errors')
   }
   catch (err) {
     // there are all errors from 'try' block. It is not stopping the script
     console.log(err)
     // I can re-throw custom or normal errors. But then the script is stopped
     // throw err
   }
  }

  async javascriptErrors2() {
    //----------------------------------------------------------------
    ////////// 1b. Re-throw
    // We can throw custom error inside 'try' and then 'catch' block will receive this error but does not stop the script
    // But we can also re-throw this error. By putting 'throw' statement inside 'catch' block we again raise this error,
    // and we can reuse this error or forward this potential error inside another function. But in other cases it
    // is stopping the func / script

    async function rethrow() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1432432');
        const jsonData = await response.json();

        if (!response.ok) {
          // Here we raise the custom error but this error is going to 'catch' block without stopping the script
          throw new TypeError("Custom Error: Problem with fetching data");
        }
      }
      catch (err) {
        console.log(err);
        // Here we make re-throw raised custom error. Every error: custom or built-in, it is raised again and it's stop
        // the script. But we can reuse this error in next function
        throw err;
      }
    }

    try {
      await rethrow()
    }
    catch(err) {
      console.log('error from next function: ', err)
    }
    console.log('...actions after...')

  }



    async javascriptErrors3() {
    //----------------------------------------------------------------
    ////////// 1. Try Catch Throw - advanced example

    const responseFunc = (region: string): void => {
      fetch(`./assets/json/errors/example1/${region}.json`)
        .then((res: Response) => {
          if (!res.ok) throw new SyntaxError('custom Error: !res.ok')
          return res.json()
        })
        .then((res2) => {
          console.log('res2: ', res2)
          return fetch(`./assets/json/errors/example1/students.json`)
        })
        .then((res3) => {
          return res3.json()
        })
        .then((res4) => {
          const filtered = res4.filter((filtered: any) => filtered.region === region)
        })
        .catch((err) => {
          console.log('err from catch: ', err)
        })

      setTimeout(() => {
        console.log("... actions after responseFunc ...");
      }, 2000);

    }
    responseFunc('nevada')


  }
}
