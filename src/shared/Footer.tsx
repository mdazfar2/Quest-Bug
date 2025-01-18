import React from 'react';
import { Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Tasks</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Leaderboards</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Sponsor Us</a>
            </li>
          </ul>
        </div>

        {/* About HelpOps-Hub */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About HelpOps-Hub</h3>
          <p className="text-gray-400">
            HelpOps-Hub is your ultimate platform for DevOps learning and professional growth. We provide practical challenges, resources, and a supportive community.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <a href="mailto:contact@helpopshub.com" className="text-gray-400 hover:text-white">
            contact@helpopshub.com
          </a>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <a href="#" className="text-gray-400 hover:text-white flex items-center">
            <Github className="h-6 w-6 mr-2" /> GitHub Repository
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} HelpOps-Hub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
