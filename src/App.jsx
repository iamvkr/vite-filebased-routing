import { Fragment, Suspense, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { routes, preserved } from './Routes'

function App() {
  const NF = ()=> (<>NOT FOUNR</>);
  const AppLayout = preserved?.['._app'] || Fragment;
  const NotFound = preserved?.['.404'] || NF;
  
  useEffect(() => {
    console.log(preserved);
  }, [])
  
  return (
    <AppLayout>
      <Suspense fallback={'Loading...'}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {routes.map(({ path, component: Element }, i) => (<Route key={i} path={path} element={<Element />} />))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AppLayout>
  )
}

export default App
