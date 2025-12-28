"use client";

import { useState } from "react";
import GooeyNav from "@/app/components/GooeyNav/GooeyNav";
import Particles from "@/app/components/Particles/Particles";
import GradientText from "@/app/components/GradientText/GradientText";
import { Section as MotionSection, Div as MotionDiv } from "@/app/components/ClientMotion";

const items = [
  { label: "Home", href: "/" },
  { label: "Ask", href: "/ask" },
  { label: "About", href: "/about" },
];

export default function AskPage() {
  const [city, setCity] = useState("Any");
  const [context, setContext] = useState("Any");
  const [topic, setTopic] = useState("Food");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city,
          context,
          topic,
          question,
        }),
      });

      const data = await response.json();
      console.log("AI Answer:", data.answer);
      setAnswer(data.answer || "Kay Karu? does not have proper local info for this. Try asking differently.");
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Kay Karu? does not have proper local info for this. Try asking differently.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative w-full overflow-x-hidden overflow-y-auto">

      {/* Ask Hero Section with Particles */}
      <MotionSection
        className="relative min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Particles Layer */}
        <div className="absolute inset-0 -z-10 bg-black">
          <Particles
                      particleColors={['#ffffff']}
                      particleCount={500}
                      particleSpread={10}
                      speed={0.1}
                      particleBaseSize={100}
                      moveParticlesOnHover={true}
                      alphaParticles={false}
                      disableRotation={false} className={undefined}          />
        </div>

        {/* Gooey Nav */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
          <GooeyNav
            items={items}
            particleCount={25}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={1} // Ask active
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 8, 2, 7, 9, 1, 3]}
          />
        </div>

        {/* ASK FORM */}
        <MotionDiv
          className="max-w-xl w-full mx-auto mt-40 px-6 py-8 rounded-2xl
          bg-gradient/70 backdrop-blur-xl text-white border border-white/10 shadow-xl "
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <GradientText
            colors={["#ff8500", "#ff007a", "#ff8500"]}
            animationSpeed={3}
            className="text-center text-3xl font-bold mb-3 mt-5"
          >
            Kay Karu?
          </GradientText>

          <p className="text-center text-gray-300 text-sm mb-6">
            Ask anything about Maharashtra — food, culture, slang, travel, safety.
          </p>


          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* City */}
            <div>
              <label className="text-sm text-gray-400">City / Region</label>
              <select
                className="w-full mt-1 p-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-pink-400"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {["Any", "Mumbai", "Pune", "Nagpur", "Kolhapur", "Nashik", "Rural Maharashtra"]
                  .map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            {/* Time */}
            <div>
              <label className="text-sm text-gray-400">Situation / Time</label>
              <select
                className="w-full mt-1 p-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-pink-400"
                value={context}
                onChange={(e) => setContext(e.target.value)}
              >
                {["Any", "Morning", "Evening", "Traffic Rush", "Monsoon", "Summer", "Festival"]
                  .map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            {/* Topic */}
            <div>
              <label className="text-sm text-gray-400">Topic</label>
              <select
                className="w-full mt-1 p-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-pink-400"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                {["Food", "Slang", "Travel", "Traffic", "Safety", "Culture"]
                  .map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            {/* Question */}
            <div>
              <label className="text-sm text-gray-400">Your Question</label>
              <textarea
                className="w-full mt-1 p-3 h-28 bg-black/50 text-white border border-gray-700
                rounded-xl resize-none focus:border-pink-400"
                placeholder="Example: Is it normal to eat misal pav spicy in Kolhapur?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r 
              from-orange-500 to-pink-500 shadow-xl hover:scale-105 active:scale-95 transition-transform text-lg
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? "Thinking..." : "Kay Karu?"}
            </button>
          </form>

          {/* Answer Display */}
          {answer && (
            <div className="mt-6 p-5 bg-black/70 border-2 border-yellow-500 rounded-xl max-w-full">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Kay Karu? says:</h3>
              <div className="text-white text-base whitespace-pre-wrap leading-relaxed break-words">
                {answer}
              </div>
            </div>
          )}
        </MotionDiv>
      </MotionSection>
    </main>
  );
}
