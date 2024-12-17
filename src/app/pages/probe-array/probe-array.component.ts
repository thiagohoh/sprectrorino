// probe-array.component.ts
import { Component, ViewChild } from '@angular/core';
import { CacheComponent } from '../cache/cache.component';

@Component({
  selector: 'app-probe-array',
  templateUrl: './probe-array.component.html',
  styleUrls: ['./probe-array.component.css']
})
export class ProbeArrayComponent {
  data: string[] = ["0x440", "0x441", "0x442", "0x443", "0x444", "0x445"];
  cache: { [key: string]: { index: number, data: string }[] } = {
    1: [], // L1
    2: [], // L2
    3: []  // L3
  };
  showTooltip = false;
  selectedIndex: number | null = null;
  currentCacheLevel: number | null = null;
  highlightIndex: number | null = null;
  arrowIndex: number = 0; // Índice para a seta
  arrowInterval: any; // Intervalo para a seta

  async startArrowIteration() {
    // Inicia a iteração da seta e aguarda sua conclusão
    await this.iterateArrow();
  }

  iterateArrow() {
    return new Promise<void>((resolve) => {
      this.arrowIndex = 0;
      this.iterateArrowInternal(resolve);
    });
  }

  private iterateArrowInternal(resolve: () => void) {
    const currentElement = this.data[this.arrowIndex+1];
    const accessTime = currentElement === '0x443' ? 1000 : 3000;

    this.arrowIndex++;

    if (this.arrowIndex < this.data.length) {
      setTimeout(() => this.iterateArrowInternal(resolve), accessTime);
    } else {
      // Resolva a Promise quando a iteração estiver concluída
      resolve();
    }
  }

  async startHighlightAndArrow() {
    // Inicia o destaque e aguarda sua conclusão
    await this.startHighlight();

    // Inicia a iteração da seta após um breve atraso
    await new Promise(resolve => setTimeout(resolve, 500));
    await this.startArrowIteration();
  }

  startHighlight() {
    // Defina o índice que você deseja destacar (0x443)
    const targetIndex = this.data.indexOf("0x443");
    this.highlightIndex = targetIndex;

    // Simula o acesso à cache quando o destaque é iniciado
    this.cacheComponent.addToCache(10, '0x443');
    
  }

  probeArray(index: number, cacheLevel: number) {
    // Verifique se o índice atual corresponde ao índice destacado
    if (index === this.highlightIndex) {
      this.selectedIndex = index;
      this.currentCacheLevel = cacheLevel;

      //this.cache[cacheLevel].push({ index: index, data: this.data[index] });
      this.showTooltip = true;

      setTimeout(() => {
        this.showTooltip = false;
        this.currentCacheLevel = null;
      }, 2000);
    }
  }

  @ViewChild(CacheComponent) cacheComponent!: CacheComponent;

  clearCache(cacheLevel: number) {
    this.cache[cacheLevel] = [];
  }
}
