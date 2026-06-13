import VirtualTour from '@/components/sections/VirtualTour';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import TrustBar from '@/components/sections/TrustBar';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
	return (
		<>
			<Hero />
			
			<About />

			<VirtualTour />
			
			<Services />
			
			<TrustBar />
			
			<Team />
			
			<Testimonials />
			
			<Contact />
		</>
	);
}
