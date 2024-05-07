"use client";

export default function Login() {
	return (
		<div>
			<h1>Login</h1>
			<p>Please login</p>
			<form method="post" action="/api/login" className="row">
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email"/>
				<label htmlFor="password"></label>
				<input type="password" name="password" id="password"/>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}