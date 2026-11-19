import { NextRequest, NextResponse } from "next/server";
import { ApiError, usersApi } from "../usersApi";

export async function GET(request: NextRequest) {
  try {
    const isOnline = request.nextUrl.searchParams.get("isOnline");
    const { data } = await usersApi.get("/users", {
      params: {
        isOnline,
      },
    });
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data } = await usersApi.post("/users", body);
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
