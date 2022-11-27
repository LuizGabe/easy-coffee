import React from 'react'

import { UserProvider } from './context/User'
import { ColorProvider } from './context/Color'

import Toast from './components/atoms/Toast'

import AppRoutes from './routes/Routes'

const App = () => (
  <ColorProvider>
    <UserProvider>
      <Toast />
      <AppRoutes />
    </UserProvider>
  </ColorProvider>
)

export default App
