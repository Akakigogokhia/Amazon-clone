import './Css/App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Navigate }
from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from "react"
import { auth } from './firebase'
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders';

const promise = loadStripe('pk_test_51LQ5zsJHvOn16ft9gEZtT48MZwBiOqLSfz44loZ2OOMXd7X9N8YsZ1KmAPDjIByYt9idbovBGmRjeA0KiISyp7GX00NzlUeQTI');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
      }
    })
  }, [])
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/orders" element={[<Header />, <Orders />]}/>
        <Route path="/" element={[<Header />, <Home />]}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/checkout' element={[<Header />, <Checkout />]}/>
        <Route
          path="*"
          element={
            <Navigate to="/" />
           } />
        <Route path='/payment' element={[<Header />, <Elements stripe={promise}> <Payment /> </Elements>]}/>
      </Routes>
    </div>
    </Router>
  );
  
}

export default App;
