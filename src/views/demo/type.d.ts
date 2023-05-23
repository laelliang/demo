export interface TableData {
  id: number;
  [key: string]: any;
}

export interface ColumnProps {
  title: string;
  field: string;
  [key: string]: any;
}
