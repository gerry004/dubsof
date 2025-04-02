'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaClock, FaExclamationTriangle, FaClipboardList, FaTachometerAlt, FaCalendarAlt, FaEnvelope, FaCog, FaBell } from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface JigsawPiece {
  id: number;
  title: string;
  shortTitle: string;
  initialPosition: { x: number; y: number; rotate: number };
  finalPosition: { x: number; y: number; rotate: number };
}

const AITransformation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const jigsawContainerRef = useRef<HTMLDivElement>(null);
  const contentCardRef = useRef<HTMLDivElement>(null);
  const jigsawRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRef = useRef<HTMLDivElement>(null);
  const benefitsArrowRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('clients');
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');

  // Define jigsaw pieces with their initial scrambled and final positions
  const jigsawPieces: JigsawPiece[] = [
    {
      id: 1,
      title: "Client Management",
      shortTitle: "CRM",
      initialPosition: { x: -150, y: -200, rotate: 45 },
      finalPosition: { x: 0, y: 0, rotate: 0 }
    },
    {
      id: 2,
      title: "Project and Task Tracking",
      shortTitle: "PTT",
      initialPosition: { x: 150, y: -180, rotate: -30 },
      finalPosition: { x: 0, y: 0, rotate: 0 }
    },
    {
      id: 3,
      title: "Inventory Management",
      shortTitle: "IM",
      initialPosition: { x: -120, y: 200, rotate: 15 },
      finalPosition: { x: 0, y: 0, rotate: 0 }
    },
    {
      id: 4,
      title: "HR and Payroll",
      shortTitle: "HR",
      initialPosition: { x: 180, y: 170, rotate: -20 },
      finalPosition: { x: 0, y: 0, rotate: 0 }
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Set initial states for jigsaw pieces
    jigsawRefs.current.forEach((ref, index) => {
      if (ref) {
        const piece = jigsawPieces[index];
        gsap.set(ref, {
          x: piece.initialPosition.x,
          y: piece.initialPosition.y,
          rotation: piece.initialPosition.rotate,
          opacity: 0.3,
          scale: 0.8
        });
        
        // Set initial text to full title
        const titleElement = ref.querySelector('h3');
        if (titleElement) {
          titleElement.textContent = piece.title;
        }
      }
    });

    // Set initial state for content card
    gsap.set(contentCardRef.current, {
      opacity: 0,
      y: 20
    });

    // Set initial state for arrow
    gsap.set(arrowRef.current, {
      opacity: 0,
      scaleY: 0
    });

    // Set initial state for benefits arrow
    gsap.set(benefitsArrowRef.current, {
      opacity: 0,
      scaleY: 0
    });

    // Create a timeline for the jigsaw animation
    const jigsawTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "center center",
        scrub: 1,
        markers: false
      }
    });

    // Animate each jigsaw piece
    jigsawRefs.current.forEach((ref, index) => {
      if (ref) {
        const piece = jigsawPieces[index];
        
        // Position and appearance animation
        jigsawTl.to(ref, {
          x: piece.finalPosition.x,
          y: piece.finalPosition.y,
          rotation: piece.finalPosition.rotate,
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power1.inOut"
        }, 0);
        
        // Text transformation animation
        const titleElement = ref.querySelector('h3');
        if (titleElement) {
          jigsawTl.to(titleElement, {
            innerText: piece.shortTitle,
            duration: 0.1,
            ease: "none",
            onUpdate: function() {
              // This ensures the text changes at the midpoint of the animation
              const progress = jigsawTl.progress();
              if (progress >= 0.5 && titleElement.textContent !== piece.shortTitle) {
                titleElement.textContent = piece.shortTitle;
              } else if (progress < 0.5 && titleElement.textContent !== piece.title) {
                titleElement.textContent = piece.title;
              }
            }
          }, 0);
        }
      }
    });

    // Create a timeline for the content card
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "center center",
        scrub: 1,
        markers: false
      }
    });

    // Animate the content card
    contentTl.to(contentCardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power1.inOut"
    });

    // Create a timeline for the arrow animation
    const arrowTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "center center",
        scrub: 1,
        markers: false
      }
    });

    // Animate the arrow
    arrowTl.to(arrowRef.current, {
      opacity: 1,
      scaleY: 1,
      duration: 0.3,
      ease: "power1.inOut"
    });

    // Create a timeline for the benefits arrow animation
    const benefitsArrowTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center 60%",
        end: "bottom 40%",
        scrub: 1,
        markers: false
      }
    });

    // Animate the benefits arrow
    benefitsArrowTl.to(benefitsArrowRef.current, {
      opacity: 1,
      scaleY: 1,
      duration: 0.3,
      ease: "power1.inOut"
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Dashboard content based on active tab
  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'clients':
        return (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white text-sm font-semibold">Active Clients</h4>
                <p className="text-green-400 text-2xl font-bold">24</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white text-sm font-semibold">New Leads</h4>
                <p className="text-blue-400 text-2xl font-bold">7</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <h4 className="text-white text-sm font-semibold mb-2">Recent Clients</h4>
              <ul className="space-y-2">
                {['Acme Corp', 'TechSolutions Inc', 'Global Enterprises'].map((client, idx) => (
                  <li key={idx} className="flex justify-between items-center bg-black/20 p-2 rounded">
                    <span className="text-white">{client}</span>
                    <span className="text-xs text-green-400">Active</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white text-sm font-semibold">Active</h4>
                <p className="text-green-400 text-2xl font-bold">12</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white text-sm font-semibold">Pending</h4>
                <p className="text-yellow-400 text-2xl font-bold">5</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white text-sm font-semibold">Completed</h4>
                <p className="text-blue-400 text-2xl font-bold">43</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <h4 className="text-white text-sm font-semibold mb-2">Project Timeline</h4>
              <div className="space-y-2">
                {['Website Redesign', 'Mobile App Development', 'SEO Campaign'].map((project, idx) => (
                  <div key={idx} className="bg-black/20 p-2 rounded">
                    <div className="flex justify-between">
                      <span className="text-white text-sm">{project}</span>
                      <span className="text-xs text-green-400">On Track</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full mt-1">
                      <div 
                        className="bg-green-400 h-2 rounded-full" 
                        style={{width: `${[75, 45, 60][idx]}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'employees':
        return (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white text-sm font-semibold">Team Members</h4>
                <p className="text-purple-400 text-2xl font-bold">16</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <h4 className="text-white text-sm font-semibold">Avg. Productivity</h4>
                <p className="text-green-400 text-2xl font-bold">92%</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <h4 className="text-white text-sm font-semibold mb-2">Team Activity</h4>
              <div className="space-y-2">
                {['Design Team', 'Development', 'Marketing'].map((team, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-black/20 p-2 rounded">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                      <span className="text-white text-sm">{team}</span>
                    </div>
                    <span className="text-xs text-white/70">{['4', '6', '3'][idx]} members</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Sidebar content based on active item
  const renderSidebarContent = () => {
    switch (activeSidebarItem) {
      case 'dashboard':
        return (
          <div className="text-xs text-white/70 space-y-1">
            <p>Overview</p>
            <p>Analytics</p>
            <p>Reports</p>
          </div>
        );
      case 'calendar':
        return (
          <div className="text-xs text-white/70 space-y-1">
            <p>Meetings</p>
            <p>Events</p>
            <p>Deadlines</p>
          </div>
        );
      case 'messages':
        return (
          <div className="text-xs text-white/70 space-y-1">
            <p>Inbox</p>
            <p>Sent</p>
            <p>Drafts</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-xs text-white/70 space-y-1">
            <p>Account</p>
            <p>Preferences</p>
            <p>Security</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-[100vh] overflow-hidden bg-gradient-to-b from-black to-[#0a1e0a] flex flex-col items-center justify-start pt-16 pb-24">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">What We Do</h2>
      
      {/* Problems Section - Redesigned with containers */}
      <div className="flex flex-col items-center max-w-3xl w-full px-4 space-y-6">
        {/* Problem 1 */}
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-red-500/30 p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="bg-red-500/20 p-3 rounded-full shrink-0">
              <FaClock className="text-red-400 text-2xl" />
            </span>
            <div>
              <h3 className="text-red-400 text-2xl font-bold mb-2">100+ Wasted Admin Hours</h3>
              <p className="text-white/80">Your team spends countless hours on repetitive tasks that could be automated, taking focus away from what really matters.</p>
            </div>
          </div>
        </div>
        
        {/* Problem 2 */}
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-yellow-500/30 p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="bg-yellow-500/20 p-3 rounded-full shrink-0">
              <FaExclamationTriangle className="text-yellow-400 text-2xl" />
            </span>
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-2">Inefficient Systems</h3>
              <p className="text-white/80">Your current systems don't communicate with each other, creating data silos and forcing manual data transfers between platforms.</p>
            </div>
          </div>
        </div>
        
        {/* Problem 3 */}
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/30 p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="bg-blue-500/20 p-3 rounded-full shrink-0">
              <FaClipboardList className="text-blue-400 text-2xl" />
            </span>
            <div>
              <h3 className="text-blue-400 text-2xl font-bold mb-2">Too Much Busy Work</h3>
              <p className="text-white/80">Your business is stuck in maintenance mode, with no time or resources to focus on growth and innovation.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Arrow connecting problems to solution - removed margin */}
      <div 
        ref={arrowRef} 
        className="w-2 h-24 bg-gradient-to-b from-blue-400/70 to-green-400/70 rounded-full origin-top"
      ></div>
      
      {/* Solution Container - Dashboard UI */}
      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-green-500/30 max-w-4xl w-full shadow-lg">
        <h3 className="text-3xl font-bold text-green-400 text-center mb-4">AI-Powered Custom System</h3>
        
        {/* Dashboard UI */}
        <div className="bg-gray-900/80 rounded-lg border border-white/10 overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gray-800 p-3 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-white/70 text-sm">Business Management System</div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <FaBell className="text-white/70 text-xs" />
              </div>
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 text-xs font-bold">JD</span>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-16 md:w-48 bg-gray-800/50 border-r border-white/10 p-3">
              <div className="flex flex-col space-y-4">
                {[
                  { id: 'dashboard', icon: <FaTachometerAlt />, label: 'Dashboard' },
                  { id: 'calendar', icon: <FaCalendarAlt />, label: 'Calendar' },
                  { id: 'messages', icon: <FaEnvelope />, label: 'Messages' },
                  { id: 'settings', icon: <FaCog />, label: 'Settings' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSidebarItem(item.id)}
                    className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                      activeSidebarItem === item.id ? 'bg-green-500/20 text-green-400' : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="hidden md:inline text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                {renderSidebarContent()}
              </div>
            </div>
            
            {/* Main Dashboard Area */}
            <div className="flex-1 p-4">
              {/* Tabs */}
              <div className="flex border-b border-white/10 mb-4">
                {['clients', 'projects', 'employees'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab 
                        ? 'text-green-400 border-b-2 border-green-400' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="h-[300px]">
                {renderDashboardContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Arrow connecting solution to benefits - removed margin */}
      <div 
        ref={benefitsArrowRef} 
        className="w-2 h-24 bg-gradient-to-b from-green-400/70 to-purple-400/70 rounded-full origin-top"
      ></div>
      
      {/* Benefits Section */}
      <div className="max-w-3xl w-full px-4">
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/30 p-6 shadow-lg">
          <h3 className="text-3xl font-bold text-purple-400 text-center mb-6">Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-2">Increased Efficiency</h4>
              <p className="text-white/80">Automate repetitive tasks and streamline workflows</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-2">Better Decision Making</h4>
              <p className="text-white/80">Access real-time data and insights across your business</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-2">Reduced Costs</h4>
              <p className="text-white/80">Eliminate redundant systems and manual processes</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-semibold text-white mb-2">Scalable Growth</h4>
              <p className="text-white/80">Focus on innovation instead of maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITransformation;
