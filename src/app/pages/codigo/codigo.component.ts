import { Component, ViewChild } from '@angular/core';
import { Cache1Component } from '../cache1/cache1.component';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent {
  
  x: number = 0;
  array1_size: number = 5; // Altere para o tamanho desejado
  isCodeBlockGreen: boolean = false;

  @ViewChild(Cache1Component) cache1Component!: Cache1Component;
  constructor() {}
  

  incrementX() {
    if (this.x < this.array1_size) {
      this.isCodeBlockGreen = true;
      this.x++;
    } else {
      this.isCodeBlockGreen = false;
    }

  }

  setXToK() {
    this.PutK();
    const k = 10791510;
    this.x = k;
    // this.PutK();
  }

  getBackgroundColor() {
    if (this.x === 0) {
      return 'white';
    }
    else if (this.x === 10791510) {
      return 'yellow';
    } else if (this.x > 0 && this.x < this.array1_size) {
      return 'green';
    } else {
      return 'white';
    }
  }

  PutK() {
    this.cache1Component.clearCache();
    this.cache1Component.addToCache(3, '10791510');
    setTimeout(() => {
      this.cache1Component.addToCache(5, 'array2[array1[x] * 4096]');
    }, 10000);
    
  }
}
