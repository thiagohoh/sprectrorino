import { Component } from '@angular/core';

@Component({
  selector: 'app-spectre-codigo2',
  templateUrl: './codigo2.component.html',
  styleUrls: ['./codigo2.component.css']
})
export class Codigo2Component {
  step = 0;
  c = 0;
  showAttackCode = false;
  entry = 1000;
  x: number = 0;
  array1_size: number = 5; // Altere para o tamanho desejado
  isCodeBlockGreen: boolean = false;
  level: number = 0;
  cacheEntries: { index: number, data: string }[] = [];
  highlightedIndex: number | null = null;
  arr =['a','b','c','d','e']; 
 
  

  start(){
     this.cacheEntries=[];
     this.showAttackCode =false;
     this.x = 0;
     this.step = 0;
  }

  nextStep(){  
    this.step++;
    if(this.step == 2) {
      // this.cacheEntries.push({ index: 0, data: "entrada" });
    }
    if(this.step == 3) {
      this.cacheEntries.push({ index: 0, data: "secret" });
    }
    if(this.step == 4) {
      this.showAttackCode = true
    }
    if(this.step == 5) {
      this.cacheEntries.push({ index: 0, data: this.arr[this.c] });
    }
    if(this.step == 8) {
      this.c++;
      this.cacheEntries.push({ index: 0, data: this.arr[this.c] });
    }
    if(this.step == 11) {
      this.entry++;
      this.step = 0;
      this.cacheEntries=[];
    }
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


}
