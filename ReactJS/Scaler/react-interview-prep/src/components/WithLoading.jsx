import React, { useEffect, useState } from 'react'

function WithLoading(WrappedComponent) {

    return function HOC(props) {

        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000)
        }, [])

        if (loading) {
            return <h1>Loading...</h1>
        }
        
        return <WrappedComponent {...props} />
    }
}

export default WithLoading
