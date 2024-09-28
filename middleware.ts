import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token');

  const requestHeaders = new Headers(req.headers)

  if (token) {
    requestHeaders.set('x-access-token', token);
  } else {
    const accessTokenResponse = await fetch(`${process.env.API_URL}access_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'grant_type': 'client_credentials',
        'client_id': process.env.API_CLIENT_ID,
        'client_secret': process.env.API_CLIENT_SECRET,
        'scope': ['product_read']
      }),
    })

    const data = await accessTokenResponse.json()

    requestHeaders.set('x-access-token', data.access_token);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })

    response.cookies.set('access_token', data.access_token, {
      expires: new Date(Date.now() + data.expires_in * 1000),
      httpOnly: true,
    })

    return response
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}
