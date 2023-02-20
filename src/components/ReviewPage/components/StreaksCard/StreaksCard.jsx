import React from 'react';
import { useSelector } from 'react-redux';

function StreaksCard() {
  const streaks = useSelector((store) => store.streaks.streaks);

  return (
    <div className="form text-center">
      <div className="card">
        <div className="card-body">
        <h6 className="card-title">Streaks</h6>
          <p className="card-text">Last reflection: {streaks.previous_reflection ? streaks.previous_reflection.substring(0, 10) : `N/A`}</p>
          <p className="card-text">Current streak: {streaks.current_streak}</p>
          <p className="card-text">Longest streak: {streaks.longest_streak}</p>
        </div>
      </div>
    </div>
  );
}

export default StreaksCard;