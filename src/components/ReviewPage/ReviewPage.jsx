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
    if (previousReflection === currentDate) {
      return;
    } else if (previousReflection === previousDate) {
      return;
    } else {
      dispatch({
        type: 'RESET_STREAK',
        payload: {
          id: user.id,
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
    // <>
    //   {review.map((answer, i) =>{
    //     return (
    //       <div className="card text-center top-buffer" key={i}>
    //       <div className="card-header">Reflection for {answer.date.substring(0, 10)}</div>
    //         <div className="accordion accordion-borderless" id={i}>
    //           <div className="accordion-item">
    //             <h2 className="accordion-header" id="flush-headingOneX">
    //               <button className="accordion-button" type="button" data-mdb-toggle="collapse"
    //                 data-mdb-target="#flush-collapseOneX" aria-expanded="true" aria-controls="flush-collapseOneX">
    //                 Evening Answers
    //               </button>
    //             </h2>
    //             <div id="flush-collapseOneX" className="accordion-collapse collapse show"
    //               aria-labelledby="flush-headingOneX" data-mdb-parent={i}>
    //               <div className="accordion-body">

    //                 <div className="card">
    //                   <div className="card-body">
    //                     <h6 className="card-title">{answer.date}</h6>
    //                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                   </div>
    //                 </div>

    //               </div>
    //             </div>
    //           </div>
    //           <div className="accordion-item">
    //             <h2 className="accordion-header" id={`flush-headingTwoX`}>
    //               <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
    //                 data-mdb-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX">
    //                 Morning Answers
    //               </button>
    //             </h2>
    //             <div id="flush-collapseTwoX" className="accordion-collapse collapse" aria-labelledby="flush-headingTwoX"
    //               data-mdb-parent={i}>
    //               <div className="accordion-body">

    //               <div className="card">
    //                   <div className="card-body">
    //                     <h6 className="card-title">{answer.date}</h6>
    //                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                   </div>
    //                 </div>
                    
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     )
    //   })}
    // </>
  );
}

export default ReviewPage;
