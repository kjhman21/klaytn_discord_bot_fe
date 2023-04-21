import { ReactElement } from 'react'
import _ from 'lodash'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer, Slide } from 'react-toastify'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'react-toastify/dist/ReactToastify.css'

import './black-dashboard-react.css'
import { RouteType } from 'types'
import routes from '../routes'

import Web3modalExample from 'views/Web3modal'

const queryClient = new QueryClient()

const getRoutes = (routes: RouteType[]): ReactElement[][] =>
  _.map(routes, (prop) =>
    _.map(prop.items, (item) => (
      <Route
        key={item.name}
        path={prop.path + item.path}
        element={<item.component />}
      />
    ))
  )

function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Web3modalExample />} />
            {getRoutes(routes)}
          </Routes>
        </div>
        <ToastContainer
          position="top-right"
          hideProgressBar
          autoClose={1000}
          transition={Slide}
          limit={3}
        />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
