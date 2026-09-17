import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (
    request.nextUrl.pathname === "/get-involved" &&
    request.nextUrl.searchParams.get("sent") === "1"
  ) {
    const url = request.nextUrl.clone();
    url.search = "";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/get-involved"],
};
