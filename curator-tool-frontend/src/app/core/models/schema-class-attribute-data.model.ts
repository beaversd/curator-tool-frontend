export type AttributeProperty = {
  attributeClasses: { type: string, valueTypeDatabaseObject: boolean }[],
  cardinality: '1' | '+',
  name: string,
  origin: string,
  className: string,
  '@JavaClass': string
}

export interface AttributeData {
  category: 'OPTIONAL' | 'MANDATORY' | 'REQUIRED' | 'NOMANUALEDIT',
  definingType: 'UNDEFINED' | 'ALL_DEFINING',
  name: string;
  properties: AttributeProperty;

}

export class AttributTableData implements AttributeData {
  constructor(
    public category: 'OPTIONAL' | 'MANDATORY' | 'REQUIRED' | 'NOMANUALEDIT',
    public definingType: 'UNDEFINED' | 'ALL_DEFINING',
    public name: string,
    public properties: AttributeProperty
  ) {

    this.properties.attributeClasses[0].type = toClassName(properties.attributeClasses[0].type);
    public properties: AttributeProperty,
    ) {
  this.properties.className = this.properties.origin.split('.').slice(-1)[0];
  this.properties.origin = toClassName(properties.origin);

}
}

export function toAttributeClassName(props: AttributeProperty) {
  const type = props.attributeClasses[0].type;
  let typeArray = type.split(".");
  let index = typeArray.length;
  return typeArray[index - 1];
}


export function toClassName(props: string) {
  let typeArray = props.split(".");
  let index = typeArray.length;
  return typeArray[index - 1];
}

