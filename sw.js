self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('Restaurant-Reviews-v1.0')
		.then(function(response) {
			response.addAll(
				[ '/',
					'index.html',
					'restaurant.html',
					'js/dbhelper.js',
					'js/main.js',
					'js/restaurant_info.js',
					'css/styles.css',
					'data/restaurants.json',
					'img/1.jpg',
					'img/2.jpg',
					'img/3.jpg',
					'img/4.jpg',
					'img/5.jpg',
					'img/6.jpg',
					'img/7.jpg',
					'img/8.jpg',
					'img/9.jpg',
					'img/10.jpg']
			)})
	  );
  });

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				if (response)
					return response
				else
					return fetch(event.request);
			})
	)
});