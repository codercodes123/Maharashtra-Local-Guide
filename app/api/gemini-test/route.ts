import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { answer: "Please provide text input." },
        { status: 400 }
      );
    }

    // Check API key
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json(
        { answer: "Gemini test failed. Check API key or model." },
        { status: 500 }
      );
    }

    // Call Gemini API with gemini-2.0-flash model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash"
    });

    const result = await model.generateContent(text);
    const response = result.response;
    const answer = response.text().trim();

    // Log output to console
    console.log("Gemini Response:", answer);

    return NextResponse.json({ answer });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { answer: "Gemini test failed. Check API key or model." },
      { status: 500 }
    );
  }
}
