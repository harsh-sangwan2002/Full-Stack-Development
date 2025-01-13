import { useState } from 'react'

import UseEffect from './useEffect/UseEffect'
import UseMemo from './useMemo/UseMemo'
import UseCallback from './useCallBack/useCallback'
import Dasboard from './useContext/Dasboard'

import './index.css'
import { DashboardContext } from './useContext/UseContext'
import UseRef from './useRef/UseRef'
import UseRef2 from './useRef/UseRef2'

function App() {

  const [user] = useState({
    isSubscribed: true,
    name: 'You'
  })

  return (
    <div>
      {/* <UseEffect /> */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
      {/* <DashboardContext.Provider value={user}>
        <Dasboard />
      </DashboardContext.Provider> */}
      {/* <UseRef /> */}
      <UseRef2 />
    </div>
  )
}

export default App
