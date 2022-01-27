import Engine from "yug-entity-system";
import { Unit } from "yug-entity-system/dist/utils/entity-units";

/** Создаем instance класса двигателя. */
const engine = new Engine();

/** Получаем из движка конструктор номенклатуры */
const creator = engine.nomenclatureCreator();

/** Создаем новвую номенклатуру, передавая в качестве аргумента название номенклатуры */
const nomenclature = creator.newNomenclature('Новая номенклатура');

/** Собираем номенклатуру */
console.log(nomenclature.build());


/**
 * Получаем похожий на это объект. 
 * Пытаемся заполнить components - компонентами :)
 * {
  "options": {
    "entity": {
      "name": "Новая номенклатура",
      "typeId": 3
    },
    "components": {},
    "key": "936398f3-6cf9-4321-afdf-2a85c0101b2b"
  },
  "elements": []
}
 */
/** После того как определили номенклатуру, сохраняем */
creator.save();

/** переходим к созданию следующей.
 * готово.
 */

/** --------------------------------------------------------------------------------------------------------- */
/**
 * На этом оффициальная часть закончена, как хочет Даник.
 * Дальше идет пример как делать КАТЕГОРИЧЕСКИ НЕ НАДО, со слов Даника :)))
 * 
 */

/** Нормально создание номенклатуры используя всю мощь движка */

/** для удобства, можно сохранить впеременную
 * const nonenclaturaKolonna = creator.newNomenclature('Колонна');
 * nonenclaturaKolonna.setHeight(0);
 * nonenclaturaKolonna.setWidth(50)
 * ..... и тогдалее :)
 * можно не сохранять, а работать сразу с конструктора
 */

creator.newNomenclature('Колонна') // Создаем коллону
        .setHeight(0)   // Добавляем в компонент "геометрия" высоту, который автоматически создался, когда мы присвоили высоту
        .setWidth(50)   // Аналогично, для ширины, но сдесь указываем значение по умолчанию.
        .setDepth(20)   // толщина по умолчанию.
        .setPrice(2500) // присваиваем базовую цену.
        .setName('Колонная царская') // изменяем имя, если нам так хочется

creator.save(); // Сохраняем новую номенклатуру

/** Выводим на экран, то что получилось */
console.log(creator.nomenclature?.build());


/**
 * Получаем вот такой прекрасный обект.
 * {
  options: {
    entity: { name: 'Новая номенклатура', typeId: 3 },
    components: {},
    key: 'f65b9e39-4668-4b01-98f1-790025abffdf'       
  },
  elements: []
}
{
  "options": {
    "entity": {
      "name": "Колонная царская",
      "typeId": 3
    },
    "components": {
      "finishingComponent": {},
      "geometryComponent": {
        "height": 0,
        "width": 50,
        "depth": 20
      },
      "priceComponent": {
        "price": 2500
      }
    },
    "key": "e7826295-f8d6-4650-b2a0-dae1050e7832"
  },
  "elements": []
} */

/** и самый профессиональный способ 
 * 
 * Используем шаблон типичный для всех фасадов
 * 
*/
/** Создаем сам фасад глухой, на этот раз присвоим его в переменную fasadGluhoy для разнообразия. */

const fasadGluhoy = creator.newNomenclature(
    'Фасад глухой', // Указываем название фасада
    {
        sample: 'Фасад', // Указываем по какому шаблону сгенерировать объект
        unit: <any>'м. кв.' // Указываем что сущность будет измерятся в кв. метрах. (на <any> не обращай внимание, потом исправлю, забыл экспортировать константы)
    }
)

// сохраняем
creator.save();

/** Собираем и выводим на экран. тут я записал собранный обект в переменную sobranniyObject */

const sobranniyObject = fasadGluhoy.build();

console.log(JSON.stringify(sobranniyObject, null, 2));

/**
 * Получаем объект фасада
 * 
 * {
  "options": {
    "key": "0651f4ef-38c4-44ed-95e5-7741d3b14662",
    "entity": {
      "name": "Фасад глухой",
      "typeId": 3
    },
    "components": {
      "geometryComponent": {
        "height": 0,
        "width": 0,
        "depth": 21,
        "amount": 0
      },
      "priceComponent": {
        "price": 0
      },
      "finishingComponent": {
        "colorId": 0,
        "patinaId": 0,
        "varnishId": 0
      }
    }
  },
  "elements": [
    {
      "options": {
        "key": "eecfe0f1-fbbf-4e22-910e-3124774c1246",
        "entity": {
          "name": "Филёнка",
          "typeId": 3
        },
        "components": {
          "finishingComponent": {
            "colorId": 0,
            "patinaId": 0,
            "varnishId": 0
          },
          "geometryComponent": {},
          "priceComponent": {
            "price": 0
          }
        }
      },
      "elements": [
        {
          "options": {
            "key": "2ee83587-22c2-41be-9984-7c9d735c41fd",
            "entity": {
              "name": "Рубашка",
              "typeId": 3
            },
            "components": {
              "finishingComponent": {}
            }
          },
          "elements": []
        }
      ]
    }
  ]
}
 */








