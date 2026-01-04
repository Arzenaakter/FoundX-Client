import { NextResponse, NextRequest } from "next/server";

const authRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedRoutes;
const roleBasedRoutes = {
  ADMIN: [/^\/admin/],
  USER: [/^\/profile/],
};
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // const user = undefined;
  const user = { role: "USER" };

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile", "/admin", "/login", "/register"],
};
