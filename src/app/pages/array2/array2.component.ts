import { Component } from '@angular/core';

@Component({
  selector: 'app-array2',
  templateUrl: './array2.component.html',
  styleUrls: ['./array2.component.css']
})
export class Array2Component {
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
  tooltipIndex: number | null = null;
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
    const accessTime = currentElement === '0x444' ? 500 : 5000;

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
    
  }

  probeArray(index: number, cacheLevel: number) {
    // Verifique se o índice atual corresponde ao índice destacado
      this.selectedIndex = index;
      this.tooltipIndex = index;
        this.currentCacheLevel = cacheLevel;

      this.showTooltip = true;

      setTimeout(() => {
        this.showTooltip = false;
        this.currentCacheLevel = null;
      }, 2000);
    }
}

