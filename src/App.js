import logo from './logo.svg';
import './App.css';
import FormMovie from './components/FormMovie';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
     <FormMovie/>
     <MoviesList/>
    </div>
  );
}

export default App;
