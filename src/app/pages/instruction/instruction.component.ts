import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent {
  @Input() instructionText: string = '';
  @Input() highlighted: boolean = false;
  @Input() phase: string = '';
  @Input() moveAnimation: string = '';
  @Input() currentPhase: string = '';
}

