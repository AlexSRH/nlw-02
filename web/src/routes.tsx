import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LandingPage from './pages/Landing'
import TeacherListPage from './pages/TeacherList'
import TeacherFormPage from './pages/TeacherForm'

function Routes () {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/study" component={TeacherListPage} />
      <Route path="/give-classes" component={TeacherFormPage} />
    </BrowserRouter>
  )
}

export default Routes
