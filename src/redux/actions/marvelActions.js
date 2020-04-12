import * as type from "./actionType";
import { getComics } from "../../api/comicsApi";

export function loadComicsSuccess(comics) {
	return {
		type: type.LOAD_COMICS_SUCCESS,
		comics: comics,
	};
}

export function loadComics() {
	return function (dispatch) {
		return getComics().then((data) => {
			dispatch(loadComicsSuccess(data.data.results));
			console.log(data.data.results);
		});
	};
}
