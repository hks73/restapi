var incr = 1;

function hitApi(url,method,body){
	xhr = new XMLHttpRequest();
	if(url.length!=0){
		xhr.open(method,url,true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
		    	showTheResponseStatus(xhr.status);
				showTheResponseBody(xhr.responseText);	
			}
		};
		// getHeaderList(xhr);

		headerInfo = document.getElementById("header-info").childNodes;
		for(i=0;i<headerInfo.length;i++){
			if(headerInfo[i].nodeType == 1) 
			{ //elemen node
				key=headerInfo[i].firstElementChild.value;
				value=headerInfo[i].firstElementChild.nextElementSibling.value;
				if(key.length!=0 || value.length!=0){
					xhr.setRequestHeader(key,value);
				}
			}
		}
		if(body.length==0){
			xhr.send();
		}else{
			xhr.send(body);
		}
	}else{
		showTheResponseBody("Enter url");
	}
}


function showTheResponseBody(responseBody){
    document.getElementById("response_body").innerHTML = responseBody;
}

function showTheResponseStatus(responseStatus){
	document.getElementById("response_status").innerHTML = responseStatus;	
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
