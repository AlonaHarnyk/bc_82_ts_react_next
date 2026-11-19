import { NextRequest, NextResponse } from "next/server";
import { ApiError, booksApi } from "../../booksApi";

interface SingleBookParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: SingleBookParams) {
  try {
    const { id } = await params;
    const { data } = await booksApi.get(`/books/${id}`);
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

export async function PUT(request: NextRequest, { params }: SingleBookParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { data } = await booksApi.put(`/books/${id}`, body);
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
