import { NextRequest, NextResponse } from "next/server";
import { ApiError, contactsApi } from "../contactsApi";

export async function GET(req: NextRequest) {
  try {
    const hasWork = req.nextUrl.searchParams.get("hasWork");
    const { data } = await contactsApi("/contacts", {
      params: {
        hasWork,
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
