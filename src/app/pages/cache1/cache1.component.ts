import { Component,  Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cache1',
  templateUrl: './cache1.component.html',
  styleUrls: ['./cache1.component.css']
})
export class Cache1Component implements OnInit{

  @Input() level: number = 0;
  @Input() cacheEntries: { index: number, data: string }[] = [];
  @Input() highlightedIndex: number | null = null;
  array2: boolean = false;
  
  constructor(private cdr: ChangeDetectorRef) {}


  showArray2() {
    this.array2 = true;
  }

  ngOnInit() {
    // Inicializa a cache com valores aleatórios em hexadecimal
    this.initializeCache();
  }

  initializeCache() {
    this.cacheEntries.push({ index: 0, data: "array1_size" });
    this.cacheEntries.push({ index: 1, data: "array2" });
    for (let i = 2; i < 10; i++) {
      const index = i;
      const data = this.generateRandomHexValue();
      this.cacheEntries.push({ index, data });
    }
  }

  generateRandomHexValue(): string {
    const randomValue = Math.floor(Math.random() * 256); // Gera um valor aleatório entre 0 e 255
    return '0x' + randomValue.toString(16).toUpperCase(); // Converte para hexadecimal e formata
  }


  addToCache(index: number, data: string) {
    this.cacheEntries.push({ index, data });
    this.highlightedIndex = this.cacheEntries.length - 1;
    this.cdr.detectChanges();
  }

  clearCache() {
    this.cacheEntries = [];
    this.cdr.detectChanges();
  }

  
}