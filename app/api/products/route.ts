import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const token = request.headers.get('x-access-token') as string;

  const response = await fetch(`${process.env.API_URL}products`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const data = await response.json()

  return NextResponse.json(data)
}
