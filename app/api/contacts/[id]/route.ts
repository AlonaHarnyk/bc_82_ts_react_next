import { NextRequest, NextResponse } from "next/server";
import { contactsApi } from "../../contactsApi";
import { ApiError } from "../../booksApi";

interface SingleContactParams {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: SingleContactParams) {
  try {
    const { id } = await params;
    const { data } = await contactsApi(`/contacts/${id}`);
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
