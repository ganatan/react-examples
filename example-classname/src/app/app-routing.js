import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './modules/home/home';
import Notfound from './modules/not-found/not-found';

const About = React.lazy(() => import('./modules/about/about'));

const Example01 = React.lazy(() => import('./modules/example01/example'));

class AppRouting extends React.Component {

  render() {
    return (
      <Routes>
        <Route index element={<Home />} />

        <Route path="about/*" element={<Suspense fallback={<>...</>}><About /></Suspense>} />
        <Route path="example01/*" element={<Suspense fallback={<>...</>}><Example01 /></Suspense>} />

        <Route path="*" element={<Notfound />} />

      </Routes>
    )
  }

}

export default AppRouting;