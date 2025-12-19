import TestimonialCard from './components/TestimonialCard';
import profileImg from './assets/profile-thumbnail.png';
import './App.css';

const testimonials = [
    {
        username: "Sarah Dole",
        handle: "@sarahdole",
        text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
        imgSrc: profileImg
    },

];

function App() {
    return (
        <div className={`min-h-screen bg-gray-200 flex flex-col items-center px-4 font-sans ${testimonials.length === 1 ? 'justify-center' : 'py-20'}`}>
            <div className={`grid gap-6 ${testimonials.length === 1 ? 'grid-cols-1 max-w-md' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mb-20'}`}>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        username={testimonial.username}
                        handle={testimonial.handle}
                        text={testimonial.text}
                        imgSrc={testimonial.imgSrc}
                    />
                ))}
            </div>

            <div className="credits text-center text-xs text-gray-500 fixed bottom-6 w-full" data-gfe-screenshot-exclude="true">
                A challenge by{' '}
                <a
                    href="https://www.greatfrontend.com/projects?ref=challenges"
                    target="_blank"
                    className="font-bold hover:underline text-inherit"
                    rel="noreferrer"
                >
                    GreatFrontEnd Projects
                </a>
                . Built by{' '}
                <a
                    href="https://www.greatfrontend.com/projects/u/femisowems"
                    target="_blank"
                    className="font-bold hover:underline text-inherit"
                    rel="noreferrer"
                >
                    Femi Sowems
                </a>
                .
            </div>
        </div>
    )
}

export default App;
