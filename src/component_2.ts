/**
***********************************************
  План.
  1. Загрузка шаблонов компонентов с сервера.
  2. Добавление нужного комопнента в сущьность.
*/

// Для начала убедись что версия движка не ниже 1.0.36

import Engine from "yug-entity-system";
import { componentsFromServer } from "./data/serverData";



const engine = new Engine('CLIENT');

const creator = engine.creator(); // Это бывший nomenclatureCreator, старый вариант тоже работает.

// Имитируем получение шаблонов с сервера.

const gettingСomponentsFromServer = componentsFromServer; // Запрос пакета '/sample-components';

creator.loadTemplateComponents(gettingСomponentsFromServer) // Этот метод, удаляет текущие шаблоны и обновляет их на новые, с сервера. Убедись, что предыдущие были сохранены.

console.log(creator.componentNames()); // Видим, что с сервера пришел копонента [ 'geometry' ]

/** Для удобства занесем его в переменную */

const geometry = creator.getInstanceComponentToName('geometry');

/** 
 *  Создадим сущность 
 *  И попробуем два варианта добавления компонента
*/

// Вариант 1 Добавление при создании
const entity1 = creator.create('nomenclature', { signature: { name: 'Тестовая сущность1' }, components: geometry.build() });
// Вариант 2 Добавление, после создания
const entity2 = creator.create('nomenclature', { signature: { name: 'Тестовая сущность1' }});
entity2.addComponent(geometry);


// Проверяем

console.log(entity1.get());

/**
 * Видим, что компонент успешно добавился
 * {
  components: {
    geometry: {
      componentDescription: 'Геометрия',
      height: [Object],
      width: [Object],
      depth: [Object],
      amount: [Object]
    },
    serialization: { componentDescription: 'Серийный ключ', serialKey: [Object] }
  },
  signature: { name: 'Тестовая сущность1' },
  key: '630f5ed7-cccf-42aa-a61b-0fb3d6a8c662',
  parentKey: undefined
}
 */



