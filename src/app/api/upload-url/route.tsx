import { getAwsPutCommand, getS3Client } from "@/lib/utils";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { objectType, imageName } = await req.json();
    const s3Client = getS3Client();

    const fileExtension = String(imageName).split(".").pop();
    const uniqueId = crypto.randomBytes(8).toString("hex");
    const objectKey = `user-uploads/${imageName}-${Date.now()}-${uniqueId}.${fileExtension}`;
    const command = getAwsPutCommand(objectKey, objectType);

    const url = await getSignedUrl(s3Client, command);
    return NextResponse.json({ url, objectKey }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate pre-signed URL" },
      { status: 500 }
    );
  }
}
