import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Table from './TableComponent/App.jsx'
import Form from './FormComponent/App.jsx'
import Date from './DatePicker/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<h2>You can navigate to /table, /date, /form</h2>} />
        <Route path='/table' element={<Table />} />
        <Route path='/form' element={<Form />} />
        <Route path='/date' element={<Date />} />
      </Routes>
    </Router>
  </StrictMode>,
)
