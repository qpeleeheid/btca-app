import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DigitalFluency from './pages/digital-fluency';
import DigitalFluencyRules from './pages/digital-fluency/DigitalFluencyRules';
import DigitalFluencyTest from './pages/digital-fluency/DigitalFluencyTest';
import SpatialOrientation from './pages/spatial-orientation';
import SpatialOrientationRules from './pages/spatial-orientation/SpatialOrientationRules';
import SpatialOrientationTest from './pages/spatial-orientation/SpatialOrientationTest';
import NotFound from './pages/NotFound';
import WordsMemory from './pages/words-memory';
import Reasoning from './pages/reasoning';
import ErrorsDetection from './pages/errors-detection';
import FullTest from './pages/full-test';
import WordsMemoryRules from './pages/words-memory/WordsMemoryRules';
import WordsMemoryTest from './pages/words-memory/WordsMemoryTest';
import ReasoningRules from './pages/reasoning/ReasoningRules';
import ReasoningTest from './pages/reasoning/ReasoningTest';
import ErrorsDetectionRules from './pages/errors-detection/ErrorsDetectionRules';
import ErrorsDetectionTest from './pages/errors-detection/ErrorsDetectionTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/btca-app/' element={<Home />} />
        <Route path='/btca-app/digital-fluency' element={<DigitalFluency />}>
          <Route index element={<DigitalFluencyRules />} />
          <Route path='rules' element={<DigitalFluencyRules />} />
          <Route path='test' element={<DigitalFluencyTest />} />
        </Route>
        <Route
          path='/btca-app/spatial-orientation'
          element={<SpatialOrientation />}
        >
          <Route index element={<SpatialOrientationRules />} />
          <Route path='rules' element={<SpatialOrientationRules />} />
          <Route path='test' element={<SpatialOrientationTest />} />
        </Route>
        <Route path='/btca-app/words-memory' element={<WordsMemory />}>
          <Route index element={<WordsMemoryRules />} />
          <Route path='rules' element={<WordsMemoryRules />} />
          <Route path='test' element={<WordsMemoryTest />} />
        </Route>
        <Route path='/btca-app/reasoning' element={<Reasoning />}>
          <Route index element={<ReasoningRules />} />
          <Route path='rules' element={<ReasoningRules />} />
          <Route path='test' element={<ReasoningTest />} />
        </Route>
        <Route path='/btca-app/errors-detection' element={<ErrorsDetection />}>
          <Route index element={<ErrorsDetectionRules />} />
          <Route path='rules' element={<ErrorsDetectionRules />} />
          <Route path='test' element={<ErrorsDetectionTest />} />
        </Route>
        <Route path='/btca-app/full-test' element={<FullTest />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
