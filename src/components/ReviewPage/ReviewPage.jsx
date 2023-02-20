import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ChartCard from './components/ChartCard/ChartCard';
import DeleteUserButton from './components/DeleteUserButton/DeleteUserButton';
import StreaksCard from './components/StreaksCard/StreaksCard';

function ReviewPage() {
  const user = useSelector((store) => store.user);
  const review = useSelector((store) => store.review.review);
  const streaks = useSelector((store) => store.streaks.streaks);

  const dispatch = useDispatch();
  const date = moment();

  const currentDate = date.format('YYYY-MM-DD');
  const previousDate = date.subtract(1, 'd').format('YYYY-MM-DD');

  useEffect(() => {
    dispatch({
      type: 'GET_DEFAULT_REVIEW',
      payload: user.id,
    });
    dispatch({
      type: 'GET_CHART_DATA',
      payload: user.id,
    })
    checkStreaks();
  }, [dispatch]);

  const checkStreaks = () => {
    const previousReflection = streaks.previous_reflection ? streaks.previous_reflection.substring(0, 10) : null;
    const longestStreak = streaks.longest_streak ? streaks.longest_streak : null;

    if (previousReflection === currentDate) {
      return;
    } else if (previousReflection === previousDate) {
      return;
    } else {
      dispatch({
        type: 'RESET_STREAK',
        payload: {
          id: user.id,
          previous_reflection: previousReflection,
          current_streak: 0,
          longest_streak: longestStreak,
        }
      })
    }
  };

  return (
    <div className="form text-center">
      <StreaksCard />
      <ChartCard />
      <DeleteUserButton />
    </div>
  );
}

export default ReviewPage;
