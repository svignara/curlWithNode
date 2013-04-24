var express = require("express")
	, curl = require("curlrequest")
	, app = express()
	;

app.get('/curlRequest', function (req, res) {
	
	var reqURL = ''
		, options = { url: reqURL, include: true }
		;

	curl.request(options, function (err, parts) {
	    	parts = parts.split('\r\n');
	    	var data = parts.pop()
	      		, head = parts.pop()
	      		;
	      	
	      	res.header('Content-Type', 'application/json');
  		res.header('Charset', 'utf-8')
	      	res.send( 'resData(' + data + ');' );

	      	/*
		*Sample Request would look like:
		* $.ajax({
               *        dataType: 'jsonp',                    
               *        jsonpCallback: 'resData',
               *        url: 'http://localhost:3000/curlRequest',                    
               *        success: function(data) {
               *            console.log(data);               
               *        }
               * });
	      	*/
	});

});

app.listen(3000); 
