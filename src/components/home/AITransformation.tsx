'use client';

import { useRef } from 'react';
import { JigsawPiece } from './types/AITransformationTypes';
import { useAITransformationAnimation } from './hooks/useAITransformationAnimation';
import ProblemSection from './problems/ProblemSection';
import DashboardUI from './dashboard/DashboardUI';
import BenefitsSection from './benefits/BenefitsSection';

const AITransformation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentCardRef = useRef<Array<HTMLDivElement | null>>([]);
  const jigsawRefs = useRef<Array<HTMLDivElement | null>>([]);
  const arrowRef = useRef<HTMLDivElement>(null);
  const benefitsArrowRef = useRef<HTMLDivElement>(null);

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

  // Use the animation hook
  useAITransformationAnimation(
    { containerRef, jigsawRefs, contentCardRef, arrowRef, benefitsArrowRef },
    jigsawPieces
  );

  return (
    <div ref={containerRef} className="relative min-h-[100vh] overflow-hidden bg-gradient-to-b from-black via-[#0a1e0a] to-black flex flex-col items-center justify-start pt-16 pb-24">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Business Transformation with AI</h2>
      <ProblemSection />
      <div 
        ref={arrowRef} 
        className="w-2 h-24 bg-gradient-to-b from-blue-400/70 to-green-400/70 rounded-full origin-top"
      ></div>
      <div className="p-4 max-w-4xl w-full">
        <DashboardUI />
      </div>
      <div 
        ref={benefitsArrowRef} 
        className="w-2 h-24 bg-gradient-to-b from-green-400/70 to-purple-400/70 rounded-full origin-top"
      ></div>
      <BenefitsSection />
    </div>
  );
};

export default AITransformation;
