import React from 'react';
import { scheduleData } from '../data';
import { Clock, User, Calendar } from 'lucide-react';
import { getIndonesianDay } from '../utils/timeUtils';

export const ScheduleTab: React.FC = () => {
  const days = Object.keys(scheduleData);
  const currentDay = getIndonesianDay();

  return (
    <div className="space-y-6 pb-20">
      {days.map((day) => {
        const rows = scheduleData[day];
        const isToday = currentDay === day;
        
        return (
          <div key={day} className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${isToday ? 'bg-white/10 border border-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]' : 'bg-white/5 border border-white/5'}`}>
            
            {/* Header */}
            <div className={`px-6 py-4 flex items-center justify-between ${isToday ? 'bg-gradient-to-r from-primary/20 to-transparent' : 'bg-white/5'}`}>
              <div className="flex items-center gap-3">
                <Calendar size={18} className={isToday ? 'text-primary' : 'text-slate-500'} />
                <h3 className={`font-heading font-bold text-xl tracking-wide ${isToday ? 'text-white' : 'text-slate-400'}`}>
                  {day}
                </h3>
              </div>
              {isToday && (
                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider animate-pulse">
                  Hari Ini
                </span>
              )}
            </div>

            {/* List View */}
            <div className="divide-y divide-white/5">
              {rows.map((row, idx) => {
                const isBreak = row.subject === 'ISTIRAHAT';
                if (isBreak) {
                  return (
                    <div key={idx} className="bg-black/20 py-3 flex items-center justify-center gap-2">
                      <div className="h-px w-8 bg-slate-700"></div>
                      <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">Istirahat</span>
                      <div className="h-px w-8 bg-slate-700"></div>
                    </div>
                  );
                }
                
                return (
                  <div key={idx} className="p-4 hover:bg-white/5 transition-colors flex gap-4 group">
                    <div className="flex flex-col items-center pt-1 min-w-[3rem]">
                      <span className="text-sm font-heading font-bold text-slate-500 group-hover:text-white transition-colors">{row.time.split(' - ')[0]}</span>
                      <div className="h-full w-px bg-white/5 my-2 group-hover:bg-primary/30 transition-colors"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                           {row.time}
                        </span>
                        {row.code1 !== '-' && row.code1 !== 'Kosong' && (
                           <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                             {row.code1}
                           </span>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-heading font-semibold text-slate-200 group-hover:text-primary transition-colors mb-1">
                        {row.subject}
                      </h4>
                      
                      {row.teacher !== '-' && (
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <User size={14} className="text-slate-600" />
                          <span className="truncate">{row.teacher}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};