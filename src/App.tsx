import { RouterProvider } from 'react-router-dom'

import routes from '@/routes'
import { DialogProvider } from '@/context/DialogProvider'

import { ThemedToastContainer } from './components/ThemedToastContainer'

export default function App() {
  return (
    <>
      <DialogProvider>
        <RouterProvider router={routes} />
        <ThemedToastContainer />
      </DialogProvider>
    </>
  )
}
