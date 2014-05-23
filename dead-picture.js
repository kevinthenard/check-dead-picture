$( document ).ready(function() {

	$("img").each(function() {
		// récupère le lien

		var link = ($(this).attr('src'));

		$.ajax({
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
		  }/*,*/
		  // success: function() {
		  //   alert("good");
		  // },
		  // error: function(){
		  // 	alert('pas good');
		  // }

		});
	});
});
