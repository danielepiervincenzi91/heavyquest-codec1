function App() {
  return (
    <>
      <header className="codec-header">
        HEAVYQUEST
      </header>

      <div className="codec-wrapper">
        <div className="codec-frame">

          <h2 className="codec-title">
            WEEKLY STATUS REPORT
          </h2>

          <div className="codec-grid">

            <div className="stat-card">
              <div className="stat-label">AVG BODYWEIGHT</div>
              <div className="stat-value">82.4 kg</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">DELTA</div>
              <div className="stat-value">-0.3 kg</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">TRAINING SESSIONS</div>
              <div className="stat-value">3</div>
            </div>

          </div>

          <div className="codec-status">
            Performance Monitor v1.0
          </div>

        </div>
      </div>
    </>
  );
}

export default App;