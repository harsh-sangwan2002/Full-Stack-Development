import { useEffect, useState } from 'react'

const WithLoading = (WrappedComponent) => {

    return function (props) {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000)
        }, [])

        if (loading) {
            return <div>Loading...</div>
        }

        else {
            return <WrappedComponent {...props} />
        }
    }
}

export default WithLoading
