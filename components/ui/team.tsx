"use client"

import { motion } from 'framer-motion';

const team = [
  {
    intro:
      "Harsh is an Engineering Lead at	Meta, a 2nd-time founder who previously led engineering at	HSBC and Santander. He also pioneered AI research for Copilot at	Microsoft.",
    name: "Harsh Vardhan",
    src: "https://tnszouxpvpxwhoacdttz.supabase.co/storage/v1/object/public/photos/harsh.jpeg",
  },
  {
    intro:
      "Jon is an Engineering Manager at	Lloyds Bank, also a 2nd-time founder who previously led engineering at Globality to build Procurement AI and pioneered AI Agents for resource management at	the University of Pennsylvania.",
    name: "Jon Abdulloev",
    src: "https://tnszouxpvpxwhoacdttz.supabase.co/storage/v1/object/public/photos/DSC09913.png",
  }
];

const Founders = () => {
  return (
    <div className="mx-auto max-w-sm px-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20 mb-32">
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-full max-w-xs">
            <img
              src={team[0].src}
              alt={team[0].name}
              width={500}
              height={500}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/500x500/e2e8f0/64748b?text=${team[0].name.charAt(0)}`;
                e.currentTarget.onerror = null;
              }}
            />
          </div>
        </div>

        {/* Text and Controls Section */}
        <div className="flex flex-col justify-center py-4">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {team[0].name}
            </h3>
            <motion.p className="mt-4 text-lg text-white">
              {team[0].intro}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20">
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-full max-w-xs">
            <img
              src={team[1].src}
              alt={team[1].name}
              width={500}
              height={500}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/500x500/e2e8f0/64748b?text=${team[1].name.charAt(0)}`;
                e.currentTarget.onerror = null;
              }}
            />
          </div>
        </div>

        {/* Text and Controls Section */}
        <div className="flex flex-col justify-center py-4">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {team[1].name}
            </h3>
            <motion.p className="mt-4 text-lg text-white">
              {team[1].intro}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

function FoundersDemo() {
  return <Founders />;
}

export function Component() {
  return (
    <div className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden">
      <div className="z-10">
        <FoundersDemo />
      </div>
    </div>
  );
}
