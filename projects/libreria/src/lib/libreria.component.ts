import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IButton } from '../interfaces/IButton';

@Component({
  selector: 'lib-libreria',
  template: `
    <button class="btn btn-primary" [type]="button.type">
      {{ button.text }}
    </button>
  `,
  styles: [],
})
export class LibreriaComponent implements OnInit, OnChanges {
  @Input() myButton: IButton = {
    text: 'Ejemplo',
    type: 'primary',
  };

  button: IButton = {
    text: 'Ejemplo',
    type: 'primary',
  };

  constructor() {}

  ngOnInit(): void {
    if (this.myButton) {
      this.button = { ...this.button, ...this.myButton };
    }
  }

  ngOnChanges(): void {
    if (this.myButton) {
      this.button = { ...this.button, ...this.myButton };
    }
    console.log('ngOnChanges', this.button);
  }
}
