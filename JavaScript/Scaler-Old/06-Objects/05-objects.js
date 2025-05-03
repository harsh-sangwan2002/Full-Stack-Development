const config = {
    appName: "scaler.com",
    database: {
        host: "127.0.0.1",
        name: "mainDb",
        user: "root",
        pwd: "admin"
    }
}

/**
 * mutation/changes we can do on object ->
 * 1. reassign -> const,
 * 2. create a prop -> object.preventExtension
 * 4. remove and create -> Object.seal
 * 3. prevent create , update , delete -> Object.freeze
 * **/

// config = 10;
// console.log(config);

// config.tempServer = "127.0.0.18";
// delete config.database.pwd;
// config.appName = "interviewbit.com";
// console.log(config);

/************* 1. Reassignment -> const -> only the address of object is freezed but not it's properties **************/

/***************************
 * new property should not  be added on the first level -> update and delete
 * -> Updation is allowed
 * -> Deletion is allowed.
 * -> Adding a new key-value pair is not allowed.

 * **************************/
// let nonExtendableObj = Object.preventExtensions(config);
// nonExtendableObj.database = Object.preventExtensions(nonExtendableObj.database);

// nonExtendableObj.appName = "asdkjh";
// nonExtendableObj.tempServer = "127.0.0.8";
// nonExtendableObj.database.newPwd = "123";

// console.log(nonExtendableObj);

/*******
 * Object.seal -> 
 * -> adding and deletion is not allowed.
 * -> updation is allowed.
 * ->  It applied at current level only
 * **/

// let notExtendableObj = Object.seal(config);
// notExtendableObj.database = Object.seal(notExtendableObj.database);

// notExtendableObj.tempServer = "127.0.0.18";
// notExtendableObj.database.newpwd = "fake";
// delete notExtendableObj.extra;
// notExtendableObj.appName = "interviewbit.com";
// // // console.log(config);
// console.log(notExtendableObj);

// /*******
//  * Object.freeze -> you cannot update/ delete / add
//  * -> Updation, adding and deletion is not allowed.
//  * ->  It applied at current level only
//  * **/

// notExtendableObj = Object.freeze(config);
// notExtendableObj.database = Object.freeze(notExtendableObj.database);

// notExtendableObj.tempServer = "127.0.0.18";
// notExtendableObj.database.newpwd = "fake";
// delete notExtendableObj.extra;
// notExtendableObj.appName = "interviewbit.com";
// // // console.log(config);
// console.log(notExtendableObj);