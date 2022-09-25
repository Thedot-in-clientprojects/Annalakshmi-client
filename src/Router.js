import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Coming from './screens/Coming';



function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Coming />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Router