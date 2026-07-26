import { NextResponse } from "next/server";

export async function GET() {
  const xmlContent = `<?xml version="1.0"?>
<users>
	<user>6B5176165543C9FDD35835E961986347</user>
</users>`;

  return new NextResponse(xmlContent, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}