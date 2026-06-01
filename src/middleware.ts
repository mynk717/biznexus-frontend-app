import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Protect admin routes
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.headers.get('authorization')?.replace('Bearer ', '') ||
                  request.cookies.get('admin_token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    try {
      // Verify JWT
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      )
      return NextResponse.next()
    } catch (e) {
      // Token invalid
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Ensure admin pages have noindex/nofollow
  if (pathname.startsWith('/admin')) {
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
