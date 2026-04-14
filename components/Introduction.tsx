import React from 'react';
import { Button } from './Button';
import { ShieldCheck, ArrowRight, Activity, Globe } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Images */}
        <div className="relative">
           {/* Top Image */}
           <div className="w-full h-[350px] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Mission" className="w-full h-full object-cover" />
           </div>
           {/* Bottom Left Image - Overlapping */}
           <div className="w-[60%] h-[240px] rounded-[2rem] overflow-hidden -mt-24 ml-0 border-8 border-white shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Strategic Meeting" className="w-full h-full object-cover" />
           </div>
           
           {/* Decorative Element */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-alt rounded-full -z-10"></div>
        </div>

        {/* Right: Content */}
        <div>
            <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-accent" size={20} />
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Mission</span>
            </div>

            <h2 className="text-[42px] font-bold text-primary mb-6 leading-tight">
                United in Strategy, <br/>
                <span className="text-accent">Securing Nations.</span>
            </h2>
            
            <p className="text-textSecondary text-lg mb-10 leading-relaxed">
                Driven by a mandate for sovereignty and safety, we work hand-in-hand with governments to create resilient infrastructure that withstands modern threats and ensures continuity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Block */}
                <div className="flex flex-col items-start pt-2">
                     <div className="mb-4">
                        <Globe size={40} className="text-primary stroke-1" />
                     </div>
                     <h3 className="text-xl font-bold text-primary mb-2">Sovereign Support</h3>
                     <p className="text-sm text-textSecondary mb-6 leading-relaxed">
                        Providing essential framework architecture for national emergency response sectors.
                     </p>
                     <Button variant="accent" className="flex items-center gap-2 rounded-full px-6 shadow-none hover:shadow-lg">
                        About Us <ArrowRight size={16} />
                     </Button>
                </div>

                {/* Right Block - Card */}
                <div className="bg-[#F8FAFC] rounded-2xl p-6 text-center mt-10 md:mt-0 relative shadow-sm border border-gray-100">
                     <div className="w-16 h-16 rounded-full border-4 border-white shadow-md mx-auto -mt-14 overflow-hidden bg-gray-200">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Executive" className="w-full h-full object-cover" />
                     </div>
                     <div className="mt-4">
                        <div className="text-3xl font-bold text-accent">100%</div>
                        <div className="text-primary font-bold text-sm">Sovereign Owned</div>
                        <p className="text-xs text-textSecondary mt-2 leading-relaxed">
                           Supporting national growth through infrastructure security.
                        </p>
                     </div>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};