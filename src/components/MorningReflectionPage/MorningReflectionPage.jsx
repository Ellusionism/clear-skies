import LookingForward from './components/LookingForward/LookingForward.jsx';
import GreatestChallenge from './components/GreatestChallenge/GreatestChallenge.jsx';
import ThreeTasks from './components/ThreeTasks/ThreeTasks.jsx';
import AttentionSupport from './components/AttentionSupport/AttentionSupport.jsx';
import PhysicalRating from './components/PhysicalRating/PhysicalRating.jsx';
import MentalRating from './components/MentalRating/MentalRating.jsx';
import EmotionalRating from './components/EmotionalRating/EmotionalRating.jsx';
import LoveInLifeRating from './components/LoveInLifeRating/LoveInLifeRating.jsx';

function MorningReflectionPage() {

  return (
    <form className="text-center">
      <h2 className="top-buffer">Morning Reflection</h2>

      <hr class="hr hr-blurry" />

      <LookingForward />

      <hr class="hr hr-blurry" />

      <GreatestChallenge />

      <hr class="hr hr-blurry" />

      <ThreeTasks />

      <hr class="hr hr-blurry" />

      <AttentionSupport />

      <hr class="hr hr-blurry" />

      <PhysicalRating />

      <hr class="hr hr-blurry" />

      <MentalRating />

      <hr class="hr hr-blurry" />

      <EmotionalRating />

      <hr class="hr hr-blurry" />

      <LoveInLifeRating />

      <hr class="hr hr-blurry" />

      <button type="submit" className="btn btn-primary mdb-3 top-buffer">Submit Reflection</button>
    </form>
  )
};

// const mockData = {
//   name: 'mark',
//   title: 'sex master'
// }

export default MorningReflectionPage