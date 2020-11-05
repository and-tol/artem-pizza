// type PizzaSize = { size: string; name: string };
// type PizzaDough = { dough: string; name: string };
// type PizzaSauce = { sauce: string,name:'string' };
// type PizzaCheese = { cheese: string,name:'string' };
// type PizzaVegetables= { vegetable: string,name:'string' };
// type PizzaMeat = { meat: string, name: 'string' };

type PizzaParams = {param: string,name:'string'}

interface AvailabelData {
  pizzaSize: PizzaParams[];
  pizzaDough: PizzaParams[];
  pizzaSauce: PizzaParams[];
  pizzaCheese: PizzaParams[];
  pizzaVegetables: PizzaParams[];
  pizzaMeat: PizzaParams[];
}

export const availabelData: AvailabelData = Object.freeze({
         pizzaSize: [
           { param: '30', name: 'size30' },
           { param: '35', name: 'size35' },
         ],
         pizzaDough: [
           { param: 'Тонкое', name: 'thinDough' },
           { param: 'Пышное', name: 'puffyDough' },
         ],
         pizzaSauce: [
           { param: 'Томатный', name:'tomatoSauce'},
           { param: 'Белый', name:'whiteSauce'},
           { param: 'Острый', name:'spicySauce'},
         ],
         pizzaCheese: [
           { param: 'Моцарелла', name:'Cheese'},
           { param: 'Чеддер', name:'Cheese'},
           { param: 'Дор Блю', name:'Cheese'},
         ],
         pizzaVegetables: [
           { param: 'помидор', name:'tomatoVegetable'},
           { param: 'грибы', name:'mushroomVegetable'},
           { param: 'перец', name:'peperVegetable'},
         ],
         pizzaMeat: [
           { param: 'бекон', name:'baconMeat'},
           { param: 'пепперони', name:'pepperoniMeat'},
           { param: 'бекон', name:'hamMeat'},
         ],
       });
