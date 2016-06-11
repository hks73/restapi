const BASE_URL = "http://www.omdbapi.com"
const REPONSE_FORMAT_QUERY_PARAMETER = "&r=json"
var xhr;
function hitOmdbApi(movieName){
	findMovieByName(movieName);
}

//http://www.omdbapi.com/?t=&y=2013&plot=short&r=json
function findMovieByName(movieName){
	xhr = new XMLHttpRequest();
	xhr.open('POST',BASE_URL+"?t="+movieName+REPONSE_FORMAT_QUERY_PARAMETER,false);
	xhr.send();
	if(xhr.status==200){
		responseBody = JSON.parse(xhr.responseText)
		if(responseBody.hasOwnProperty('Response')){
			if(responseBody.Response == "True"){
				showTheMovieDetails(responseBody);
			}
			else{
				showTheErrorMessage(responseBody.Error);
			}
		}
	}
}

function showTheMovieDetails(responseBody){
	var movieDetails = '<p> Title : ' + responseBody.Title +
    					'Year : ' + responseBody.Year +
    					'Rating : ' + responseBody.Rated +
    	     			'</p>';
    document.getElementById("movie_detail").innerHTML = movieDetails;
}

function showTheErrorMessage(errorMsg){
	error = '<p>' + errorMsg + '</p>';
	document.getElementById("error_detail").innerHTML = error;	
}