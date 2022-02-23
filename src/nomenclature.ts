import Engine, { EntityType, IGetable } from "yug-entity-system";
import Entity from "yug-entity-system/dist/Models/entities/Entity";

/**
 * Очень серозная документация.
 * Часть вторая, создание сущности.
***********************************************
*/
/** Создаем instance класса двигателя. Тут ничего не изменилось
 * Создавать таким образом движок, можно в любом месте приложения, он все равно будет хранить 
 * все изменения и данные.
*/

const engine = new Engine();

/**
 * Добавлен новый тип ошибки - on-entity-error
 * В качетве аргументов для слушателя, передается сущность, в которой случилась ошибка и объект ошибки
 */

Engine.on('on-entity-error', ({ entity, err }) => {
  /** Выводим в консоль все проблемы с сущностью */
  console.log(`Хьюстон, у нас проблемы с "${entity.getName()}"`, err.message);
})

const creator = engine.nomenclatureCreator(); // Как и в прошлой версии, надо создать креатор.


/**
 * сымитируем ситуацию, когда у нас уже есть созданные ранее комопненты, записанные в бд или локально
 * из первого примера.
 * покажу немного другой подход создания компонента и его свойств.
 */
creator.create('component', 'geometry')
  .setComponentDescription('Геометрия')
  .addProperty({ propertyName: 'height', propertyType: 'number', propertyDescription: 'Высота', propertyValue: '0' })
  .addProperty({ propertyName: 'width', propertyType: 'number', propertyDescription: 'Ширина', propertyValue: '0' })
  .addProperty({ propertyName: 'depth', propertyType: 'number', propertyDescription: 'Толщина', propertyValue: '0', attributes: 'readonly;' })
  .addProperty({ propertyName: 'amount', propertyType: 'number', propertyDescription: 'Кол-во', propertyValue: '0' })
  .SaveAsTemplate() // сохраняем полученый компонент.

/***************************************************************************************************** */

/**
 * Теперь что бы создать новую сущность - номенклатуру, надо передать в качестве аргумента 'nomenclature'
 * В а вторым аргуменом - объект, который обязательно должен содержать обект сигнатуры.
 * Сигнатру можно оставить пустой, или как в данном случае, передать имя сущности
 * Автокомплит должен подсказать правильность набора
 * По умолчанию, тип создаваемого объекта PRODUCT, можно не указывать, если создам номенклатуру
 */

const firstNomenclature = creator.create('nomenclature', {
  // signature - обязательный объект для сущности
  signature: {
    name: 'Фасад глухой',
  }
});

/** 
 * мы создали новую сущность, которая уже имеет все шансы на существование
 * по умолчанию, все сущности содержат стартовый компонент сериализацию. Его можно увидеть вызвав метод
 */

firstNomenclature.getComponents();

/**
 * Который вернет ма следующий обект
 * {
  serialization: {
    componentDescription: 'Серийный ключ',
    serialKey: {
      id: 0,
      entityId: 0,
      propertyDescription: 'Creator: CLIENT',
      propertyValue: '8379e914-fe2b-4f60-8234-93c0bb32740c',
      propertyType: 'string',
      propertyFormula: '',
      attributes: 'readonly;',
      bindingToList: false
    }
  }
}
 */

/**
 * Далее, мы хотим добавить в сущьность, ранее созданные комопненты. Есть несколько спомобов сделать это. 
 * Покажу на мой взгляд, самый удобный.
 * Метод addComponent принимает инстанс класса Компонент, без дополнительных преобразований
 * 
 */
firstNomenclature.addComponent(creator.getInstanceComponentToName('geometry'));

/**
 * Теперь мы имеем номенклатуру, с компонентом геометрия.
 * Давай добвим в фасад филёнку
 * Традиционно, есть несколько способов. Покажу один, самый простой.
 * метод produce не только добавит в нашу номннклатуру дочерний объект, но и передаст ей значения своих копонентов, 
 * но только в том случае, если они заданы (если такие есть) мы передадим пустой объект
 * Сразу присвом новй объект в отдельную переменную (по желанию)
 */

const secondNomenclature =  firstNomenclature.produce({
  signature: {
    name: 'Филёнка',
  },
})

/** Добавим в нее комопонент отделки, не отходя от кассы */
secondNomenclature.addComponent(creator.create('component', 'finishing').addProperty({propertyName: 'color', propertyType: 'string'}))

/**
 * Можно собрать объект и отправить на сервер
 */


