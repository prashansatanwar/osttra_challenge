import logo from './logo.svg';
import './App.css';
import LoginScreen from './components/LoginScreen';
import DamlLedger from '@daml/react';

function App() {
  
  return (
    <DamlLedger
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJzYW5kYm94IiwiYXBwbGljYXRpb25JZCI6IkhUVFAtSlNPTi1BUEktR2F0ZXdheSIsImFjdEFzIjpbIkFsaWNlIl19fQ.FIjS4ao9yu1XYnv1ZL3t7ooPNIyQYAHY3pmzej4EMCM"
      party='Alice'
    >
      <div className="App">
        <LoginScreen/>

      </div>
    </DamlLedger>
  );
}

export default App;
