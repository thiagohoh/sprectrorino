import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})

export class PipelineComponent {
  pipelineStages: string[] = ['Busca', 'Decodificação', 'Execução', 'Retirada'];
  instructions: { text: string; phase: string; animation: string }[] = [
    { text: 'MOV AL, byte [rcx]', phase: '', animation: '' },
    { text: 'SHL RAX, 0xC', phase: '', animation: '' },
    { text: 'JZ retry', phase: '', animation: '' },
    { text: 'MOV RBX, qword [RBX + RAX]', phase: '', animation: '' },
    //{ text: 'MOV AL, byte [rcx]', phase: '', animation: '' },
    // // Adicione mais instruções conforme necessário
  ];
  probeArray1: boolean = false

  currentInstructionIndex: number = 0;
  currentPhase: string = 'Busca';



  executarOrdem(){
    this.currentInstructionIndex = 0;
    this.loadInstructionsIncrementally();
    setTimeout(() => {
      alert('Exceção gerada!');
    }, 12500);
    setTimeout(() => {
      window.location.reload();
    }, 13000);
    
  }

  stallExecution() {
    // Aguarde por 5 segundos (simulando stall)
    return new Promise(resolve => setTimeout(resolve, 6000));
  }

  stallExecution1() {
    // Aguarde por 5 segundos (simulando stall)
    return new Promise(resolve => setTimeout(resolve, 30000));
  }


  loadInstructionsIncrementally() {
    if (this.currentInstructionIndex < this.instructions.length) {
      const currentInstruction = this.instructions[this.currentInstructionIndex];
  
      // Move a instrução atual para a próxima fase
      this.atualizarFase(currentInstruction);
  
      this.currentInstructionIndex++;
      setTimeout(() => {
        this.loadInstructionsIncrementally();
      }, 3500); // Aguarde um segundo antes de mover para a próxima instrução
    }
  }

  loadInstructionsIncrementally1() {
    if (this.currentInstructionIndex < this.instructions.length) {
      const currentInstruction = this.instructions[this.currentInstructionIndex];
  
      // Move a instrução atual para a próxima fase
      this.atualizarFase1(currentInstruction);
  
      this.currentInstructionIndex++;
      setTimeout(() => {
        this.loadInstructionsIncrementally1();
      }, 800); // Aguarde um segundo antes de mover para a próxima instrução
    }
  }
 
  atualizarFase1(instruction: { phase: string, text:string }) {
    const phaseIndex = this.pipelineStages.indexOf(instruction.phase);

  // Move para a próxima fase
  if (phaseIndex < this.pipelineStages.length - 1) {
    instruction.phase = this.pipelineStages[phaseIndex + 1];

    console.log("aaaa" + this.currentInstructionIndex + instruction.phase);
    // Se a nova fase for 'Execução', aguarde por 5 segundos
    if (instruction.phase === 'Execução' && instruction.text === "MOV AL, byte [rcx]") {
      // console.log("aaaa" + this.currentInstructionIndex);
      this.stallExecution1().then(() => {
        this.atualizarFase1(instruction);
      });
    } else {
      // Se não for 'Execução', aguarde por 1 segundo
      setTimeout(() => {
        this.atualizarFase1(instruction);
      }, 1000);
    }
  } else {
    // Se atingir o final das fases, reinicie para 'Busca'
    instruction.phase = this.pipelineStages[3];
    this.currentInstructionIndex = 0;
  }
  }
 


  atualizarPipeline() {
    // Atualiza a fase da instrução atual
    this.instructions[this.currentInstructionIndex].animation = 'moveAnimation';
    this.instructions[this.currentInstructionIndex].phase = this.currentPhase;

    // Move para a próxima instrução
    this.currentInstructionIndex++;

    // Se atingir o final das instruções, reinicia
    if (this.currentInstructionIndex >= this.instructions.length) {
      this.currentInstructionIndex = 0;
      // this.atualizarFase();
    }
  }


  executarForaDeOrdem() {
    this.probeArray1 = true;
    this.currentInstructionIndex = 0;
    this.loadInstructionsIncrementally1();
  }

  atualizarFase(instruction: { phase: string, text: string }) {
    const phaseIndex = this.pipelineStages.indexOf(instruction.phase);

  // Move para a próxima fase
  if (phaseIndex < this.pipelineStages.length - 1) {
    instruction.phase = this.pipelineStages[phaseIndex + 1];

    console.log("aaaa" + this.currentInstructionIndex + instruction.phase);
    // Se a nova fase for 'Execução', aguarde por 5 segundos
    if (instruction.phase === 'Execução' &&instruction.text === "MOV AL, byte [rcx]") {
      // console.log("aaaa" + this.currentInstructionIndex);
      this.stallExecution().then(() => {
        this.atualizarFase(instruction);
      });
    } else {
      // Se não for 'Execução', aguarde por 1 segundo
      setTimeout(() => {
        this.atualizarFase(instruction);
      }, 3000);
    }
  } else {
    // Se atingir o final das fases, reinicie para 'Busca'
    instruction.phase = this.pipelineStages[3];
    this.currentInstructionIndex = 0;
  }
  }
  

  getInstructionsByPhase(phase: string) {
    return this.instructions.filter(instruction => instruction.phase === phase);
  }

}
