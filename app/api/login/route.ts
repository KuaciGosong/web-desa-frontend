import { getJsonFromFormData } from "@/lib/util";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const body = await getJsonFromFormData(await request.formData());

	const res = await fetch('http://localhost:8000/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
	
	if (!res.ok) {
		return notFound();
	}

	const json = await res.json();
	const cookieStore = cookies();

	cookieStore.set({
		name: 'token',
		value: json.token,
		maxAge: 60 * 60 * 24 * 7,
		sameSite: 'strict',
		secure: true,
		httpOnly: true,
		path: '/',
	});

	return redirect('/')
}
