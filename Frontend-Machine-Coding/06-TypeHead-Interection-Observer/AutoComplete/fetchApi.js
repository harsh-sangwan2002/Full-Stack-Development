/** Make HTTP request from browser -> It is an promise based API */

/***
 * Fetch API request.
 * Get request -> response object.
 * response = header(metadata) + body(actual data)
 * extract actual -> call promsie.json() and
 * this fn os also promise based.
 * this route should be public, and dosesn;t required any authentication.
 */

async function getCountries(keyword) {
    try {
        const data = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);

        if (data.status == 404) {
            console.log('Page not found!!');
            return [];
        }

        else if (data.status == 500) {
            console.log('Internal Server Error!!');
            return [];
        }

        return await data.json();
    } catch (err) {
        console.log(err);
    }
}

export default getCountries;