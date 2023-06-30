export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/trips", "/appointment", "/properties", "/favorites"],
};
