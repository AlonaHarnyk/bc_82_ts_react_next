// export async function getUserById(id: string): Promise<User> {
//   const { data } = await usersApi.get<User>(`/users/${id}`);
//   return data;
// }

import { NextRequest, NextResponse } from "next/server";
import { ApiError, usersApi } from "../../usersApi";

interface SingleUserParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: SingleUserParams) {
  try {
    const { id } = await params;
    const { data } = await usersApi.get(`/users/${id}`);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status },
    );
  }
}
