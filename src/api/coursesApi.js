const endpoint = "http://localhost:3000/courses";

export async function getCourses() {
  const response = await fetch(endpoint);
  return response.json();
}

export async function postCourse(data) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
