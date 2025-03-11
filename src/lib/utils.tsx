import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getS3Client() {
  // @ts-ignore
  const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY,
      secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESS_KEY,
    },
  });
  return s3Client;
}

export function getAwsPutCommand(objectKey, type = "") {
  return new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: objectKey,
    ContentType: type,
  });
}

export function getAwsGetCommand(objectKey) {
  return new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: objectKey,
  });
}
