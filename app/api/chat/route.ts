import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import {sarveshBio} from "@/app/data/bio";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
console.error("THis is api key",process.env.GOOGLE_API_KEY!);
export async function POST(req: Request) {
  try {
  console.log("Message coming ", Request);
    const { messages } = await req.json();
    console.log("Message received", messages);
    const userMsg = messages[messages.length - 1].content;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
    You are an AI assistant that represents Sarvesh Yadav. 
    Use the following information to answer questions about him:
    ${sarveshBio}

    Question: ${userMsg}
    `;
    const result = await model.generateContent(prompt);

    console.log("Response generated", result.response.candidates?.[0]?.content?.parts?.[0]?.text);
    return NextResponse.json({ reply: result.response.text() });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json({ error: "The AI is currently busy. Please try again later." }, { status: 500 });
  }
}
