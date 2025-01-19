import React from 'react';
import { Cloud, Github } from 'lucide-react';

interface FooterProps {
  navigateToHome: () => void;
  navigateToTasks: () => void;
  navigateToLeaderboard: () => void;
  navigateToSponsor: () => void;
}

function Footer({ navigateToHome, navigateToTasks, navigateToLeaderboard, navigateToSponsor }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Cloud className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-blue-900">HelpOps Quest</span>
            </div>
            <p className="text-gray-600">
              Empowering DevOps Learning and Growth through practical challenges.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={navigateToHome} className="text-gray-600 hover:text-orange-500">Home</button>
              </li>
              <li>
                <button onClick={navigateToTasks} className="text-gray-600 hover:text-orange-500">Tasks</button>
              </li>
              <li>
                <button onClick={navigateToLeaderboard} className="text-gray-600 hover:text-orange-500">Leaderboards</button>
              </li>
              <li>
                <button onClick={navigateToSponsor} className="text-gray-600 hover:text-orange-500">Sponsor Us</button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">Community</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Contact</h3>
            <a href="mailto:support@helpops-hub.com" className="text-gray-600 hover:text-orange-500">
              support@helpops-hub.com
            </a>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} HelpOps-Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;