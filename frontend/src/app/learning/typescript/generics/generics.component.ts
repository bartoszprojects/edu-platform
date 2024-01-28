import {Component, OnInit} from '@angular/core';
import {map, Subject, Subscription, tap} from "rxjs";
import {TypescriptService} from "../helpers/services/typescript.service";
import {InterfaceGenerics2} from "../helpers/interfaces/interfaces";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

interface myInterface1 {
  name: string,
  surname: string,
  age: number;
  country: string;
}

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.sass']
})

export class GenericsComponent implements OnInit {
  myFunc4 = ()=> {};
  myFunc5 = ()=> {};

  myForm: FormGroup;
  myArray1: myInterface1[] = []
  finalObject: Record<string, any> = {};
  mySubj1: Subject<myInterface1> = new Subject<myInterface1>()
  myObs1: Subscription | undefined;

  constructor(private typescriptService: TypescriptService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.genericsMixedTogether()
    this.finalObject["default"] = [{ "name": "default", "surname": "default", "age": 0, "country": "default" }]

    console.log('this.finalObject: ', this.finalObject)
  }

  genericsMixedTogether(): void {
    // --------------------------------------------------
    type myType2 = { extra: string}

    this.myFunc4 = () => {
      this.myArray1.push(this.myForm.value)
      this.finalObject = combineData(this.myArray1, "age")
      this.myForm.reset();
    }

    this.myFunc5 = () => {
      this.typescriptService.getData2()
        .pipe(map((items: InterfaceGenerics2[]) => {
          this.myArray1.map((itemFromUser: myInterface1): myInterface1 | myInterface1 & { extra: InterfaceGenerics2 } => {
                const matchingItem = items.find((l: InterfaceGenerics2): boolean => l.id === itemFromUser.country);
                return (matchingItem) ?
                  { ...itemFromUser, extra: matchingItem } :
                  itemFromUser;
          });
        }))
        .subscribe((res: any) => {
          this.finalObject = combineData(res, "age")
          console.log('typescriptService', this.finalObject);
        });
    }

    type myType1<T extends keyof myInterface1> = { [K in myInterface1[T]]: myInterface1[] };

    const combineData = (data: myInterface1[], sortBy: keyof myInterface1) => {
      return data.reduce((acc: myType1<typeof sortBy>, item: myInterface1) => {
        return { ...acc, [item[sortBy]]: [ ...acc[item[sortBy]] || [], item ] }
      }, {})
    }

  }

}
