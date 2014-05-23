$( document ).ready(function() {

	$("img").each(function() {
		// récupère le lien

		var link = ($(this).attr('src'));

		/*$.ajax({
		  url: link,
		  type: 'GET',
		  statusCode: {
		    404: function() {
		      alert("test");
		    },
		    202: function() {
		    	alert("202");
		    },
		    200: function() {
		    	alert("200");
		    },
		    302: function() {
		    	alert("302");
		    },
		    0: function() {
		    	alert("erreur");
		    }
		  }
		});*/

		$.ajax({
		    type: 'GET',
		    url: link,
		    statusCode: {
			    400: function() {
			      alert('400  user error');
			    },
			    500: function() {
			      alert('500  server error');
			    },
			    404: function() {
			      alert('404  user error');
			    },
			    200: function() {
			      alert('200  user error');
			    }
			  }
		    /*success: function(data){
		        alert('horray! 200 status code!');
		    },
		    error: function(data){
		        //get the status code
		        if (code == 400) {
		            alert('400 status code! user error');
		        }
		        if (code == 500) {
		            alert('500 status code! server error');
		        }
		    },*/
		});



	});
});
