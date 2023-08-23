import "./App.css";

function App() {
  return (
    <div className="container">
      <img src="src/assets/illustration-hero.svg" alt="dancing person" />
      <p>Order Summary</p>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <p className="plan-selection">
        <img src="src/assets/icon-music.svg" alt="icon musical note" />
        Annual Plan
        <div>$59.99/year</div>
        <div>Change</div>
      </p>
      <div className="payment-button">Proceed to Payment</div>
      <div> Cancel Order</div>
    </div>
  );
}

export default App;
