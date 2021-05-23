// Import is used to add everything in the website at once
// including the container from react-bootstrap
// bootstrap required to made the designing easy. Bootstrap needs to be installed using npm command. 
// using container, to bring the elements in the middle 
import React from 'react'
import {Container} from 'react-bootstrap' 
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

//every item included needs to be wrapped, hence using the header , footer, container and stuff
//to wrap the elements.
const App = () => {
  return (
    <div className="App">
     
     <>
     <Header />
     {/* py is a bootstrap class, which provides padding on the y-axis */}
     <main className="py-3">  
       <Container>
       <HomeScreen/>
       </Container>
      </main>
     <Footer />
     </>

    </div>
  );
}

export default App;
