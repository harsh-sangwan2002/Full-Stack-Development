import { useState } from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'antd'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function StripeIntegration() {

  const onToken = async (token) => {
    console.log("Received token", token);
    try {
      const res = await axios.post('http://localhost:3000/api/make-payment', {
        token,
        amount: 5000
      });

      if (res.data.success) {
        alert("Payment Successful! Transaction ID: " + res.data.transactionId);
      } else {
        alert("Payment failed! " + res.data.message);
      }

    } catch (err) {
      alert("Error processing payment: " + err.message);
    }
  }

  return (
    <div>
      <StripeCheckout
        token={onToken}
        billingAddress
        amount={5000}
        stripeKey='pk_test_51OFdcbSGhfLbNXF0z35zvvpr8pkrgFukrZQjRrvFvUskZ2tz9b39XEwfhg5SSAkxSyFvZYtTFuqM9fSCaG2lkMG800Oyz4gqr4'
      >
        <Button type='primary' shape='round' size='large'>
          Pay Now
        </Button>
      </StripeCheckout>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <StripeIntegration />
    </>
  )
}

export default App
