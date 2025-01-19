import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  CheckCircle2, 
  Trophy, 
  Users, 
  BookOpen,
  Github
} from 'lucide-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import TasksPage from './components/TasksPage';
import LeaderboardPage from './components/LeaderboardPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasParticipated, setHasParticipated] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleParticipate = () => {
    setHasParticipated(true);
    setTimeout(() => {
      alert("You've successfully joined HelpOps Quest!");
    }, 300);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="relative h-screen flex items-center justify-center" 
                      style={{
                        backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url("https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}>
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    Welcome to HelpOps Quest
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
                    16 Days. 16 Tasks. Learn, Grow, and Win!
                  </p>
                  <button
                    onClick={handleParticipate}
                    className={`px-8 py-4 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 ${
                      hasParticipated 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-orange-500 hover:bg-orange-600'
                    }`}
                  >
                    {hasParticipated ? (
                      <span className="flex items-center">
                        Participated <CheckCircle2 className="ml-2 h-5 w-5" />
                      </span>
                    ) : (
                      'Participate Now'
                    )}
                  </button>
                </div>
                <div className="absolute bottom-8 animate-bounce">
                  <ChevronDown className="h-8 w-8 text-white" />
                </div>
              </section>

              {/* About Section */}
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                      What is HelpOps Quest?
                    </h2>
                    <p className="text-xl text-gray-600">
                      An exciting 16-day DevOps challenge for everyone!
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        HelpOps Quest is a practical DevOps challenge where participants complete daily tasks
                        and earn badges and certificates for milestones. Whether you're a beginner or an
                        experienced professional, our platform provides the resources and guidance you need
                        to succeed in your DevOps journey.
                      </p>
                      <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-100">
                        <p className="text-orange-800 font-semibold">
                          Powered by HelpOps-Hub: The go-to platform for DevOps professionals.
                        </p>
                      </div>
                    </div>
                    <div className="relative h-96">
                      <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                        alt="Team collaboration"
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* How It Works Section */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
                    How Does HelpOps Quest Work?
                  </h2>
                  <div className="grid md:grid-cols-4 gap-8">
                    {[
                      {
                        title: 'Sign Up',
                        icon: <Users className="h-12 w-12 text-orange-500" />,
                        description: 'Create your account and click "Participate Now"'
                      },
                      {
                        title: 'Complete Tasks',
                        icon: <BookOpen className="h-12 w-12 text-orange-500" />,
                        description: 'Work on daily DevOps challenges'
                      },
                      {
                        title: 'Submit Work',
                        icon: <CheckCircle2 className="h-12 w-12 text-orange-500" />,
                        description: 'Share your progress with proof of completion'
                      },
                      {
                        title: 'Earn Rewards',
                        icon: <Trophy className="h-12 w-12 text-orange-500" />,
                        description: 'Get badges and certificates for your achievements'
                      }
                    ].map((step, index) => (
                      <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex justify-center mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
                    Why Join HelpOps Quest?
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        title: 'Recognition',
                        description: 'Earn badges and certificates to showcase on LinkedIn'
                      },
                      {
                        title: 'Practical Learning',
                        description: 'Get hands-on experience with real-world DevOps tasks'
                      },
                      {
                        title: 'Guidance',
                        description: 'Access comprehensive learning resources and support'
                      },
                      {
                        title: 'Community',
                        description: 'Connect with fellow DevOps enthusiasts'
                      }
                    ].map((feature, index) => (
                      <div key={index} className="p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-20 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Join the Quest?</h2>
                  <button
                    onClick={handleParticipate}
                    className={`px-8 py-4 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 ${
                      hasParticipated 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-orange-500 hover:bg-orange-600'
                    }`}
                  >
                    {hasParticipated ? (
                      <span className="flex items-center justify-center">
                        Participated <CheckCircle2 className="ml-2 h-5 w-5" />
                      </span>
                    ) : (
                      'Participate Now'
                    )}
                  </button>
                  <p className="mt-4 text-blue-200">
                    Powered by HelpOps-Hub – Empowering DevOps Learning and Growth
                  </p>
                </div>
              </section>
            </>
          } />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;