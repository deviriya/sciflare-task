import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.scss'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import SideMenu from './components/sideMenu'
import { useEffect } from 'react'

function App() {

  const RouterWithLoader = () => {
    return <Outlet />
  }

  const RouterWithSidebar = () => {

    useEffect(() => {
      if (!sessionStorage.getItem('isLoagged')) window.location.href = "/"
    }, [])

    return (
      <SideMenu />
    )
  }

  const router = (createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RouterWithLoader />}>
          <Route index element={<Login />} />
        </Route>

        <Route path='/' element={<RouterWithSidebar />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Route>
    )
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App
