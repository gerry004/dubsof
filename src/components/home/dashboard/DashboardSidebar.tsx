import { FaTachometerAlt, FaCalendarAlt, FaEnvelope, FaCog } from 'react-icons/fa';
import { SidebarItemId } from '../types/AITransformationTypes';

interface DashboardSidebarProps {
  activeSidebarItem: SidebarItemId;
  setActiveSidebarItem: (id: SidebarItemId) => void;
}

const DashboardSidebar = ({ activeSidebarItem, setActiveSidebarItem }: DashboardSidebarProps) => {
  const sidebarItems = [
    { id: 'dashboard' as SidebarItemId, icon: <FaTachometerAlt />, label: 'Dashboard' },
    { id: 'calendar' as SidebarItemId, icon: <FaCalendarAlt />, label: 'Calendar' },
    { id: 'messages' as SidebarItemId, icon: <FaEnvelope />, label: 'Messages' },
    { id: 'settings' as SidebarItemId, icon: <FaCog />, label: 'Settings' }
  ];

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
    <div className="w-16 md:w-48 bg-gray-800/50 border-r border-white/10 p-3">
      <div className="flex flex-col space-y-4">
        {sidebarItems.map(item => (
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
  );
};

export default DashboardSidebar; 