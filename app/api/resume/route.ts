import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "Sarvesh_Yadav_6th_JUNE.pdf",
    );
    const data = await fs.readFile(filePath);

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Sarvesh_Yadav_6th_JUNE.pdf"`,
      },
    });
  } catch (err) {
    console.error("Resume file read error:", err);
    return new Response("Resume not found", { status: 404 });
  }
}
