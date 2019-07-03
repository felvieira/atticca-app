var app = {
	// Application Constructor
	initialize: function () {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		document.addEventListener('deviceready', function () {
			// Enable to debug issues.
			// window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

			var notificationOpenedCallback = function (jsonData) {
				console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
			};

			// Call syncHashedEmail anywhere in your app if you have the user's email.
			// This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
			// window.plugins.OneSignal.syncHashedEmail(userEmail);
		}, false);
	},

	// deviceready Event Handler
	//
	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	onDeviceReady: function () {
		this.receivedEvent('deviceready');

		window.open = cordova.InAppBrowser.open;

		window.open('https://consignado.moneyp.com.br/aticca', "_self", 'location=no,toolbar=no,hardwareback=no');

		// document.addEventListener('click', function (e) {
		// 	if (e.target.tagName === 'A' &&
		// 		e.target.href.match(/^https?:\/\//)) {
		// 		e.preventDefault();
		// 		window.open(e.target.href, '_system');
		// 	}
		// });



		document.addEventListener("backbutton", onBackKeyDown, false);

		function onBackKeyDown(e) {
			e.preventDefault();
		}

	},

	// Update DOM on a Received Event
	receivedEvent: function (id) {
		// console.log('Received Event: ' + id);
	},
};

app.initialize();