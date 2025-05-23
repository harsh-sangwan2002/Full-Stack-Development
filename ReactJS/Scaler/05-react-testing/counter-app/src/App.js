import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Counter />
    </div>
  );
}

export default App;
