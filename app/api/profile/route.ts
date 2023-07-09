import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "../../../app/libs/prismadb";
import getCurrentUser from "../../../app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name, imgSrc, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const listing = await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      name: name,
      image: imgSrc,
      hashedPassword: hashedPassword ?
    },
  });

  return NextResponse.json(listing);
}
