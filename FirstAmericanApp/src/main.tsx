import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.tsx'
import Documentation from './components/Documentation.tsx'
import {createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path = '/' element = {<Layout/>}>
<Route path = 'documentation' element = {<Documentation/>}/>
</Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
