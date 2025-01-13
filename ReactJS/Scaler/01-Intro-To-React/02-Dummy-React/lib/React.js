function react(component){
    // calling the function
    let dom = component();
    console.log("......optimizing changes");
    return dom;
}