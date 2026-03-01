import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  console.log("Request URL:", request.url)

  return NextResponse.next()
}