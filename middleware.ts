import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token');

  const requestHeaders = new Headers(req.headers)

  if (token) {
    console.info('Cookie hit')
    requestHeaders.set('x-access-token', token.value);
  } else {
    console.info('Cookie miss')
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
    });

    response.cookies.set('access_token', requestHeaders.get('x-access-token') as string, {
      //todo: set secure to true in production
      httpOnly: true,
      path: '/',
      expires: new Date(Date.now() + data.expires_in * 1000),
    })

    return response
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}
