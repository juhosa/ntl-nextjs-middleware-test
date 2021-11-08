import { NextResponse } from "next/server";

const allowedParams = ["allowed_param"];

export function middleware(req) {
  const url = req.nextUrl;
  let changed = false;

  url.searchParams.forEach((_, key) => {
    if (!allowedParams.includes(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });

  if (changed) {
    return NextResponse.redirect(url);
    // rewrite doesn't seem to work
    // return NextResponse.rewrite(url);
  }
}
