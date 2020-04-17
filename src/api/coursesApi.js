export async function getCourses() {
	const endpoint = "http://localhost:3000/courses";
	const response = await fetch(endpoint);
	return response.json();
}
