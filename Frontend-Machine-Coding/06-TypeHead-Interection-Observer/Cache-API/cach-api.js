function cachedAPI(expiry) {

    let cache = {};

    return async function (url) {

        if (cache[url]) {
            const cachedData = cache[url];
            cacheTime = cachedData.timestamp;
            cachedData.timestamp = new Date.getTime();
            if (new Date().getTime() - cacheTime < expiry * 100 * 60)
                return cachedData;

            else{
                try {
                    const res = await fetch(url);
                    const responseResult = await res.json();

                    cache[url] = {
                        data:responseResult,
                        timestamp:new Date.getTime(),
                    }
                } catch (err) {
                    console.log(err);
                    return err;
                }
            }
        }
    }
}