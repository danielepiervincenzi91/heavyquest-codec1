function DailyLog() {
    return (
      <div className="codec-wrapper">
        <div className="codec-frame">
          <h2 className="codec-title">
            DAILY LOG
          </h2>
  
          <div className="stat-card">
            <div className="stat-label">BODYWEIGHT</div>
            <input className="codec-input" type="number" />
          </div>
  
          <div className="stat-card">
            <div className="stat-label">CALORIES</div>
            <input className="codec-input" type="number" />
          </div>
  
          <div className="stat-card">
            <div className="stat-label">TRAINING</div>
            <input className="codec-input" type="text" />
          </div>
        </div>
      </div>
    );
  }
  
  export default DailyLog;