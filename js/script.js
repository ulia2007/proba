//const obj = new Object(); так задают обьекты, но никто так не делает

const options = { //создали обьет с свойствами
    name: 'test',
    with: 1024,
    height: 1024,
    colors: { //одно из свойст обьета являеться также обьектом
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test') //функция записаная в свойствах обьекта называеться метод
    }
}

options.makeTest();

const {border, bg} = options.colors;//деструктуризация, вытащили свойства со свойст обьекта, который был сам обьектом
console.log(border);

console.log(options.colors); //вывели свойство обьекта
console.log(options['colors']['border']);//обратились к свойству, которе само обьект, и конкретно к свойству обьекта, который есть свойством у родительского обьекта
delete options.name; //удалили свойство с обьекта

console.log(options);

let counter = 0;//так можно задать счетчик
for (let key in options){ //способ перебора for in
    if(typeof(options[key]) === 'object' ) {
        for (let i in options[key]){
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    }else{
        console.log(`Свойства ${key} имеет знгачение ${options[key]}`);
        counter++;
    }
    
} //перебирали обьекты, и показывали их свойства
console.log(counter);

console.log(Object.keys(options).length);//Object.keys- встроеная функция,подсчитать количество свойств у обьекта
