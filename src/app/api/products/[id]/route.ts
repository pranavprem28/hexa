import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const id = req.url.split("/").pop()
  if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 })

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
      cache: "no-store",
    })
    if (!res.ok) return NextResponse.json({ error: "Failed" }, { status: res.status })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}