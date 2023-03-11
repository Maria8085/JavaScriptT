Number = 30,
BigInt
String = ''.length
Boolean
null
undefined
Symbol

object0 = {
    id: '0',
    name: 'User',
    description: null,
    body_template: undefined,
    city: null,
    avatar: null,
    vacancies_count: 0,
    is_relocation: false,
    salary: undefined,
}
 
object1 = {
    id: '1',
    name: 'Женя',
    description: 'Хочу стать разработчиком ...',
    body_template: '<span>🌟</span>',
    city: 'Ульяновск',
    avatar: 'https://www.imagensempng.com.br/wp-content/uploads/2021/08/Icone-usuario-Png.png',
    vacancies_count: 13,
    is_relocation: true,
    salary: 9007199254740991n,
}
// 2) Приведение типа id со строки к числу
// 3) проверить salary на коректное число (не NaN и не Infinite)
// 4) String Number Boolean различные варианты приведения

function showObject(obj){
    // obj.id = id;
    // obj.name = username;
    // obj.description = description;
    // obj.body_template = body_template;
    for (key in obj){
        obj.key = key
    }
    result = `<div id=${id}>
        <div><span>Имя:</span><span>${username}</span</div>
        <div><span>Обо мне:</span><span>${description}</span></div>
        <div><span>Описание:</span><span>${body_template}</span></div>
        <div><span>Город:</span><span>${city}</span></div>
        
        <div><img src="" alt="" /></div>
        <div><span>Количество вакансий у пользователя:</span><span></span></div>
        <div><span>Готов к релокации:</span><span></span></div>
        <div><span>Зарпла:</span><span></span></div>
    </div>`
    return console.log(result);
}