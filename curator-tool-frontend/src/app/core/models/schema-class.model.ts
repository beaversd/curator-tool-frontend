import { AttributeData, AttributeProperty } from "./fetch-dataset.model";

export interface SchemaClassData<T = any> extends AttributeData {
  value: T;
  type: DataType;
  className: string;
}

export type DataType =
  'STRING' |
  'INTEGER' |
  'FLOAT' |
  'BOOLEAN' |
  'RELATIONSHIP';


export function toDataType(props: AttributeProperty): DataType {
  const type = props.attributeClasses[0].type;
  if (type.startsWith("org.reactome")) {
    return 'RELATIONSHIP';
  } else if (type.endsWith("Long") || type.endsWith("Integer")) {
    return 'INTEGER';
  } else if (type.endsWith("Float") || type.endsWith("Double")) {
    return 'FLOAT';
  } else if (type.endsWith("Boolean")) {
    return 'BOOLEAN';
  } else {
    return 'STRING';
  }
}