import { withAuth } from "next-auth/middleware";
import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

export default withAuth(
    function middleware(req: NextRequest) {
        //
        if(req.nextUrl.pathname.includes("/user/")) {
            console.log("Next Middleware Hit!")
        }
        
        return NextResponse.redirect("/");
    },
)



export const middleware = (request : Request) => {
    const origin = request.headers.get('origin');
    console.log(origin);

    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');

    console.log('Middleware!');
}

export const config = {
    matcher: ["/api/:path*"],
};


// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/user/:path*"],
// }