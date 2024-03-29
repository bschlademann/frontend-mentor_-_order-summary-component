import "./App.css";

function App() {
  return (
    <main className="component">
      <img
        className="hero"
        src="illustration-hero.svg"
        alt="dancing person"
      />
      <div className="container">
        <h1>Order Summary</h1>
        <div className="description">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </div>

        <div className="plan-selection">
          <div className="left">
            <img src="icon-music.svg" alt="icon musical note" />
            <div className="plan-detail-container">
              <div className="plan-type">Annual Plan</div>
              <div className="plan-cost">$59.99/year</div>
            </div>
          </div>
          <div className="plan-change-button">Change</div>
        </div>

        <div className="payment-button">Proceed to Payment</div>
        <div className="cancel-button"> Cancel Order</div>
      </div>
    </main>
  );
}

export default App;
