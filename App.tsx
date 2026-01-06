import React, { useState } from 'react';
import { Calendar, Users, UserCog, Coffee, Sparkles, LayoutGrid } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { InfoCard } from './components/InfoCard';
import { ScheduleTab } from './components/ScheduleTab';
import { TeacherTab } from './components/TeacherTab';
import { SubstituteTab } from './components/SubstituteTab';
import { PicketTab } from './components/PicketTab';
import { LogModal } from './components/LogModal';
import { downloadExcel } from './utils/excelExporter';
import { TabType } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('jadwal');
  const [isLogOpen, setIsLogOpen] = useState(false);

  // Menu Configuration
  const tabs = [
    { id: 'jadwal', label: 'Jadwal', icon: <Calendar size={20} /> },
    { id: 'guru', label: 'Guru', icon: <Users size={20} /> },
    { id: 'pengganti', label: 'Pengganti', icon: <UserCog size={20} /> },
    { id: 'piket', label: 'Piket', icon: <Coffee size={20} /> },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0f172a] font-sans selection:bg-primary selection:text-white">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 min-h-screen flex flex-col">
        
        {/* Top Actions */}
        <div className="flex justify-between items-center py-4">
           <div className="text-white font-heading font-bold tracking-wider text-sm opacity-50">DKV CONNECT</div>
           <button 
             onClick={() => setIsLogOpen(true)}
             className="bg-white/5 hover:bg-white/10 text-slate-300 p-2 rounded-full transition-all border border-white/5"
           >
             <Sparkles size={18} />
           </button>
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Info Cards (Always Visible) */}
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <InfoCard />
        </div>

        {/* Content Area */}
        <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {activeTab === 'jadwal' && <ScheduleTab />}
          {activeTab === 'guru' && <TeacherTab />}
          {activeTab === 'pengganti' && <SubstituteTab />}
          {activeTab === 'piket' && <PicketTab />}
        </div>

        {/* Footer Credit */}
        <div className="py-6 text-center pb-28 md:pb-10">
          <p className="font-script text-2xl text-slate-600 hover:text-slate-400 transition-colors cursor-default">
            Created by Deva
          </p>
          <button 
            onClick={downloadExcel}
            className="mt-2 text-xs font-bold text-slate-500 hover:text-white underline decoration-slate-700 underline-offset-4 transition-colors"
          >
            Download Data Excel
          </button>
        </div>

        {/* Floating Dock Navigation (Bottom for Mobile, Sticky for Desktop) */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
          <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex justify-between items-center shadow-2xl shadow-black/50">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`
                    relative flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all duration-300
                    ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'}
                  `}
                >
                  {/* Glow Effect behind active icon */}
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/20 blur-md rounded-xl"></div>
                  )}
                  
                  <div className={`relative z-10 transition-transform duration-300 ${isActive ? '-translate-y-1' : ''}`}>
                    {tab.icon}
                  </div>
                  
                  {isActive && (
                    <span className="absolute -bottom-1 text-[10px] font-bold tracking-wide animate-fade-in">
                      {tab.label}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      <LogModal isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} />
    </div>
  );
}

export default App;