import React from 'react';
import { substituteData } from '../data';
import { UserCog, AlertCircle } from 'lucide-react';

export const SubstituteTab: React.FC = () => {
  if (substituteData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-600">
        <UserCog size={64} className="mb-4 opacity-20" />
        <p className="font-heading">Tidak ada data guru pengganti.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-20">
      {substituteData.map((sub, index) => (
        <div key={index} className="bg-white/5 border-l-4 border-orange-500 rounded-r-xl p-5 flex flex-col md:flex-row md:items-center gap-4 hover:bg-white/10 transition-all">
          <div className="bg-orange-500/20 p-3 rounded-full text-orange-500 w-fit">
            <UserCog size={24} />
          </div>
          
          <div className="flex-1">
             <div className="flex flex-wrap items-center gap-2 mb-1">
               <h3 className="font-heading font-bold text-white text-lg">{sub.name}</h3>
               <span className="bg-white/10 text-slate-300 text-[10px] px-2 py-1 rounded border border-white/10 font-mono">
                 {sub.code}
               </span>
             </div>
             <p className="text-primary font-medium mb-2">{sub.subject}</p>
             
             <div className="flex items-start gap-2 text-sm text-orange-300/80 bg-orange-500/10 p-3 rounded-lg border border-orange-500/20">
               <AlertCircle size={16} className="mt-0.5 shrink-0" />
               <span className="italic">{sub.note}</span>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};