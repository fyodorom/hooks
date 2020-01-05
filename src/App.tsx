import React, {useReducer, FC} from 'react';
import './App.css';
import Home from './components/Home';
import { TestProvider } from './providers/testProvider';
import testReducer from './reducers/testReducer';

const initialState = {
  testItems: []
};

const App: FC = () => {

  const state = useReducer(testReducer, initialState);
  return (
    <div className="App">
      <TestProvider value={state}> 
        <Home />
      </TestProvider>
    </div>
  );
}

export default App;
