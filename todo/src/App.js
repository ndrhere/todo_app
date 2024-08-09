import './App.css';
import Todotask from './components/Todotask';
import { TaskProvider } from './components/TaskContext';

function App() {
  return (
    <div className="App">
      <TaskProvider>
      <Todotask/>
      </TaskProvider>
    </div>
  );
}

export default App;
