// 1st Statement-> I am able to acces a even before initialization
console.log(a);

// undefined
var a;
console.log("Value of a: ", a);
a = 10;
console.log("Value of a: ", a);
a = "abc";
console.log("Value of a: ", a);
a = "abcdef";
console.log("Value of a: ", a);
a = 10.234;
console.log("Value of a: ", a);
a = true;
console.log("Value of a: ",a);

// 2nd Statement-> There is no difference b/w single quote('') and double quotes("").
var age =  25;
var name = 'Steve';
var c = "Hi, my name is "+name+" and I am "+age+" years old.";
console.log(c);

// It will create a single line statement
var d = `Hi ${age}`+
        ` hello`;
console.log("Value of d:",d);

// 3rd Statment-> Use template string to store multi-line strings 
var s3 = `Hello! my name is ${name}
and I am ${age} years old.`;
console.log("Value of s3: ",s3);

// 4th Statement-> undefined is a data-type
var e;
console.log("typeof a where the content is: "+e+" => "+typeof e);
e = 10;
console.log("typeof a where the content is: "+e+" => "+typeof e);
e = 10.1235656;
console.log("typeof a where the content is: "+e+" => "+typeof e);
e = "abc";
console.log("typeof a where the content is: "+e+" => "+typeof e);
e = "a";
console.log("typeof a where the content is: "+e+" => "+typeof e);
e = true;
console.log("typeof a where the content is: "+e+" => "+typeof e);
e = null;
console.log("typeof a where the content is: "+e+" => "+typeof e);
e = 1236757621536725n;
console.log("typeof a where the content is: "+e+" => "+typeof e);
e = Symbol("foo");
console.log("typeof a where the content is: ",e," => ",typeof e);

// 5th Statement-> In JS number is treated as a 64-bit floating point number
var f = 5/2;
console.log("typeof a where the content is: "+f+" => "+typeof f);

// 6th Statement-> 
var g = [10,20.5,"g",'def',true,false,[1,[2,3],4]];
console.log("typeof a where the content is: ",g," => "+typeof g);
console.log("typeof g: ",Array.isArray(g));

// 7th Statement-> typeof null is "object"
console.log("typeof null: ",typeof null);