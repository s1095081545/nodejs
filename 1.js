for (let i = 0; i < 5; i++) {
  console.log(i);
}

const fn = num => {
  console.log(`这是：${num}`);
};
const fn1 = num => console.log(`这是：${num}`);

fn(66);
fn1(665);

const fn2 = () => {
  const name = "小明";
  const age = 21;
  return {
    name: name,
    age: age
  };
};
console.log(fn2());

const fn3 = () => ({
  name: "小白",
  age: 22
});

console.log(fn3());

const obj = {
  name: "xiaoxiao",
  gender: "女"
};
const { name: name1, gender } = obj;
console.log(name1);
console.log(gender);
// let name='重复';

const arr1 = [11, 22];
const arr2 = [33, 44];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const obj1 = {
  name: "xx",
  age: 18
};
const obj2 = {
  name: "zz",
  gender: "女"
};

const obj3 = {
  ...obj1,
  ...obj2,
  aihai:'狗狗'
}
console.log(obj3);


