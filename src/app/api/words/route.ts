import words from "../../../../words.json";

export async function GET() {
  try {
    if (!Array.isArray(words.words)) throw new Error("Invalid words data.");
    return new Response(JSON.stringify(words.words), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
