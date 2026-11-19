import { NextRequest, NextResponse } from "next/server";
import { ApiError, booksApi } from "../booksApi";

export async function GET(request: NextRequest) {
  try {
    const isRead = request.nextUrl.searchParams.get("isRead");

    const { data } = await booksApi.get("/books", {
      params: {
        isRead,
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
    const { data } = await booksApi.post("/books", body);
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
