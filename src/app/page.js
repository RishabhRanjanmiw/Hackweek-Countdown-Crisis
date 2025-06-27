import CommunityInfo from './components/CommunityInfo';
import Countdown from './components/Countdown';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>HackWeek Countdown</h1>
      <CommunityInfo />
      <Countdown />
    </main>
  );
}


