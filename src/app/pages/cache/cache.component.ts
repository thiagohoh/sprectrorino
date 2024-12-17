import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
  
})
export class CacheComponent implements OnInit {
  @Input() level: number = 0;
  @Input() cacheEntries: { index: number, data: string }[] = [];
  @Input() highlightedIndex: number | null = null;
  
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Inicializa a cache com valores aleatórios em hexadecimal
    this.initializeCache();
  }

  initializeCache() {
    for (let i = 0; i < 10; i++) {
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

  
}