import { RouterProvider } from 'react-router-dom'

import { DialogProvider } from '@/context/DialogProvider'
import routes from '@/routes'

import { ThemedToastContainer } from './components/ThemedToastContainer'

export default function App() {
  return (
    <DialogProvider>
      <RouterProvider router={routes} />
      <ThemedToastContainer />
    </DialogProvider>
  )
}
