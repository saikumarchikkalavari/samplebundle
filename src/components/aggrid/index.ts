import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register all required AG Grid modules
ModuleRegistry.registerModules([
  AllCommunityModule,
]);

// Export AgGridReact component
export { AgGridReact } from 'ag-grid-react'

// Export AG Grid React types and callbacks
export type { 
  AgGridReactProps,
  CustomCellEditorCallbacks,
} from 'ag-grid-react'

export type { 
  ColDef,
  ColGroupDef,
  GridOptions,
  GridApi,
  ICellRendererParams,
  IRowNode,
  ValueFormatterParams,
  ValueGetterParams,
  ValueSetterParams,
  CellClassParams,
  CellStyle,
  RowClassParams,
  RowStyle,
  FilterChangedEvent,
  SortChangedEvent,
  SelectionChangedEvent,
  RowClickedEvent,
  RowDoubleClickedEvent,
  CellClickedEvent,
  CellDoubleClickedEvent,
  ColumnResizedEvent,
  GridReadyEvent,
  FirstDataRenderedEvent,
  PaginationChangedEvent,
  RowDataUpdatedEvent,
  GetRowIdParams,
  GetRowIdFunc,
  PaginationNumberFormatterParams,
} from 'ag-grid-community'

// Export AG Grid modules and features
export {
  ModuleRegistry,
  AllCommunityModule,
} from 'ag-grid-community'

// Reusable pagination configuration
export const defaultPaginationConfig = {
  pagination: true,
  paginationPageSize: 10,
  paginationPageSizeSelector: [10, 25, 50, 100],
};

// Reusable row selection configuration
export const defaultRowSelectionConfig = {
  rowSelection: 'multiple' as const,
  suppressRowClickSelection: false,
  rowMultiSelectWithClick: false,
};

export const singleRowSelectionConfig = {
  rowSelection: 'single' as const,
  suppressRowClickSelection: false,
};

// Helper type for pagination params
export interface PaginationConfig {
  pagination?: boolean;
  paginationPageSize?: number;
  paginationPageSizeSelector?: number[] | boolean;
  paginationAutoPageSize?: boolean;
}

// Helper type for row selection params
export interface RowSelectionConfig {
  rowSelection?: 'single' | 'multiple';
  suppressRowClickSelection?: boolean;
  rowMultiSelectWithClick?: boolean;
  suppressCellFocus?: boolean;
}

