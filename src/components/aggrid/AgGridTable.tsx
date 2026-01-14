import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([ AllCommunityModule ]);



export interface AgGridTableProps {
  columnDefs: ColDef[];
  rowData: any[];
  className?: string;
  height?: string | number;
  width?: string | number;
  onRowClicked?: (event: any) => void;
  onCellClicked?: (event: any) => void;
  onSelectionChanged?: (event: any) => void;
  rowSelection?: any;
  pagination?: boolean;
  paginationPageSize?: number;
  paginationPageSizeSelector?: number[] | false | boolean;
  quickFilterText?: string;
}

// Reusable AG Grid Table Component
export const AgGridTable: React.FC<AgGridTableProps>=({
  columnDefs,
  rowData,
  className = '',
  height = 500,
  width = '100%',
  quickFilterText,
  pagination = false,
  paginationPageSize = 10,
  paginationPageSizeSelector = false,
  onRowClicked,
  onCellClicked,
  onSelectionChanged,
  ...rest
})=> {
  // Diagnostic: check that React has hooks on the object
  
  const [gridApi, setGridApi] = React.useState<any>('');
  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  React.useEffect(() => {
    if (gridApi && typeof gridApi.setQuickFilter === 'function') {
      if (typeof quickFilterText !== 'undefined') {
        gridApi.setQuickFilter(quickFilterText);
      }
    }
  }, [quickFilterText, gridApi]);

  const pageSizeSelectorProp = React.useMemo(() => {
    if (paginationPageSizeSelector === true) {
      const base = paginationPageSize || 10;
      const values = Array.from(new Set([base, base * 2, base * 5])).sort((a, b) => a - b);
      return values;
    }
    return paginationPageSizeSelector;
  }, [paginationPageSizeSelector, paginationPageSize]);

  return (
    <div
      className={`ag-theme-alpine ${className}`}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: typeof width === 'number' ? `${width}px` : width,
        minHeight: 200
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
        onRowClicked={onRowClicked}
        onCellClicked={onCellClicked}
        onSelectionChanged={onSelectionChanged}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={pageSizeSelectorProp}
        {...rest}
      />
    </div>
  );
}
