import { NextResponse } from "next/server"

export async function GET() {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()

  return NextResponse.json(data)
}