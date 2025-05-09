import { useEffect } from 'react'
import { GetCurrentUser } from '../../calls/users'

const Home = () => {

    useEffect(() => {
        (async function () {
            try {
                const res = await GetCurrentUser();
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])

    return (
        <div>
            Home Page
        </div>
    )
}

export default Home
