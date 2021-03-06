import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DigitalFluency from './pages/digital-fluency';
import DigitalFluencyExample from './pages/digital-fluency/DigitalFluencyExample';
import DigitalFluencyTest from './pages/digital-fluency/DigitalFluencyTest';
import SpatialOrientation from './pages/spatial-orientation';
import SpatialOrientationExample from './pages/spatial-orientation/SpatialOrientationExample';
import SpatialOrientationTest from './pages/spatial-orientation/SpatialOrientationTest';
import NotFound from './pages/NotFound';
import WordsMemory from './pages/words-memory';
import Reasoning from './pages/reasoning';
import ErrorsDetection from './pages/errors-detection';
import FullTest from './pages/full-test';
import WordsMemoryExample from './pages/words-memory/WordsMemoryExample';
import WordsMemoryTest from './pages/words-memory/WordsMemoryTest';
import ReasoningRules from './pages/reasoning/ReasoningRules';
import ReasoningTest from './pages/reasoning/ReasoningTest';
import ErrorsDetectionRules from './pages/errors-detection/ErrorsDetectionRules';
import ErrorsDetectionTest from './pages/errors-detection/ErrorsDetectionTest';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* DIGITAL FLUENCY TEST ROUTES */}
        <Route path='/digital-fluency' element={<DigitalFluency />} />
        <Route
          path='/digital-fluency/example'
          element={<DigitalFluencyExample />}
        />
        <Route path='/digital-fluency/test' element={<DigitalFluencyTest />} />
        {/* SPATIAL ORIENTATION TEST ROUTES */}
        <Route path='/spatial-orientation' element={<SpatialOrientation />} />
        <Route
          path='/spatial-orientation/rules'
          element={<SpatialOrientationExample />}
        />
        <Route
          path='/spatial-orientation/test'
          element={<SpatialOrientationTest />}
        />

        {/* WORDS MEMORY TEST ROUTES */}
        <Route path='/words-memory' element={<WordsMemory />} />
        <Route path='/words-memory/example' element={<WordsMemoryExample />} />
        <Route path='/words-memory/test' element={<WordsMemoryTest />} />
        {/* REASONING TEST ROUTES */}
        <Route path='/reasoning' element={<Reasoning />}>
          <Route index element={<ReasoningRules />} />
          <Route path='rules' element={<ReasoningRules />} />
          <Route path='test' element={<ReasoningTest />} />
        </Route>
        {/* ERRORS DETECTION TEST ROUTES */}
        <Route path='/errors-detection' element={<ErrorsDetection />}>
          <Route index element={<ErrorsDetectionRules />} />
          <Route path='rules' element={<ErrorsDetectionRules />} />
          <Route path='test' element={<ErrorsDetectionTest />} />
        </Route>
        <Route path='/full-test' element={<FullTest />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
