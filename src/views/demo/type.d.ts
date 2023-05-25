export interface TableData {
  id: number;
  [key: string]: any;
}

export interface ColumnProps {
  title?: string;
  field?: string;
  type?: string;
  [key: string]: any;
}

export interface ColumnDefaultSlots {
  data?: any;
  field?: string;
}
