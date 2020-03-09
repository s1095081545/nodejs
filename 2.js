const aa = 1;
const bb = 2;

const obj = {
  aa,
  bb,
  sayHi() {
    console.log(this.aa);
  }
};

obj.sayHi();

const arr = [
  {
    name: "小明",
    age: "20"
  },
  {
    name: "小哄",
    age: "21"
  },
  {
    name: "小明",
    age: "21"
  }
];

const arr1=arr.find(function(item){
    return item.name==="小明"
})

console.log('find',arr1);

const arr2=arr.findIndex(function(item){
    return item.name==="小哄"
})

console.log('findindex',arr2);

const a1 = [11, 22, 33].includes(22);
console.log(a1);

const str='C:/abc/a.txt';
const r1=str.startsWith('C:');
console.log('startsWith',r1);

const r2=str.endsWith('b.txt')
console.log('endsWith',r2);

const obj1={
    name:'xx',
    age:18
}

const keys=Object.keys(obj1);
const vals=Object.values(obj1);
console.log('获取对象的键',keys);
console.log('获取对象的值',vals);

// Set对象是es6的新对象，Set本质是构造函数
const arr3=[11,22,33,22,11,44];
const arr4=[...new Set(arr3)]
console.log('去重',arr4);



