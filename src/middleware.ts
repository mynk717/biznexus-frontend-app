import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Protect admin routes
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check for admin token in headers or cookies
    const token = request.headers.get('authorization')?.replace('Bearer ', '') ||
                  request.cookies.get('admin_token')?.value

    if (!token || token !== process.env.ADMIN_TOKEN) {
      // Redirect to login or deny
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
