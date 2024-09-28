import { NextResponse } from "next/server";

export const middleware = () => {
    // const { pathname } = request.nextUrl;
    // const url = request.nextUrl.clone();
    

    // if (pathname.startsWith('/dashboard/admin') && request.cookies.get('token')) {
    //     return NextResponse.redirect(new URL('/auth/login', request.url));
    // }
    // else if (pathname.startsWith('/dashboard/admin') &&!request.cookies.get('token')) {
    
    
    return NextResponse.next();

}