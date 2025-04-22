import Image from 'next/image'
import Hero from './components/Hero';
import MissionCards from './components/MissionCards';
import SeccionMisionVision from './components/SeccionMisionVision';
import SermonComponents from './components/SermonComponents';
import EventComponent  from './components/EventComponent';
import ContactComponent  from './components/ContactComponent';


export default function Home() {
  return (
    <main className="flex flex-col  w-full">
      <Hero />
      <MissionCards />
      <SeccionMisionVision />
      <SermonComponents />
      <EventComponent />
      <ContactComponent />

      
    </main>
  );
}
