import { FaClock, FaExclamationTriangle, FaClipboardList } from 'react-icons/fa';

const ProblemSection = () => {
  return (
    <div className="flex flex-col items-center max-w-3xl w-full px-4 space-y-6">
      {/* Problem 1 */}
      <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/30 p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="bg-orange-500/20 p-3 rounded-full shrink-0">
            <FaClock className="text-orange-400 text-2xl" />
          </span>
          <div>
            <h3 className="text-orange-400 text-2xl font-bold mb-2">100+ Wasted Admin Hours</h3>
            <p className="text-white/80">Your team spends countless hours on repetitive tasks that could be automated, taking focus away from what really matters.</p>
          </div>
        </div>
      </div>
      
      {/* Problem 2 */}
      <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/30 p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="bg-orange-500/20 p-3 rounded-full shrink-0">
            <FaExclamationTriangle className="text-orange-400 text-2xl" />
          </span>
          <div>
            <h3 className="text-orange-400 text-2xl font-bold mb-2">Inefficient Systems</h3>
            <p className="text-white/80">Your current systems don't communicate with each other, creating data silos and forcing manual data transfers between platforms.</p>
          </div>
        </div>
      </div>
      
      {/* Problem 3 */}
      <div className="w-full bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/30 p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="bg-orange-500/20 p-3 rounded-full shrink-0">
            <FaClipboardList className="text-orange-400 text-2xl" />
          </span>
          <div>
            <h3 className="text-orange-400 text-2xl font-bold mb-2">Too Much Busy Work</h3>
            <p className="text-white/80">Your business is stuck in maintenance mode, with no time or resources to focus on growth and innovation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection; 