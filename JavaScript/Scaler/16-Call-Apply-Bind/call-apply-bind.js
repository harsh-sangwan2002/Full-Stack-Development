var obj = {
    name: "Aashi",
    fullName: function (prefix) {
        console.log(`${prefix} ${this.name}`);
    }
}

var obj2 = {
    name: "Purva"
}

// Ms. Aashi
obj.fullName("Ms.");

var fullName = obj.fullName;
// undefined
// fullName();

// Ms. Purva
obj.fullName.call(obj2, "Ms.");

// Ms. Purva
obj.fullName.apply(obj2, ["Ms."]);

var bindedFullName = obj.fullName.bind(obj2, "Ms.");
// Ms. Purva
bindedFullName();