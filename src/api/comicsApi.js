const ts = "aòkjdfhakh";
const publKey = "01fcb80cc8c6ef5e1a761b5b78583ac7";
const hash = "2d3a9e59c6b922812b9c3a00312ba833";
// const comics = "comics";
const endpoint = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publKey}&hash=${hash}`;

export async function getComics() {
	const response = await fetch(endpoint);
	return response.json();
}
