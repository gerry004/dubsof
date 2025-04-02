const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection; 