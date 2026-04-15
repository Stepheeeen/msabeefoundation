import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decryptSession } from './lib/auth'

// 1. Specify protected and public routes
const protectedRoutes = ['/admin', '/api/admin']
const publicRoutes = ['/api/auth/login', '/api/auth/logout']

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))
  const isPublicRoute = publicRoutes.some(route => path.startsWith(route))

  // 3. Decrypt the session from the cookie
  const cookie = req.cookies.get('msabee_session')?.value
  let session = null
  
  if (cookie) {
    try {
      session = await decryptSession(cookie)
    } catch (e) {
      // Invalid session
    }
  }

  // 4. Redirect to login if the user is not authenticated and trying to access a protected route
  // We allow access to '/admin' itself because it renders the login form when not authenticated
  // But we protect all sub-routes of /admin and all /api/admin routes.
  if (isProtectedRoute && !session) {
    // For API routes, return 401
    if (path.startsWith('/api/admin')) {
      return NextResponse.json({ message: 'Unauthorized terminal access' }, { status: 401 })
    }
    
    // For frontend admin sub-pages, redirect to main admin login
    if (path !== '/admin') {
      return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }
  }

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
