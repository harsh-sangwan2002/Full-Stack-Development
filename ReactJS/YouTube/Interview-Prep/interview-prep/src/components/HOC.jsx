import React from 'react'

const styles = {
    dark: {
        background: 'black',
        color: 'white'
    },
    light: {
        background: 'white',
        color: 'black'
    }
}
function HOC(WrappedComponent) {
    return function (args) {

        let temp = {}
        if (args.dark)
            temp = styles.dark

        let obj = { ...args, style: temp };
        return <WrappedComponent {...obj} />
    }
}

export default HOC
