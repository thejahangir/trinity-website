import React from 'react';
import { 
  Clock, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { insights } from '../../data/homepageData';

export default function InsightsV3({ onRequestDemo }) {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-[#F6F7FA] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E0E2EC]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
              <span>07 // Research & Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
              The Science of Defensible Decisions.
            </h2>
          </div>
          <p className="text-sm text-[#43474E] max-w-md font-normal leading-relaxed">
            Technical whitepapers, legal benchmarks, and research briefings on deterministic machine intelligence for high-stakes enterprise workflows.
          </p>
        </div>

        {/* 3 Material 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] border border-[#C3C7D0]/60 p-7 sm:p-8 flex flex-col justify-between m3-elevation-1 hover:m3-elevation-3 transition-all duration-300 group"
            >
              <div>
                {/* Category & Read Time Chips */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#D3E3FD] text-[#041E49]">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#73777F] font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1A1C1E] group-hover:text-[#0B57D0] transition-colors leading-snug mb-3 font-material">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#43474E] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#EFF1F6]">
                <button
                  type="button"
                  onClick={() => onRequestDemo(`Research Briefing: ${item.title}`)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#0B57D0] hover:text-[#0842A0] group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  <span>Request Full Research Paper</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
