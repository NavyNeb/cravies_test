import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

const CheckBadge = () => {
    return (
        <span
          className={cn(
            "inline-flex items-center justify-center",
            "h-5 w-5 rounded-full border-[2px] border-black-app bg-white"
          )}
          aria-label="Verified"
          title="Verified"
        >
          <CheckCircle2 className="h-4 w-4 text-green-app" strokeWidth={3} />
        </span>
      );
}

export default CheckBadge