import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const SYSTEM_PROMPT = `You are "Kay Karu?", the Maharashtra Local Guide AI.

Your knowledge must come ONLY from the product.md content provided below.

STRICT OUTPUT RULES:
- Respond ONLY in clear ENGLISH
- Must be region-specific (Mumbai vs Pune vs Nagpur vs Nashik vs Kolhapur)
- Must use the question's time/situation context
- Must follow EXACT format:

-----------------------------------
Official Advice:
<neutral, logical, safe recommendations>

Local Maharashtra Reality:
<real, practical, city-based truth + travel culture + people behavior>
-----------------------------------

If product.md does not provide enough local knowledge:
Respond exactly:
"Kay Karu? does not have proper local info for this. Try asking differently."`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { city, context, topic, question } = body;

    if (!question || question.trim().length === 0) {
      return NextResponse.json(
        { answer: "Please ask a valid question." },
        { status: 400 }
      );
    }

    // Load product.md
    const productMdPath = path.join(process.cwd(), ".kiro", "product.md");
    let productMdContent = "";

    try {
      productMdContent = fs.readFileSync(productMdPath, "utf-8");
    } catch (error) {
      console.error("Error loading product.md:", error);
    }

    const userContent = `KNOWLEDGE BASE:
${productMdContent}

USER INPUT:
City: ${city || "Any"}
Time/Situation: ${context || "Any"}
Topic: ${topic || "General"}
Question: ${question}`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Kay Karu Local Guide",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "qwen/qwen-2.5-7b-instruct",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userContent }
        ],
        temperature: 0.7,
        max_tokens: 1024
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error("OpenRouter API Error:", data);
      return NextResponse.json(
        { answer: "Kay Karu? is confused right now. Try again later." },
        { status: 500 }
      );
    }

    const answer = data.choices?.[0]?.message?.content?.trim() || "Kay Karu? does not have proper local info for this. Try asking differently.";
    console.log("Full AI Response:", answer);

    return NextResponse.json({ answer });

  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { answer: "Kay Karu? is confused right now. Try again later." },
      { status: 500 }
    );
  }
}
