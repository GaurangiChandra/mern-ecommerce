// Import is used to add everything in the website at once
// including the container from react-bootstrap
// bootstrap required to made the designing easy. Bootstrap needs to be installed using npm command. 
// using container, to bring the elements in the middle 
import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap' 
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

//every item included needs to be wrapped, hence using the header , footer, container and stuff
//to wrap the elements.
const App = () => {
  return (
    <div className="App">
  
     <Router>
     <Header />
     {/* py is a bootstrap class, which provides padding on the y-axis */}
     <main className="py-3">  
       <Container>
         {/*setting route*/}
       <Route path='/' component={HomeScreen} exact /> 
       <Route path='/product/:id' component={ProductScreen} exact />
       </Container>
      </main>
     <Footer />
     </Router>

    </div>
  );
}

export default App;