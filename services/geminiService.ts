
import { GoogleGenAI, Type } from "@google/genai";
import { ErrandPlan } from "../types";

// Fix: Followed guidelines to use process.env.API_KEY directly and upgrade to gemini-3-pro-preview for complex reasoning tasks
export const planErrand = async (query: string): Promise<ErrandPlan> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Plan the following errand logistics for a user: "${query}". Provide a professional breakdown.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          steps: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Step by step logical plan for the errand"
          },
          estimatedTime: {
            type: Type.STRING,
            description: "Estimated time duration for the whole process"
          },
          costEstimate: {
            type: Type.STRING,
            description: "A rough estimate of the service fee for Nibbo to handle this"
          },
          summary: {
            type: Type.STRING,
            description: "A concise summary of the plan"
          }
        },
        required: ["steps", "estimatedTime", "costEstimate", "summary"]
      }
    }
  });

  // Fix: Accessing .text as a property as per GenerateContentResponse guidelines
  const result = response.text;
  return JSON.parse(result || "{}") as ErrandPlan;
};