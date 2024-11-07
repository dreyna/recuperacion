import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'primeng/api'; 
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, BrowserModule, SharedModule  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() columns: { field: string; header: string }[] = [];
  // Datos de la tabla
  @Input() data: any[] = [];

  // Configuración de la tabla
  @Input() paginator: boolean = false;
  @Input() rows: number = 10;
  @Input() sortable: boolean = false;
  @Input() filterable: boolean = false;

  // Placeholder de filtros
  @Input() filterPlaceholder: string = 'Buscar...';
}
