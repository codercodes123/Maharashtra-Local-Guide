
import { Section as MotionSection, Div as MotionDiv, H1 as MotionH1, A as MotionA } from "@/app/components/ClientMotion";
// import Ballpit from "@/app/components/Ballpit";
// import Lightning from "@/app/components/Lightning/Lightning";
// import FloatingLines from "@/app/components/FloatingLines/FloatingLines";
// import { GridScan } from "@/app/components/GridScan/GridScan";
// import { LiquidChrome } from "@/app/components/LiquidChrome/LiquidChrome";
// import Galaxy from "@/app/components/Galaxy/Galaxy";
// import LazyLoad from "@/app/components/LazyLoad";
import Particles from "@/app/components/Particles/Particles";
import GradientText from "@/app/components/GradientText/GradientText";
import GooeyNav from "@/app/components/GooeyNav/GooeyNav";
import SpotlightCard from "@/app/components/SpotlightCard/SpotlightCard";

import Link from "next/link";



const items = [
  { label: "Home", href: "/" },
  { label: "Ask", href: "/ask" },
  { label: "About", href: "/about" },
];


export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden overflow-y-auto">

      {/* Hero Section */}
      <MotionSection
        className="relative min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Particles Layer */}
        <div className="absolute inset-0 -z-10 bg-black">
          <Particles
            particleColors={['#ffffffff', '#ffffffff']}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false} className={undefined} />
        </div>

        {/* Gooey Navigation */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 mt-3">
          <GooeyNav
            items={items}
            particleCount={25}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 8, 2, 7, 9, 1, 3]}
          />
        </div>

        {/* Hero Text */}
        <MotionDiv
          className="z-20 px-4 text-center text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <GradientText
            colors={["#e4660cff", "#e4d104ff", "#b40606ff", "#ffffffff", "#ffffffff"]}
            animationSpeed={3}
            className="rounded-none bg-transparent shadow-none text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight"
          >
            महाराष्ट्र
            Local Guide
          </GradientText>

          {/* Subtitle */}
          <p className="text-gray-200 max-w-2xl text-lg mt-2">
            Get authentic Maharashtra cultural intelligence
          </p>
          <p className="text-gray-400 max-w-xl text-md mt-2">
            Real cultural intelligence for every city and region across Maharashtra.
          </p>

          <Link href="/ask">

            <button className="mt-8 px-8 py-3 rounded-full text-lg font-semibold text-white 
            bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg
            hover:scale-105 transition-transform duration-300 active:scale-95">
              Ask Kay Karu?
            </button>

          </Link>
        </MotionDiv>


      </MotionSection>
      {/* Spotlight Cards Section */}
      <section className="relative z-20 w-full py-24 px-4
    bg-gradient-to-b from-black via-[#00FFFF] to-[#074F8B]
    border-t border-purple-800/20">

        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 tracking-wide drop-shadow-lg">
          Maharashtra Survival Spotlight
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <SpotlightCard spotlightColor="rgba(255,165,0,0.25)"
            className="rounded-2xl p-6 bg-black/40 backdrop-blur-md border border-purple-700/40 shadow-lg shadow-purple-900/40">
            <h3 className="text-lg font-bold text-white mb-2">Vada Pav Culture</h3>
            <p className="text-gray-300 text-sm">
              Mumbai’s essential fuel — cheap, fast, everywhere.
            </p>
            <p className="text-yellow-400 text-xs mt-3 font-semibold">
              Rule: Crowd = Quality.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(255,0,85,0.3)"
            className="rounded-2xl p-6 bg-black/40 backdrop-blur-md border border-purple-700/40 shadow-lg shadow-purple-900/40">
            <h3 className="text-lg font-bold text-white mb-2">Ganesh Chaturthi Survival</h3>
            <p className="text-gray-300 text-sm">
              Peak devotion + peak traffic jams in Mumbai & Pune.
            </p>
            <p className="text-yellow-400 text-xs mt-3 font-semibold">
              Rule: Visarjan roads = avoid or suffer.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0,200,255,0.25)"
            className="rounded-2xl p-6 bg-black/40 backdrop-blur-md border border-purple-700/40 shadow-lg shadow-purple-900/40">
            <h3 className="text-lg font-bold text-white mb-2">Mumbai Local Etiquette</h3>
            <p className="text-gray-300 text-sm">
              Life speed = train speed. Flow matters.
            </p>
            <p className="text-yellow-400 text-xs mt-3 font-semibold">
              Rule: Let people exit first. No exceptions.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(255,50,20,0.35)"
            className="rounded-2xl p-6 bg-black/40 backdrop-blur-md border border-purple-700/40 shadow-lg shadow-purple-900/40">
            <h3 className="text-lg font-bold text-white mb-2">Kolhapuri Spice Alert</h3>
            <p className="text-gray-300 text-sm">
              Tambada & Pandhra Rassa test your soul.
            </p>
            <p className="text-yellow-400 text-xs mt-3 font-semibold">
              Rule: Mild = survival, Spicy = hospital risk.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(112,0,255,0.3)"
            className="rounded-2xl p-6 bg-black/40 backdrop-blur-md border border-purple-700/40 shadow-lg shadow-purple-900/40">
            <h3 className="text-lg font-bold text-white mb-2">Pune IT Traffic Hours</h3>
            <p className="text-gray-300 text-sm">
              Hinjawadi traffic feels like a boss battle.
            </p>
            <p className="text-yellow-400 text-xs mt-3 font-semibold">
              Rule: 9–11 AM & 6–8 PM = avoid.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(120,120,255,0.3)"
            className="rounded-2xl p-6 bg-black/40 backdrop-blur-md border border-purple-700/40 shadow-lg shadow-purple-900/40">
            <h3 className="text-lg font-bold text-white mb-2">Night Travel Safety</h3>
            <p className="text-gray-300 text-sm">
              Mumbai safer than most — still stay alert.
            </p>
            <p className="text-yellow-400 text-xs mt-3 font-semibold">
              Rule: Stick to crowded, lit routes.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0,255,150,0.3)"
            className="rounded-2xl p-6 bg-black/40 backdrop-blur-md border border-purple-700/40 shadow-lg shadow-purple-900/40">
            <h3 className="text-lg font-bold text-white mb-2">Maharashtra Slang</h3>
            <p className="text-gray-300 text-sm">
              Jhakaas. Kadak. Ek number. Scene tight.
            </p>
            <p className="text-yellow-400 text-xs mt-3 font-semibold">
              Rule: Slang = culture flex.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(255,200,0,0.3)"
            className="rounded-2xl p-6 bg-black/40 backdrop-blur-md border border-purple-700/40 shadow-lg shadow-purple-900/40">
            <h3 className="text-lg font-bold text-white mb-2">Fort Trekking Rules</h3>
            <p className="text-gray-300 text-sm">
              Western Ghats are slippery during monsoon.
            </p>
            <p className="text-yellow-400 text-xs mt-3 font-semibold">
              Rule: No trekking after 5 PM.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(255,255,255,0.3)"
            className="rounded-2xl p-6 bg-black/40 backdrop-blur-md border border-purple-700/40 shadow-lg shadow-purple-900/40">
            <h3 className="text-lg font-bold text-white mb-2">First Week Adaptation</h3>
            <p className="text-gray-300 text-sm">
              Coastal food can confuse your stomach.
            </p>
            <p className="text-yellow-400 text-xs mt-3 font-semibold">
              Rule: Packaged water for 7–10 days.
            </p>
          </SpotlightCard>

        </div>
      </section>


    </main>
  );
}
