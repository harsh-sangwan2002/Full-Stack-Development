let ReactDOM = {};
function render(component,react){
    let optimizedDOM = react(component);
    console.log("Rendering to DOM.");
    root.innerHTML = optimizedDOM;
}

ReactDOM.render = render;