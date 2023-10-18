import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.sass']
})
export class DirectivesComponent {
  outerPage2($event: number) {
    console.log('eeeeee: ', $event)
  }

}
