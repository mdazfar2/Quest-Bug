import React, { useState } from 'react';
import { 
  Calendar, 
  Lock, 
  ChevronRight, 
  CheckCircle2,
  X
} from 'lucide-react';

interface Task {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  unlockDate: string;
  isLocked: boolean;
  daysUntilUnlock: number;
  status: 'locked' | 'available' | 'pending' | 'completed';
}

const initialTasks: Task[] = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  title: `Task ${i + 1}: ${getTaskTitle(i + 1)}`,
  shortDescription: getTaskShortDescription(i + 1),
  fullDescription: getTaskFullDescription(i + 1),
  unlockDate: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString(),
  isLocked: i > 0,
  daysUntilUnlock: i,
  status: i === 0 ? 'available' : 'locked'
}));

function getTaskTitle(id: number): string {
  const titles = [
    'Automate Server Setup with Ansible Playbooks',
    'Configure CI/CD Pipeline',
    'Implement Container Orchestration',
    'Set Up Monitoring System',
    'Deploy Microservices Architecture',
    'Implement Infrastructure as Code',
    'Database Backup Automation',
    'Security Compliance Automation',
    'Load Balancer Configuration',
    'Service Mesh Implementation',
    'API Gateway Setup',
    'Log Aggregation System',
    'Disaster Recovery Plan',
    'Cloud Cost Optimization',
    'Performance Monitoring',
    'Zero-Downtime Deployment'
  ];
  return titles[id - 1] || `DevOps Challenge ${id}`;
}

function getTaskShortDescription(id: number): string {
  const descriptions = [
    'Write Ansible playbooks to automate server configuration tasks effectively.',
    'Set up a complete CI/CD pipeline using modern tools and practices.',
    'Deploy and manage containerized applications at scale.',
    'Implement comprehensive system monitoring and alerting.',
    'Design and deploy a microservices-based application.',
    'Create infrastructure using code and version control.',
    'Automate database backup and recovery procedures.',
    'Implement security best practices and compliance checks.',
    'Configure and optimize load balancing for high availability.',
    'Deploy and configure a service mesh architecture.',
    'Set up and secure API gateway for microservices.',
    'Implement centralized logging and analysis.',
    'Create and test disaster recovery procedures.',
    'Optimize cloud resource usage and costs.',
    'Set up performance monitoring and optimization.',
    'Implement zero-downtime deployment strategies.'
  ];
  return descriptions[id - 1] || `Complete DevOps challenge ${id} to enhance your skills.`;
}

function getTaskFullDescription(id: number): string {
  return `📌 Install and configure required tools:
Automate the installation and configuration of necessary tools and services, ensuring proper setup for the task requirements.

📌 Implement core functionality:
Follow best practices to implement the main objectives of the task, focusing on automation and efficiency.

📌 Testing and validation:
Create comprehensive tests to validate your implementation and ensure everything works as expected.

📌 Documentation:
Document your solution thoroughly, including setup instructions and any assumptions made.`;
}

function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionUrl, setSubmissionUrl] = useState('');
  const completedTasks = tasks.filter(task => task.status === 'completed').length;

  const handleViewDetails = (task: Task) => {
    if (!task.isLocked) {
      setSelectedTask(task);
      setIsModalOpen(true);
      setSubmissionUrl('');
    }
  };

  const handleSubmit = () => {
    if (!selectedTask || !submissionUrl.trim()) return;

    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === selectedTask.id) {
        return { ...task, status: 'pending' };
      }
      if (task.id === selectedTask.id + 1) {
        return { ...task, isLocked: false, status: 'available' };
      }
      return task;
    }));

    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Available Tasks</h1>
          <p className="text-xl text-blue-200">Complete daily challenges to learn, grow, and compete!</p>
          
          {/* Progress Tracker */}
          <div className="mt-8 bg-blue-800 rounded-lg p-4 inline-block">
            <p className="text-lg">
              Task {completedTasks} of 16 Completed
              <span className="ml-2 text-blue-200">
                ({Math.round((completedTasks / 16) * 100)}% complete)
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Task List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map(task => (
            <div
              key={task.id}
              className={`
                relative rounded-lg shadow-md transition-all duration-300
                ${task.isLocked ? 'bg-gray-100' : 'bg-white hover:shadow-lg'}
                ${task.status === 'pending' ? 'bg-yellow-50' : ''}
              `}
            >
              {task.isLocked && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Unlocks in {task.daysUntilUnlock} days</p>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-900">{task.title}</h3>
                  {task.status === 'pending' && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Under Review
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">{task.shortDescription}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{task.unlockDate}</span>
                  </div>
                  
                  {!task.isLocked && task.status !== 'pending' && (
                    <button
                      onClick={() => handleViewDetails(task)}
                      className="flex items-center text-orange-500 hover:text-orange-600 font-semibold"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Banner */}
      <div className="bg-blue-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Stay consistent to complete all tasks and win exciting prizes!
          </h2>
          <p className="text-blue-200">
            Each completed task brings you closer to becoming a DevOps expert.
          </p>
        </div>
      </div>

      {/* Task Details Modal */}
      {isModalOpen && selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-blue-900">{selectedTask.title}</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="prose max-w-none mb-8">
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Task Description</h4>
                  <p className="whitespace-pre-line text-gray-700">{selectedTask.fullDescription}</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-orange-900 mb-2">Submission Instructions</h4>
                  <p className="text-gray-700">
                    Share your solution on LinkedIn and submit the post URL below. Make sure your post:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Demonstrates your implementation</li>
                    <li>Includes key learnings and challenges</li>
                    <li>Uses relevant hashtags (#DevOps #HelpOpsQuest)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="submission-url" className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn Post URL
                  </label>
                  <input
                    id="submission-url"
                    type="url"
                    value={submissionUrl}
                    onChange={(e) => setSubmissionUrl(e.target.value)}
                    placeholder="https://www.linkedin.com/posts/..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!submissionUrl.trim()}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Submit Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TasksPage;