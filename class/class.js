class Point {
    // 构造函数
    constructor(x, y) {
        this.x = x; // this为实例对象
        this.y = y;
    }

    // 方法之间不需要逗号分隔
    toString() {
        return '(' + this.x + ' , ' + this.y + ')'; 
    }
}

// const p = new Point(1,2)
// console.log(p.toString())

// console.log(typeof Point)
// console.log(Point === Point.prototype.constructor)

class Bar {
    doStuff() {
        console.log('stuff')
    }
}

// const b = new Bar()
// b.doStuff()

class B{}

// const b = new B()

// console.log(b.constructor === B.prototype.constructor)

function Square(a, b) {
    return a*b
}

function Sum(a, b) {
    return a+b
}

Object.assign(Point.prototype, {
    Square(){},
    Sum(){}
})

const p = new Point(1,2)
const p2 = new Point(10,20)

// console.log(p.Sum(1,2))
// console.log(p.Square(10, 10))
// console.log(p.toString())
// console.log(p2.toString())
// console.log(p.hasOwnProperty('x'))
// console.log(p.hasOwnProperty('y'))
// console.log(p.hasOwnProperty('toString'))
// console.log(p.__proto__.hasOwnProperty('toString'))
// console.log(Object.getPrototypeOf(p))

//  es2022 实例属性现在除了可以定义在constructor()方法里面的this上面，也可以定义在类内部的最顶层

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class NewUser {
    name = 'lili';
    age = 21;
    
}

class IncreasingCounter {
    _count = 0;
    get value() {
      console.log('Getting the current value!');
      return this._count;
    }
    increment() {
      this._count++;
    }
  }

// 取值函数（getter）和存值函数（setter）
// 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

class Course {
    constructor() {
      // ...
    }
    get prop() {
      return 'getter';
    }
    set prop(value) {
      console.log('setter: '+value);
    }
  }

//   const c = new Course()
//   c.prop = 100
//   console.log(c.prop)

// 存值函数和取值函数是设置在属性的 Descriptor 对象上的。
class CustomHTMLElement {
    constructor(element) {
      this.element = element;
    }
  
    get html() {
      return this.element.innerHTML;
    }
  
    set html(value) {
      this.element.innerHTML = value;
    }
  }
  
  var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, "html"
  );
  
//   console.log(descriptor)
//   console.log("get" in descriptor)  // true
//   console.log("set" in descriptor)  // true

// 属性表达式
// 类的属性名，可以采用表达式
let methodName = 'getArea';

class Square2 {
  constructor(length) {
    this.length = length
  }

  [methodName]() {
    console.log(111)
  }
}

// let s = new Square2()
// console.log(s.getArea())

// Class 表达式
// 与函数一样，类也可以使用表达式的形式定义。

const MyClass = class Me {
    getClassName() {
      return Me.name;
    }
  };
// 上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是Me，
// 但是Me只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用MyClass引用。
let inst = new MyClass();
console.log(inst.getClassName()) // Me
// console.log(Me.name) // ReferenceError: Me is not defined

// 上面代码表示，Me只在 Class 内部有定义。
// 如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。

const MyClass2 = class { /* ... */ };

// 采用 Class 表达式，可以写出立即执行的 Class。

let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

console.log(person.sayName()) // "张三"
// 上面代码中，person是一个立即执行的类的实例。

// 静态方法
// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

// 私有属性的正式写法
class IncreasingCounter2 {
    #count = 0;
    get value() {
      console.log('Getting the current value!');
      return this.#count;
    }
    increment() {
      this.#count++;
    }
  }
  const counter = new IncreasingCounter2()
//   console.log(counter.#counter)
//   console.log(counter.#count = 42)

class Rectangle {
    constructor(length, width) {
      console.log(new.target === Rectangle);
      this.length = length;
      this.width = width;
    }
  }
  
//   var obj = new Rectangle(3, 4); // 输出 true
//   console.log(obj)
class Square3 extends Rectangle {
    constructor(length, width) {
      super(length, width);
    }
  }
  
  var obj = new Square3(3); // 输出 false
  console.log(obj)