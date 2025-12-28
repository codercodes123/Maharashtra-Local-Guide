"use client";

import { Section as MotionSection, Div as MotionDiv } from "@/app/components/ClientMotion";
import Particles from "@/app/components/Particles/Particles";
import GradientText from "@/app/components/GradientText/GradientText";
import GooeyNav from "@/app/components/GooeyNav/GooeyNav";

const items = [
  { label: "Home", href: "/" },
  { label: "Ask", href: "/ask" },
  { label: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-x-hidden overflow-y-auto">
      {/* About Hero Section */}
      <MotionSection
        className="relative min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Particles Layer */}
        <div className="absolute inset-0 -z-10 bg-black">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className={undefined}
          />
        </div>

        {/* Gooey Navigation */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 mt-3">
          <GooeyNav
            items={items}
            particleCount={25}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={2}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 8, 2, 7, 9, 1, 3]}
          />
        </div>

        {/* About Content */}
        <MotionDiv
          className="z-20 px-4 text-center text-white mt-45"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <GradientText
            colors={["#86c401ff", "#6bcfa0ff", "#21aff1ff", "#da67ecff", "#ffffff"]}
            animationSpeed={3}
            className="rounded-none bg-transparent shadow-none text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight "
          >
            About Kay Karu?
          </GradientText>

          {/* Subtitle */}
          <p className="text-gray-200 max-w-2xl text-lg mt-4">
            The Maharashtra Local Guide
          </p>

          <div className="mt-12 max-w-4xl mx-auto p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-purple-700/40 shadow-lg shadow-purple-900/40 space-y-6">

            <h3 className="text-2xl font-bold text-purple-300 text-center">Why Kay Karu?</h3>
            <p className="text-gray-200 leading-relaxed text-center">
              When people move to Maharashtra — whether for college, IT jobs, films,
              or dreams — they arrive confused about the culture. What to eat?
              How to travel? What slang to use? Which areas are safe?
              How do festivals affect daily life? Google gives generic answers.
              Locals give real truth.
            </p>

            <h3 className="text-xl font-semibold text-purple-300 text-center">What does Kay Karu? do?</h3>
            <p className="text-gray-300 leading-relaxed text-center">
              Kay Karu? is a hyper-local cultural intelligence guide.
              It uses AI + curated Maharashtra knowledge from product.md to help
              users make the right decisions — based on:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-center">
              <li>City differences (Mumbai vs Pune vs Kolhapur etc.)</li>
              <li>Situational context (rush hours, festivals, night safety)</li>
              <li>Local food habits & spice tolerance</li>
              <li>Transport etiquette & survival rules</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 text-center">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-center">
              To ensure no one struggles when adapting to Maharashtra —
              whether they are from Nagpur or Nepal.
            </p>
            <p className="text-gray-300 italic text-center">
              If Maharashtra is a new world — Kay Karu? is your local friend.
            </p>

            <h3 className="text-xl font-semibold text-purple-300 text-center">What makes it unique?</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-center">
              <li>Relies on real Maharashtra-specific knowledge</li>
              <li>Understands culture, not just language</li>
              <li>Adapts answers based on personality & place</li>
              <li>Stays updated with local scenarios</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 text-center">Built for You</h3>
            <p className="text-gray-300 leading-relaxed text-center">
              Ask anything — food, culture, survival hacks —
              Kay Karu? will guide you like a true Maharashtrian.
            </p>

            {/* Marathi Slang Section */}
            <div className="mt-8 pt-6 border-t border-purple-700/40">
              <h3 className="text-xl font-semibold text-orange-400 text-center mb-4">🗣️ Try These Marathi Slangs!</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-yellow-300 font-bold">Lai Bhari!</p>
                  <p className="text-gray-400 text-sm">Awesome / Too good!</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-yellow-300 font-bold">Ek Number!</p>
                  <p className="text-gray-400 text-sm">First class / Perfect!</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-yellow-300 font-bold">Bhau</p>
                  <p className="text-gray-400 text-sm">Bro / Brother (respect)</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-yellow-300 font-bold">Kanda Poha</p>
                  <p className="text-gray-400 text-sm">Classic Maharashtrian breakfast</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-yellow-300 font-bold">Chal Na!</p>
                  <p className="text-gray-400 text-sm">Come on / Let's go!</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-yellow-300 font-bold">Vatla Ka?</p>
                  <p className="text-gray-400 text-sm">Did you feel it? / Got it?</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center mt-6">
              Designed for Week-5 "Local Guide" challenge • Made with ❤️ and Optimized by KIRO
            </p>

          </div>
        </MotionDiv>
      </MotionSection>
    </main>
  );
}
