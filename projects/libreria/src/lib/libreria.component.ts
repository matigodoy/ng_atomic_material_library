import { Component, Input } from '@angular/core';
import { IButton } from '../interfaces/IButton';

@Component({
  selector: 'lib-libreria',
  template: `
    <button class="btn btn-primary" [type]="myButton.type"]>{{ myButton.text}}</button>
  `,
  styles: [
  ]
})

export class LibreriaComponent {
  @Input() myButton: IButton = {
    text: 'Ejemplo',
    type: 'primary'
  }

}
