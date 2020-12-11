var obj1 = {
    var_one: "ReactJS",
    var_two: "NodeJS",
    var_three: "MongoDB"
};
console.log(obj1.var_one, obj1.var_two, obj1.var_three);
var obj2 = {
    var_one: "Angular11",
    var_two: "Deno",
    var_three: "Cassandra"
};
console.log(obj2.var_one, obj2.var_two, obj2.var_three);
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello1";
        this.var_two = "Hello2";
        this.var_three = "Hello3";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.var_one, obj.var_two, obj.var_three);
/*
interface interface1 {
    wish: string;
    getWish(): string;
}

let obj1: interface1 = {
    wish: "Hello",
    getWish: (): string => {
        return obj1.wish;
    }
}
console.log(obj1.wish, obj1.getWish()); //Hello Hello

*/
/*
//Single Level Inheritance

interface interface1 {
    var1: any;
}

interface interface2 extends interface1 {
    var2: any
}

let obj: interface2 = {
    var1: "Hello1",
    var2: "Hello2"
}
console.log(obj.var1, obj.var2); //Hello1 Hello2
*/
/*
//multilevel inheritance
interface Parent {
    var1: string;
    getVar1(): string;
}
interface Child extends Parent {
    var2: string;
    getVar2(): string
}
interface SubChild extends Child {
    var3: string;
    getVar3(): string;
}

class class_one implements SubChild {
    var1: string = "Hello1";
    var2: string = "Hello2";
    var3: string = "Hello3"
    getVar1(): string {
        return this.var1;
    }
    getVar2(): string {
        return this.var2;
    }
    getVar3(): string {
        return this.var3;
    };
};

let obj: class_one = new class_one();
console.log(obj.getVar1(), obj.getVar2(), obj.getVar3()); //Hello1 Hello2 Hello3
*/
/*
//multiple inheritance
interface interface1 {
    var_one: any
}
interface interface2 {
    var_one: any
}
interface interface3 extends interface1, interface2 {
    var_one: any
}

let obj: interface3 = {
    var_one: "Hello"
};
console.log(obj.var_one); //Hello

*/
/*
//hirarichal inheritance
interface interface1 {
    var_one: any
}
interface interface2 extends interface1 {
    var_one: any
}
interface interface3 extends interface1 {
    var_two: any
}
class class_one implements interface2 {
    var_one: any = "hello1"
}
class class_two implements interface3 {
    var_one: any = "Hello_1";
    var_two: any = "Hello_2";
}
console.log(new class_one().var_one); //hello1
let obj: class_two = new class_two();
console.log(obj.var_one, obj.var_two); //Hello_1 Hello_2
* /

/*
interface interface1 {
    fun_one(): any
}
interface interface2 extends interface1 {
    fun_one(): any
}
interface interface3 extends interface1 {
    fun_one(): any
}
interface interface4 extends interface2, interface3 {
    fun_one(): any
}
let obj: interface4 = {
    fun_one: (): any => {
        return "Hello"
    }
};
console.log(obj.fun_one()); //Hello
*/ 
