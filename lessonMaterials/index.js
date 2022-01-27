const developer = {
  name: 'Maxim',
  job: 'Frontend',
  experience: 24,
  jobAllInfo: {
    type: 'Front',
    framework: 'React JS',
   }
};

console.log('type', developer.jobAllInfo.type);
console.log('framework', developer['jobAllInfo']['framework']);

//Добавление, изменение, удаление

const student = {
  id: 1,
  programmingLanguage: 'js',
  hasExperienceInReact: false,
}

//Добавление
student.experience = 6;

//Удаление
delete student.hasExperienceInReact;

//Изменение
student.experience = 12;


//Перебор объектов

const goodInfo = {
  id: 1,
  price: 80,
  currency: '$',
  name: 'shoes'
}

//for in для перебора объектов
for (const key in goodInfo) {
  console.log('key = ', key);
  const value = goodInfo[key];
}

// Object.keys создает массив из ключей
const keys = Object.keys(goodInfo);
console.log(keys);
// Object.keys создает массив из значений
const values = Object.values(goodInfo);
console.log(values);

//Object.entries
const entries = Object.entries(goodInfo);
console.log(entries);

//Ключи объекта

const id = Symbol('id');
const user = {
  [id]: 1,
  name: 'Maxim',
}
console.log(user[id]);

//in проверяет существует ли ключ в объекте

console.log('name' in user); //true
console.log(id in user);

//Объединение объектов

const developerInfo = {
  age: 25,
  experience: 3,
};

const developerExtraInfo = {
  height: 180,
  isJunior: false,
};

const  developer = {
  ...developerInfo,
  ...developerExtraInfo,
  name: 'Nastya',
};

const developer2 = Object.assign(developerInfo, developerExtraInfo);