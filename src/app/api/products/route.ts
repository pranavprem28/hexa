import { NextResponse } from "next/server"

export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    })

    if (!res.ok) {
      return NextResponse.json([], { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json([], { status: 500 })
  }
}