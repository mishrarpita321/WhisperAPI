const fs = require("fs");
const OpenAI = require("openai");
require("dotenv").config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);

async function main() {
    console.log("Inside main")
  try {
    const filePath = "Digits.m4a";  
    console.log("File path:", filePath);
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(filePath),
      model: "whisper-1",
    });
    console.log("Transcription:", transcription.text);
  } catch (error) {
    console.error("Error during transcription:", error.message);
  }
}

main();