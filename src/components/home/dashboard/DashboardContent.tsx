import { TabId } from '../types/AITransformationTypes';

interface DashboardContentProps {
  activeTab: TabId;
}

const DashboardContent = ({ activeTab }: DashboardContentProps) => {
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

export default DashboardContent; 