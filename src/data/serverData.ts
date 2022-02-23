import { ApiComponent } from "yug-entity-system";

export const componentsFromServer: ApiComponent[] = [
    {
        id: 1,
        entityId: 0,
        componentName: 'geometry',
        componentDescription: 'Геометрия',
        propertyName: 'height',
        propertyDescription: 'Высота',
        propertyValue: '0',
        propertyFormula: '',
        propertyType: 'number',
        attributes: '',
        bindingToList: false
    },
    {
        id: 2,
        entityId: 0,
        componentName: 'geometry',
        componentDescription: 'Геометрия',
        propertyName: 'width',
        propertyDescription: 'Ширина',
        propertyValue: '0',
        propertyFormula: '',
        propertyType: 'number',
        attributes: '',
        bindingToList: false
    },
    {
        id: 3,
        entityId: 0,
        componentName: 'geometry',
        componentDescription: 'Геометрия',
        propertyName: 'depth',
        propertyDescription: 'Толщина',
        propertyValue: '0',
        propertyFormula: '',
        propertyType: 'number',
        attributes: 'readonly;',
        bindingToList: false
    },
    {
        id: 4,
        entityId: 0,
        componentName: 'geometry',
        componentDescription: 'Геометрия',
        propertyName: 'amount',
        propertyDescription: 'Кол-во',
        propertyValue: '0',
        propertyFormula: '',
        propertyType: 'number',
        attributes: '',
        bindingToList: false
    }
]