// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { AboutPage } from './pages/about'
import { ResumePage } from './pages/resume'
import { PortfolioPage } from './pages/portfolio'
import { ContactsPage } from './pages/contacts'
import { Layout } from './components/layout'
import { BlogPage } from './pages/blog'
import { BlogItemPage } from './pages/blog/item'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            index
            element={<ResumePage/>}/>
          <Route
            path="/about"
            element={<AboutPage />} />
          <Route
            path="/portfolio"
            element={<PortfolioPage />} />
          <Route
            path="/contacts"
            element={<ContactsPage />} />
          <Route
            path='/blog'
            element={<BlogPage />}
          />
          <Route
            path='/blog/:id'
            element={<BlogItemPage/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
