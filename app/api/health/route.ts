import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    ts: new Date().toISOString(),
    commitHash: process.env.COMMIT_HASH || 'dev',
  });
}
