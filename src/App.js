import React from 'react';
import EmojiContainer from './containers/EmojiContainer';
import SidebarNav from './containers/SidebarNav'

function App() {
  return (
    <div className="App">
      <SidebarNav />
      <EmojiContainer />
    </div>
  );
}

export default App;
