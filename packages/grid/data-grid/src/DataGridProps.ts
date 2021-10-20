import { GridInputComponentProps } from '../../_modules_/grid/GridComponentProps';

export const MAX_PAGE_SIZE = 100;

/**
 * The grid component react props interface.
 */
export type DataGridProps = Omit<
  GridInputComponentProps,
  | 'apiRef'
  | 'checkboxSelectionVisibleOnly'
  | 'disableColumnResize'
  | 'disableColumnReorder'
  | 'disableMultipleColumnsFiltering'
  | 'disableMultipleColumnsSorting'
  | 'throttleRowsMs'
  | 'hideFooterRowCount'
  | 'options'
  | 'onRowsScrollEnd'
  | 'scrollEndThreshold'
  | 'signature'
> & {
  pagination?: true;
};
