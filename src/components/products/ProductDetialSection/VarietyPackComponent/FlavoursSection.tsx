import { Badge } from '@/components/ui/badge';
import { FLAVORS } from '@/data/mockData';
import { classNames } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React from 'react';
import type { FlavorKey } from '.';
import SectionLabel from './SectionLabel';

type Props = {
    flavors: Record<string, number>;
    bumpFlavor: (key: FlavorKey, delta: number) => void;
    pack: string;
    totalBoxes: number;
}

const FlavoursSection: React.FC<Props> = ({ bumpFlavor, pack, totalBoxes }) => {
  return (
    <React.Fragment>
         <SectionLabel index={2} title="PICK YOUR FLAVOURS" className="mt-3" />
        <div className="space-y-2">
          {FLAVORS.map((f) => (
            <div
              key={f.key}
              className={
                classNames(
                    "flex items-center h-[88px] gap-3 rounded-[18px] overflow-clip border-[3px] ",
                    f.best_seller ? "bg-[#FBF3E4] border-black-app" : "bg-white border-[#D1D1D1]"
                )
              }
            >
              {/* thumb */}
              <div className={`flex h-full w-[88px] items-center justify-center ${f.color}`}>
                <img src='/images/cheesy-cravies.jpg' className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col">
                <h6 className="text-[18px] sm:text-[20px] font-normal font-wosker tracking-wide">{f.name}</h6>
                { f.best_seller && <div className="mt-0.5 flex items-center gap-1 text-[10px] text-black/50">
                  <Badge className='bg-[#FBA474] text-black-app font-bold text-xs' >Best Seller</Badge>
                </div>}
              </div>
              <div className="flex items-center gap-2 px-3">
                <button
                  onClick={() => bumpFlavor(f.key as FlavorKey, 1)}
                  className="grid h-[40px] w-[40px] place-items-center rounded-[12px] border border-black bg-black-app text-white disabled:opacity-30"
                  aria-label={`Increase ${f.name}`}
                  disabled={totalBoxes >= Number(pack)}
                >
                  <Plus size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>
    </React.Fragment>

 )
}

export default FlavoursSection