import React, { createContext, useState } from 'react'

export const QueryContext = createContext({ cache: {}, setCache: () => {} })

export default function QueryClientProvider({ children }) {
  const [cache, setCache] = useState({})

  return (
    <QueryContext.Provider value={{ cache, setCache }}>{ children }</QueryContext.Provider>
  )
}
