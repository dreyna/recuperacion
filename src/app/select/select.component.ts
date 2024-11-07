import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() options: { label: string; value: any }[] = [];
  // Almacena la opción seleccionada
  @Input() selectedOption: any;
  // Placeholder para mostrar en el selector
  @Input() placeholder: string = 'Seleccione una opción';

  // Emite la opción seleccionada al componente padre
  @Output() selectionChange = new EventEmitter<any>();

  // Método para manejar el cambio de selección
  onSelectionChange(event: any): void {
    this.selectionChange.emit(event.value);
  }
}
