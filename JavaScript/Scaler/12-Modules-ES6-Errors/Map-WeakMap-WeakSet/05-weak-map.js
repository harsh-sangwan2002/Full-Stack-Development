let cache = new WeakMap();

function process(obj){
    if(!cache.has(obj)){
        // Prcoessing
        let futureDate = new Date()+2000;

        while(Date.now()<futureDate){
            // Do nothing
        }

        let result = Math.random();
        cache.set(obj,result);
    }

    return cache.get(obj);
}

module.exports = {
    process,cache
}