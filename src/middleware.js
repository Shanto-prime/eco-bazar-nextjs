import { NextResponse } from 'next/server'

const authRoutes = [
    "/profile",
    "/cart"
]

const isLogged = true;
 
export default function middleware(request) {

  if (request.nextUrl.pathname.startsWith('/profile')) {

    if(!isLogged){
        return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}