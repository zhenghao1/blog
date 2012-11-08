require.config({
	paths: {
		backbone: '/assets/global/js/libs/backbone/0.9.1/backbone-min',
		handlebars: '/assets/global/js/libs/handlebars/1.0.beta.6/handlebars',
		jquery: '/assets/global/js/libs/jquery/1.7.1/jquery.min',
		text: '/assets/global/js/libs/requirejs/text',
		underscore: '/assets/global/js/libs/underscore/1.3.1/underscore-min'
	}
});

require(['blog'], 
	function(blog) { 
		var app_view = new blog();
	});