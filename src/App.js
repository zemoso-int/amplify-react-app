import logo from './logo.svg';
import './App.css';
import { Alert, useBreakpointValue } from '@aws-amplify/ui-react';
import { Organismscard1, Organismsfilter, Organismsheader, Organismssearchbar1, Organismssearchbar2,Organismssearchbar, TextFieldEditProfile} from './ui-components'
import Moleculesinputfieldtest from './ui-components/Moleculesinputfieldtest';
import Organismssidemenu from './ui-components/Organismssidemenu';
import Moleculessidemenuwbg from './ui-components/Moleculessidemenuwbg';

function App() {
  //  const variation = useBreakpointValue(['info', 'warning', 'error', 'success']);
  const varSearchBar = useBreakpointValue({
    small: 'small',
    medium: 'medium',
  });
  return (
    <div className="App">
      {/* <Alert variation={variation}>Responsive Alert</Alert>; */}
      <Organismscard1/>
       {/* <Organismsheader/> */}
       {/* { <Organismssearchbar1 variation={variation}/> } */}
       { <Organismssearchbar variation={varSearchBar}/> }

      <Organismsfilter/>
      <Moleculesinputfieldtest/>  

      {/*<Moleculessidemenuwbg/>
      { <TextFieldEditProfile/> }
      {/* <Organismssidemenu/> */}
    </div>
  );
}

export default App;
