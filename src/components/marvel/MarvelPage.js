import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as marvelActions from "../../redux/actions/marvelActions";

class MarvelPage extends Component {
	componentDidMount() {
		const { comics } = this.props;
		// controllo se sono già stati caricati i dati, se lo sono già non è il caso di effettuare una nuova chiamatata.
		if (comics.length === 0) {
			this.props.loadComics().catch((err) => {
				alert("something was wrong " + err);
			});
		}
	}

	render() {
		const { comics } = this.props;

		return (
			<>
				<div className='jumbotron bg-marvel'>
					<h1>Marvel page</h1>
					<p>the best comics in the world</p>
				</div>
				<div className='grid'>
					{comics.map((comic, index) => {
						const img = `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`;
						console.log(img);
						return (
							<div key={index} className='card'>
								<img src={img} className='card-img-top' alt={comic.title} />
								<div className='card-body'>
									<h5 className='card-title'>{comic.title}</h5>
									<p className='card-text'>{comic.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</>
		);
	}
}

MarvelPage.propTypes = {
	loadComics: PropTypes.func,
	comics: PropTypes.array,
};

const mapStateToProps = (state) => {
	return {
		comics: state.comics,
	};
};

// tutte le azioni che andrò a creare saranno automaticamente disponibili in this.props come funzioni
function mapDispatchToProps(dispatch) {
	return bindActionCreators(marvelActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MarvelPage);
