// import logo from './logo.svg';
import User from './User'
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer';
function App() {
  return (
    <div className="App">
        {/* <h1> App Component </h1> */}
        {/* <User data={{name:'vivek tripathi', age:'26'}}/> */}
        <HeaderContainer />
        <HomeContainer />
    </div>
  );
}

export default App;
