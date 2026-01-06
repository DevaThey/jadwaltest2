import React from 'react';
import { picketPagiData, picketSoreData } from '../data';
import { Picket } from '../types';
import { MessageCircle, Sun, Moon } from 'lucide-react';

const PicketSection = ({ data, title, icon, accentColor }: { 
  data: Picket[], 
  title: string, 
  icon: React.ReactNode,
  accentColor: string
}) => (
  <div className="mb-8 last:mb-0">
    <div className="flex items-center gap-3 mb-4 pl-2">
      <div className={`p-2 rounded-lg bg-${accentColor}-500/20 text-${accentColor}-400`}>
        {icon}
      </div>
      <h3 className="font-heading font-bold text-xl text-white">{title}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {data.map((piket, index) => (
        <div key={index} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between group hover:bg-white/10 transition-all">
          <div>
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{piket.day}</div>
             <div className="font-bold text-slate-200 text-sm group-hover:text-white">{piket.name}</div>
          </div>
          {piket.phone && (
             <a 
              href={`https://wa.me/${piket.phone}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-slate-500 hover:text-${accentColor}-400 transition-colors bg-white/5 p-2 rounded-lg`}
             >
               <MessageCircle size={16} />
             </a>
           )}
        </div>
      ))}
    </div>
  </div>
);

export const PicketTab: React.FC = () => {
  return (
    <div className="pb-20">
      <PicketSection 
        data={picketPagiData} 
        title="Sesi Pagi" 
        icon={<Sun size={20} />}
        accentColor="orange"
      />
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
      <PicketSection 
        data={picketSoreData} 
        title="Sesi Sore" 
        icon={<Moon size={20} />}
        accentColor="indigo"
      />
    </div>
  );
};