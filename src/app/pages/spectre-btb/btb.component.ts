import { Component } from '@angular/core';

@Component({
  selector: 'app-spectre-btb',
  templateUrl: './btb.component.html',
  styleUrls: ['./btb.component.css']
})
export class BtbComponent {
  i = 1;
  ti = 0;
  stepName = "Execução normal"
  step = 0;
  trainStep = -1;
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
     this.trainStep =0;
  }

  nextStep(){  
    if(this.stepName == "Treinando BTB"){
        this.ti++;
        this.trainStep++;
    } else if(this.stepName == "Execução normal"){
      this.step++;
    }
   
    if(this.ti===8 ){
      this.ti=0;
      this.trainStep=-1;
      this.stepName = "BTB Treinada"
    }

   
    if(this.step == 2) {
       this.cacheEntries.push({ index: 0, data: `valor${this.i}` });
    }
    if(this.step == 3) {
      this.cacheEntries.push({ index: 0, data: "a" });
    }
    if(this.step == 4) {
      this.step = 0;
      this.i++;
    }
    
    if(this.step == 11) {
      this.entry++;
      this.step = 0;
      this.cacheEntries=[];
    }
  }

  traintTBT() {
    this.stepName = "Treinando BTB"
    this.step = -1;
    this.cacheEntries=[];
    this.trainStep = 0;
  }

  attack(){
    this.stepName = "Attack"
    this.i = 1000;
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
