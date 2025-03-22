import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const WatchListContext = createContext()

const WatchListProvider = ({ children }) => {

    const [watchlist, setWatchlist] = useState({})

    return (
        <WatchListContext.Provider value={{ watchlist, setWatchlist }}>
            {children}
        </WatchListContext.Provider>
    )
}

export default WatchListProvider
