import './App.css';
// import PostList from './components/PostList';
// import GrandParent from './components/GrandParent';
// import { UserProvider } from './components/userContext';
import DomoForm from "./components/DemoForm"

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <GrandParent />
      </UserProvider> */}
      <DomoForm/>
      
    </div>
  );
}

export default App;
