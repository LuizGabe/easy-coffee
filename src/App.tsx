import React from 'react'

import { UserProvider } from './context/User'
import { HighContrastProvider } from './context/HighContrast'

import Toast from './components/atoms/Toast'

import AppRoutes from './routes/Routes'

const App = () => (
  <HighContrastProvider>
    <UserProvider>
      <Toast />
      <AppRoutes />
    </UserProvider>
  </HighContrastProvider>
)

export default App
