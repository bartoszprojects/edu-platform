import {Component, OnInit} from '@angular/core';
import {exitCodeFromResult} from "@angular/compiler-cli";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.sass']
})
export class ErrorsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this.javascriptErrors1()
    // this.javascriptErrors3()
    // this.javascriptErrors2()
    // this.javascriptErrors4ThrowOrReturn1()
    // this.javascriptErrors4ThrowOrReturn2()

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
    } catch (err) {
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
      } catch (err) {
        console.log(err);
        // Here we make re-throw raised custom error. Every error: custom or built-in, it is raised again and it's stop
        // the script. But we can reuse this error in next function
        throw err;
      }
    }

    try {
      await rethrow()
    } catch (err) {
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


  //----------------------------------------------------------------

  // Throw and return
  // Difference between throw and return an error inside try-catch block
  // .. explanation step by step ..

  javascriptErrors4ThrowOrReturn_example_1a() {
    //----------------------------------------------------------------
    // What happens when there is a runtime error without try-catch block

    ///////////////////

    let json = "{ bad json }";
    let parsedJSON = JSON.parse(json);

    // If there is a runtime error without covering by try-catch block then the script/function is terminated
    // and the next lines of code are no longer executed.
    console.log('********** actions after try-catch block')

  }

  javascriptErrors4ThrowOrReturn_example_1b() {
    //----------------------------------------------------------------
    // What happens when there is a runtime error covered by try-catch block

    ///////////////////

    try {
      let json = "{ bad json }";
      let parsedJSON = JSON.parse(json);
    } catch (error) {

    }

    // Using try-catch block we allow error to be handled, and we don't terminate the script/function. The next lines
    // of code are executed.
    console.log('********** actions after try-catch block')
  }

  //----------------------------------------------------------------
  // If we handle the error and cover it by try-catch block then we can several possibilities to do with this.
  // - a) print the error
  // - b) try to make next approach to avoid the error
  // - c) return the error
  // - d) rethrow the error
  // - e) return something else
  // - f) throw the error in 'try' block
  // - g) throw the error in 'catch' block
  // - h) do nothing
  // - i) chain of next_approaches (b)

  javascriptErrors4ThrowOrReturn_example_print_the_error_a() {
    //----------------------------------------------------------------
    // - a) print the error

    ///////////////////

    try {
      let json = "{ bad json }";
      let parsedJSON = JSON.parse(json);
    } catch (error) {
      console.log('error:', error)
    }
    console.log('********** actions after try-catch block')

  }

  javascriptErrors4ThrowOrReturn_example_next_approach_b() {
    //----------------------------------------------------------------
    // - b) try to make next approach to avoid the error

    ///////////////////

    try {
      let json = "{ bad json }";
      let parsedJSON = JSON.parse(json);
    } catch (error) {
      let json = {"data": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
      let parsedJSON = JSON.parse(JSON.stringify(json))
      console.log('error: ', error)
      console.log('parsedJSON: ', parsedJSON)
    }
    console.log('********** actions after try-catch block')

  }

  javascriptErrors4ThrowOrReturn_example_return_the_error_c() {
    //----------------------------------------------------------------
    // - c) return the error

    ///////////////////

    try {
      let json = "{ bad json }";
      let parsedJSON = JSON.parse(json);
      // When I make 'return' inside 'catch' block then I also need to make return statement inside 'try' block
      // because function have to be 100% sure to return something. 'Catch' block does not give that certainty
      return parsedJSON
    } catch (error) {
      console.log("error: ", error)
      // when I return the error then I close the function and return the error but does not terminate the code.
      // It is similar with 'throw' error but in the console there is no error. But in both cases the next code of the
      // function is terminated: when 'return' - because we finish the function, when 'throw' - because we terminate func
      return error
    }
    // below block is not call because 'return' statements inside 'try-catch' block close the function
    console.log('********** actions after try-catch block')

  }

  javascriptErrors4ThrowOrReturn_example_rethrow_the_error_d() {
    //----------------------------------------------------------------
    // - d) rethrow the error

    ///////////////////
    const tryCatchfunc = () => {
      try {
        let json = "{ bad json }";
        let parsedJSON = JSON.parse(json);
      } catch (error) {
        throw error
      }
      console.log('********** actions after try-catch block')
    }

    try {
      tryCatchfunc()
    } catch (error) {
      console.log("error: ", error)
    }
    console.log('********** actions after try-catch block')
  }

  javascriptErrors4ThrowOrReturn_example_chain_of_next_approaches_i() {
    //----------------------------------------------------------------
    // - i) chain of next_approaches (b)
    let json = "{ bad json }";

    ///////////////////
    const tryCatchFunc = (json_to_parse: any) => {
      try {
        let json_to_parse = JSON.parse(json);
      } catch (error) {
        throw new Error('error from tryCatchFunc')
      }
    }
    const tryCatchFuncSecondApproach = () => {
      try {
        let json = {"data": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
        let parsedJSON = JSON.parse(JSON.stringify(json))
        console.log('json parsed properly: ', parsedJSON)
      } catch (error) {
        throw new Error('error from tryCatchFuncSecondApproach')
      }
    }

    try {
      tryCatchFunc("{ bad json }")
    } catch (error) {
      console.log('there was error during first approach: ', error)
      tryCatchFuncSecondApproach()
    }
    console.log('********** actions after try-catch block')
  }
  //----------------------------------------------------------------

  // Worth to note ..
  async javascriptErrors4_worth_to_note_api_errors_1() {
    // //----------------------------------------------------------------
    // // - Api errors
    // class HTTPError extends Error {
    //   statusCode: number;
    //   constructor(message: string | undefined, statusCode: number) {
    //     super(message);
    //     this.name = 'HTTPError';
    //     this.statusCode = statusCode;
    //   }
    // }
    //
    // ///////////////////
    // // this is JS inner error - Network Error (wrong url). This error, when occurs, will terminate the program.
    // // To handle it I should use try-catch block
    // try {
    //   const response1 = await fetch('https://jsonpfdsalaceholder.typicode.com/posts/1432432');
    // }
    // catch (error) {
    //   console.log('MY DESCRIPTION - HTTP ERROR: ', error)
    // }
    // console.log('********** actions after try-catch block')
    //
    // ///////////////////
    // // this is HTTP Promise error (post not found). This error, when occurs, will not terminate the program
    // // To handle it I can use IF statement to do something with this error but it won't stop the program. Also I can
    // // wrap it by try-catch to throw this error If needed
    //
    // try {
    //   const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1432432');
    //     if (!response2.ok) throw new Error(`Custom Error: HTTP Error: ${response2.status}`)
    // }
    // catch (error) {
    //   console.log('MY DESCRIPTION - PROMISE REJECTION ERROR: ', error)
    // }
    // console.log('********** actions after try-catch block')
    //
    // ///////////////////
    // // this is HTTP Promise error (post not found). This error, when occurs, will not terminate the program
    // // I can use IF condition to detect any HTTP error and console this error
    // const response3 = await fetch('https://jsonplaceholder.typicode.com/posts/1432432');
    // if (!response3.ok) console.log(new Error(`MY DESCRIPTION - (console.log) Custom Error: HTTP Error: ${response3.status}`))
    //
    // console.log('********** actions after try-catch block')
    //
    // ///////////////////
    // // this is HTTP Promise error (post not found). This error, when occurs, will not terminate the program
    // // I can use IF condition to detect any HTTP error and then for example throw this error
    //
    // const response4 = await fetch('https://jsonplaceholder.typicode.com/posts/1432432');
    // if (!response4.ok) throw new Error(`MY DESCRIPTION - (throw) Custom Error: HTTP Error: ${response4.status}`)
    //
    // console.log('********** actions after try-catch block')

    ///////////////////
    // this is JS inner error - Network Error (wrong url). This error, when occurs, will terminate the program.
    // This is example shows that uncaught error even with IF statement without throwing but logging - stopping script.

    const response5 = await fetch('https://jsonplacceholder.typicode.com/posts/1432432');
    if (!response5.ok) console.log(new Error(`MY DESCRIPTION - (throw) Custom Error: HTTP Error: ${response5.status}`))

    console.log('********** actions after try-catch block')
  }

}


