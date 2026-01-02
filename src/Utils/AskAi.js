import React from "react";
import { GoogleGenAI } from "@google/genai";
import { ClockFading } from "lucide-react";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyD_Q18mLzA253pPNJgH259uS1SMLr-Auc8",
});

export default async function askAi(data, doctorData) {


  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: `
YOU ARE AN EXPERT MEDICAL ASSISTANT WITH A CLEAR GOAL TO SUGGEST THE RIGHT DOCTOR BY REVIEWING THE PATIENT'S DESCRIPTION AND THEIR SYMPTOMS.

YOU HAVE TO ANALYZE THE DOCTORS LIST IN THE FOLLOWING FORMAT:
${doctorData}

YOU MUST FOLLOW THE RESPONSE FORMAT STRICTLY:
{
  "id": "DOCTOR_ID"
}

IN THE RESPONSE, ONLY RETURN THE DOCTOR ID IN A VALID JSON FORMAT.
DO NOT ADD COMMENTS, EXTRA SPACES, BRACKETS, OR ANY OTHER CHARACTERS.

THE PATIENT DESCRIPTION IS AS FOLLOWS:
{
  "name": "${data.name}",
  "age": "${data.age}",
  "gender": "${data.gender}",
  "descOfProblem": "${data.descOfProblem}"
}
    `,
  });

  console.log(JSON.parse(response.text));
  return JSON.parse(response.text);
}
