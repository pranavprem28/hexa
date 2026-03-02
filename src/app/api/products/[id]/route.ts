import { NextResponse } from "next/server"

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
      cache: "no-store",
    })

    if (!res.ok) {
      return NextResponse.json(null, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json(null, { status: 500 })
  }
}