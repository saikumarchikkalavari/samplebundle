import { 
  ModuleRegistry,
  ClientSideRowModelModule,
  ValidationModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  CsvExportModule,
} from 'ag-grid-community';

// Register only essential AG Grid modules (instead of AllCommunityModule)
// This reduces bundle size by ~50-60% while keeping core functionality
ModuleRegistry.registerModules([
  ClientSideRowModelModule,  // Core row model for displaying data
  ValidationModule,           // Cell editing validation
  TextFilterModule,           // Text column filtering
  NumberFilterModule,         // Number column filtering
  DateFilterModule,           // Date column filtering
  CsvExportModule,            // CSV export functionality
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

// Export AG Grid modules for consumer apps that need additional features
export {
  ModuleRegistry,
  ClientSideRowModelModule,
  ValidationModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  CsvExportModule,
} from 'ag-grid-community'

// Note: If you need additional features, import and register these modules in your app:
// - SetFilterModule (for set/multi-select filtering)
// - ColumnMenuModule (for column menu)
// - ContextMenuModule (for right-click context menu)
// - RangeSelectionModule (for Excel-like range selection)
// - StatusBarModule (for status bar)
// - SideBarModule (for columns/filters side panel)
