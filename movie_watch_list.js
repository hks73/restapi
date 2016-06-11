const BASE_URL = "http://www.omdbapi.com"
const REPONSE_FORMAT_QUERY_PARAMETER = "&r=json"
var incr = 1;
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

function addHeader() {
	headerInfoElement = document.getElementById("header-info");
	headerInfoElement.lastElementChild.lastElementChild.previousElementSibling.style.display="inline";
	headerInfoElement.lastElementChild.lastElementChild.style.display="none";
	var node = document.createElement("DIV");
	var id = "header"+incr;
	node.setAttribute("id",id);
	inputField = '<input type="text" name="key" placeholder="Key">'+
					'<input type="text" name="key" placeholder="Value">'+
					'<i class="fa fa-close" onclick="removeHeader('+
					"'"+id +"'"+
					')" style="display:none;"></i>'+
					'<i class="fa fa-plus-square" onclick="addHeader()" ></i>';
	node.innerHTML = inputField;
	incr++;
	headerInfoElement.appendChild(node);
}

function removeHeader(elementID){
	if(document.getElementById(elementID)){
		console.log(elementID);
		child = document.getElementById(elementID);
		parent = document.getElementById("header-info");
		parent.removeChild(child);
	}
}
