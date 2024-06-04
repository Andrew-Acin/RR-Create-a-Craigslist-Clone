// Import data
import Search from './Search.js'
import Directory from './Directory.js'
import Gallery from './Gallery.js'
import Sidebar from './Sidebar.js'
import Posting from './Posting.js'
import Help from './Help.js'

// Import components
import './App.css';

function App(){
  return (
    <div>
      <Search />
      <Directory />
      <Gallery />
      <Posting />
      <Sidebar />
      <Help />
      <div className="App">
        {/* Your content will go here! */}
      </div>
    </div>
  );
}

export default App;
