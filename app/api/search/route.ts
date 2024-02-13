import axios from "axios";
// import { useSearchParams } from "next/navigation";
// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const vin = searchParams.get("vin");
  const res = await axios(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${vin}`
  ).then((res) => {
    return res.data;
  });
  return NextResponse.json(res);
}
