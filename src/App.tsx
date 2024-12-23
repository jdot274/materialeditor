import React from 'react';
import { MaterialEditor } from './components/MaterialEditor';
import { Preview } from './components/Preview';

function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/3 h-full border-r overflow-y-auto">
        <MaterialEditor />
      </div>
      <div className="w-2/3 h-full">
        <Preview />
      </div>
    </div>
  );
}

export default App;