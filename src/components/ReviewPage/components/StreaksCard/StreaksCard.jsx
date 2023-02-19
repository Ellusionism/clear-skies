import React from 'react';
import { useSelector } from 'react-redux';

function StreaksCard() {
  const streaks = useSelector((store) => store.streaks.streaks);


  return (
    <div className="form text-center">
      <div class="card">
        <div class="card-body">
        <h6 className="card-title">Streaks</h6>
          <p class="card-text">Last reflection: {streaks.previous_reflection ? streaks.previous_reflection.substring(0, 10) : `N/A`}</p>
          <p class="card-text">Current streak: {streaks.current_streak ? streaks.current_streak : `N/A`}</p>
          <p class="card-text">Longest streak: {streaks.longest_streak ? streaks.longest_streak : `N/A`}</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h6 className="card-title">Last 7 Days</h6>
          <p class="card-text">Chart goes here</p>
        </div>
      </div>
    </div>
  );
}

export default StreaksCard;