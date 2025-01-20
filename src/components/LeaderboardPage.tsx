import React, { useState } from 'react';
import { 
  Trophy,
  Medal,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  LinkedinIcon,
  CheckCircle2,
  Lock,
  Crown,
  X,
  ArrowUpRight
} from 'lucide-react';

interface User {
  id: number;
  rank: number;
  name: string;
  points: number;
  completedTasks: number;
  totalTasks: number;
  linkedinUrl: string;
  completedTasksList: {
    id: number;
    title: string;
    linkedinPostUrl: string;
  }[];
  pendingTasks: string[];
  avatarUrl?: string;
}

// Mock data for demonstration
const mockUsers: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  rank: i + 1,
  name: `User ${i + 1}`,
  points: Math.floor(Math.random() * 1000) + 500,
  completedTasks: Math.floor(Math.random() * 10) + 1,
  totalTasks: 16,
  linkedinUrl: 'https://linkedin.com',
  completedTasksList: [
    {
      id: 1,
      title: 'Docker Installation in RedHat',
      linkedinPostUrl: 'https://linkedin.com/post/1'
    },
    {
      id: 2,
      title: 'Automate Server Setup with Ansible Playbooks',
      linkedinPostUrl: 'https://linkedin.com/post/2'
    }
  ],
  pendingTasks: [
    'Configure CI/CD Pipeline',
    'Implement Container Orchestration'
  ],
  avatarUrl: `https://i.pravatar.cc/150?img=${i + 1}`
})).sort((a, b) => b.points - a.points);

function LeaderboardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const usersPerPage = 25;

  // Filter users based on search query
  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Get top 3 users
  const topUsers = filteredUsers.slice(0, 3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTaskDetails = (user: User) => {
    setSelectedUser(user);
    setShowTaskModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
          <p className="text-xl text-blue-200">Compete, excel, and climb the ranks!</p>
          
          {/* User Rank Message */}
          <div className="mt-8 bg-blue-800 rounded-lg p-4 inline-block">
            <p className="text-lg">
              You're ranked #25. Keep going to reach the Top 10!
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search participants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      {/* Top 3 Users Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {topUsers.map((user, index) => (
            <div
              key={user.id}
              className={`
                relative rounded-lg p-6 transform hover:scale-105 transition-all duration-300
                ${index === 0 ? 'bg-gradient-to-br from-yellow-100 to-yellow-50 shadow-yellow-200' : ''}
                ${index === 1 ? 'bg-gradient-to-br from-gray-100 to-gray-50 shadow-gray-200' : ''}
                ${index === 2 ? 'bg-gradient-to-br from-orange-100 to-orange-50 shadow-orange-200' : ''}
                shadow-lg
              `}
            >
              {index === 0 && (
                <Crown className="absolute top-4 right-4 h-8 w-8 text-yellow-500" />
              )}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                    {index === 0 && <Trophy className="h-6 w-6 text-yellow-500" />}
                    {index === 1 && <Medal className="h-6 w-6 text-gray-400" />}
                    {index === 2 && <Medal className="h-6 w-6 text-orange-500" />}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">{user.name}</h3>
                  <p className="text-gray-600">Points: {user.points}</p>
                  <div className="mt-2 flex space-x-2">
                    <a
                      href={user.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <button
                      onClick={() => handleTaskDetails(user)}
                      className="text-orange-500 hover:text-orange-600"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Tasks Completed</span>
                  <span>{user.completedTasks}/{user.totalTasks}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-500 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${(user.completedTasks / user.totalTasks) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Leaderboard Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {currentUsers.slice(3).map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-500">Rank #{user.rank}</p>
                  <h3 className="font-semibold text-blue-900">{user.name}</h3>
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-gray-600">Points: {user.points}</p>
                <div className="mt-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{user.completedTasks}/{user.totalTasks}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-orange-500 rounded-full h-1.5 transition-all duration-300"
                      style={{ width: `${(user.completedTasks / user.totalTasks) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <a
                  href={user.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <button
                  onClick={() => handleTaskDetails(user)}
                  className="text-orange-500 hover:text-orange-600"
                >
                  <CheckCircle2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronsLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(page => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages)
            .map((page, index, array) => {
              if (index > 0 && array[index - 1] !== page - 1) {
                return (
                  <React.Fragment key={`ellipsis-${page}`}>
                    <span className="px-3 py-2">...</span>
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 rounded-lg ${
                        currentPage === page
                          ? 'bg-orange-500 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                );
              }
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-orange-500 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronsRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Task Details Modal */}
      {showTaskModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">{selectedUser.name}</h3>
                  <p className="text-gray-600">Rank #{selectedUser.rank} • {selectedUser.points} Points</p>
                </div>
                <button
                  onClick={() => setShowTaskModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Completed Tasks */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">Completed Tasks</h4>
                <div className="space-y-4">
                  {selectedUser.completedTasksList.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between bg-green-50 p-4 rounded-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{task.title}</span>
                      </div>
                      <a
                        href={task.linkedinPostUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <span className="mr-1">View Post</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Tasks */}
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-4">Pending Tasks</h4>
                <div className="space-y-4">
                  {selectedUser.pendingTasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg"
                    >
                      <Lock className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeaderboardPage;