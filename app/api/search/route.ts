import axios from "axios";
import { useSearchParams } from "next/navigation";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // console.log("req", req);
  const { searchParams } = new URL(req.url);
  const vin = searchParams.get("vin");
  // console.log("searchStr", searchStr);
  // const searchParams = useSearchParams();
  // const { q } = req.query;
  // console.log("q", q);
  // const search = searchParams.get("search");
  const res = await axios(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${vin}`
  ).then((res) => {
    return res.data;
  });
  return NextResponse.json(res);
  // console.log("res", res);
  // const searchStr = request.url.searchParams.get("searchStr");
  // console.log("request", searchStr);
  // const queryString = request
  // const res = await axios(
  //   `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=WP0AG2A7XLL145332`
  // );
}
