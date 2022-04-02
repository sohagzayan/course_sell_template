import Header from './components/Header/Header';
import { GetDataContext } from './context/GetDataContext';
import RoutesAll from './RoutesAll/RoutesAll';

function App() {
  return (
    <GetDataContext>
      <div>
            <Header />
            <RoutesAll />
      </div>
    </GetDataContext>
  );
}

export default App;
