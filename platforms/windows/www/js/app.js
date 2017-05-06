// Ionic Starter App
var globalip = "https://www.dreamgraphs.com/web_service.php";
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic-datepicker','ngCordova'])

.run(function($ionicPlatform,$state,$ionicPopup,$ionicHistory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.views.transition('none');
  $ionicConfigProvider.tabs.position('bottom'); 
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.login', {
	url: '/login',
	views: {
	  'menuContent': {
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
	  }
	}
  })
  .state('app.register', {
	url: '/register',
	views: {
	  'menuContent': {
		templateUrl: 'templates/register.html',
		/*controller: 'registrationCtrl'*/
	  }
	}
  })
  .state('app.forgot-password', {
	url: '/forgot-password',
	views: {
	  'menuContent': {
		templateUrl: 'templates/forgot-password.html'
	  }
	}
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
	    controller: 'homeCtrl' 
      }
    }
  })
  .state('app.testing', {
    url: '/testing',
    views: {
      'menuContent': {
        templateUrl: 'templates/testing.html',
      }
    }
  })
  .state('app.challenges', {
	url: '/challenges',
	views: {
	  'menuContent': {
		templateUrl: 'templates/challenges.html',
		controller: 'challengesCtrl'
	  }
	}
  })
  .state('app.challenge-details', {
	url: '/challenge-details/:challenge_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/challenge-details.html',
		controller: 'challengeDetailsCtrl'
	  }
	}
  })
  .state('app.challenge~accept-this-challenge', {
	url: '/challenge~accept-this-challenge/:challenge_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/challenge~accept-this-challenge.html',
		controller: 'acceptThisChallengeCtrl'
	  }
	}
  })
  .state('app.challenge~giving-a-challenge', {
	url: '/challenge~giving-a-challenge/:challenge_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/challenge~giving-a-challenge.html',
		controller: 'givingThisChallengeCtrl'
	  }
	}
  })
  .state('app.friends-list', {
		url: '/friends-list',
		views: {
			'menuContent': {
				templateUrl: 'friends-list.html',
				controller: 'friendsListCtrl'
			}
		}
	})
	.state('app.users-list', {
		url: '/users-list',
		views: {
			'menuContent': {
				templateUrl: 'users-list.html',
				controller: 'usersListCtrl'
			}
		}
	})
  .state('app.retograma', {
	url: '/retograma/:retoID',
	views: {
	  'menuContent': {
		templateUrl: 'templates/retograma.html',
		controller: 'retogramaCtrl'
	  }
	}
  })
  .state('app.retograma~benefits', {
	url: '/retograma~benefits/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/retograma~benefits.html',
		controller: 'retogramaBenefitsCtrl'
	  }
	}
  })
  .state('app.retograma~date', {
	url: '/retograma~date',
	views: {
	  'menuContent': {
		templateUrl: 'templates/retograma~date.html',
	  }
	}
  })
  .state('app.retograma~progress', {
	url: '/retograma~progress/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/retograma~progress.html',
		controller: 'retogramaProgressCtrl'
	  }
	}
  })
  .state('app.retograma~bitacora-challenge', {
	url: '/retograma~bitacora-challenge/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/retograma~bitacora-challenge.html',
		controller: 'retogramaBitacoraChallengeCtrl'
	  }
	}
  })
  .state('app.retograma~instructions', {
	url: '/retograma~instructions/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/retograma~instructions.html',
		controller: 'retogramaInstructionsCtrl'
	  }
	}
  })
  .state('app.retograma~motivate', {
	url: '/retograma~motivate/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/retograma~motivate.html',
		controller: 'retogramaMotivateCtrl'
	  }
	}
  })
  .state('app.retograma~daily-entry', {
	url: '/retograma~daily-entry/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/retograma~daily-entry.html',
		controller: 'retogramaDailyentryCtrl'
	  }
	}
  })
  .state('app.recieved-challenges', {
	url: '/recieved-challenges',
	views: {
	  'menuContent': {
		templateUrl: 'templates/recieved-challenges.html',
		controller: 'recievedChallengesCtrl'
	  }
	}
  })
  .state('app.my-in-progress', {
	url: '/my-in-progress',
	views: {
	  'menuContent': {
		templateUrl: 'templates/my-in-progress.html',
		controller: 'myInProgressChallengesCtrl'
	  }
	}
  })
  .state('app.in-progress~my-challenges', {
	url: '/in-progress~my-challenges',
	views: {
	  'menuContent': {
		templateUrl: 'templates/in-progress~my-challenges.html'
	  }
	}
  })
  .state('app.my-in-failed', {
	url: '/my-in-failed',
	views: {
	  'menuContent': {
		templateUrl: 'templates/my-in-failed.html',
		controller: 'myInFailedChallengesCtrl'
	  }
	}
  })
  .state('app.my-in-failed~details', {
	url: '/my-in-failed~details/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/my-in-failed~details.html',
		controller: 'myInFailedDetailsCtrl'
	  }
	}
  })
  .state('app.my-achievements', {
	url: '/my-achievements',
	views: {
	  'menuContent': {
		templateUrl: 'templates/my-achievements.html',
		controller: 'myAchievementsCtrl'
	  }
	}
  })
  .state('app.achievements~details', {
	url: '/achievements~details/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/achievements~details.html',
		controller: 'myAchievementDetailsCtrl'
	  }
	}
  })
  .state('app.achievements~daily-entry', {
	url: '/achievements~daily-entry/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/achievements~daily-entry.html',
		controller: 'retogramaDailyentryCtrl'
	  }
	}
  })
  .state('app.send-challenges', {
	url: '/send-challenges',
	views: {
	  'menuContent': {
		templateUrl: 'templates/send-challenges.html',
		controller: 'sendChallengesCtrl'
	  }
	}
  })
  .state('app.send-challenge-details', {
	url: '/send-challenge-details/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/send-challenge-details.html',
		controller: 'sendChallengeDetailsCtrl'
	  }
	}
  })
  .state('app.wall', {
	url: '/wall',
	views: {
	  'menuContent': {
		templateUrl: 'templates/wall.html',
		controller: 'wallCtrl'
	  }
	}
  })
  .state('app.friend-without-accepted', {
	url: '/friend-without-accepted',
	views: {
	  'menuContent': {
		templateUrl: 'templates/friend-without-accepted.html',
		controller: 'friendWithoutAcceptedCtrl'
	  }
	}
  })
  .state('app.friend-without-accepted-details', {
	url: '/friend-without-accepted-details/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/friend-without-accepted-details.html',
		controller: 'friendWithoutAcceptedDetailsCtrl'
	  }
	}
  })
  .state('app.friend-in-progress', {
	url: '/friend-in-progress',
	views: {
	  'menuContent': {
		templateUrl: 'templates/friend-in-progress.html',
		controller: 'friendInProgressCtrl'
	  }
	}
  })
  .state('app.friend-in-progress-details', {
	url: '/friend-in-progress-details/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/friend-in-progress-details.html',
		controller: 'friendInProgressDetailsCtrl'
	  }
	}
  })
  .state('app.friend-challenges~daily-entry', {
	url: '/friend-challenges~daily-entry/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/friend-challenges~daily-entry.html',
		controller: 'retogramaDailyentryCtrl'
	  }
	}
  })
  .state('app.friend-in-failed', {
	url: '/friend-in-failed',
	views: {
	  'menuContent': {
		templateUrl: 'templates/friend-in-failed.html',
		controller: 'friendInFailedCtrl'
	  }
	}
  })
  .state('app.friend-in-failed-details', {
	url: '/friend-in-failed-details/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/friend-in-failed-details.html',
		controller: 'friendInFailedDetailsCtrl'
	  }
	}
  })
  .state('app.friend-achievements', {
	url: '/friend-achievements',
	views: {
	  'menuContent': {
		templateUrl: 'templates/friend-achievements.html',
		controller: 'friendAchievmentsCtrl'
	  }
	}
  })
  .state('app.friend-achievments-details', {
	url: '/friend-achievments-details/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/friend-achievments-details.html',
		controller: 'friendAchievmentDetailsCtrl'
	  }
	}
  })
  .state('app.member-profile', {
	url: '/member-profile/:user_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/member-profile.html',
		controller: 'updateProfileCtrl'
	  }
	}
  })
  .state('app.followers', {
	url: '/followers/:user_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/followers.html',
		controller: 'followersCtrl'
	  }
	}
  })
  .state('app.my-activity', {
	url: '/my-activity/:user_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/my-activity.html',
		controller: 'myActivityCtrl'
	  }
	}
  })
  .state('app.following', {
	url: '/following/:user_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/following.html',
		controller: 'followingCtrl'
	  }
	}
  })
  .state('app.update-profile', {
	url: '/update-profile/:user_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/update-profile.html',
		controller: 'updateProfileCtrl'
	  }
	}
  })
  .state('app.settings', {
	url: '/settings',
	views: {
	  'menuContent': {
		templateUrl: 'templates/settings.html'   
	  }
	}
  })
  .state('app.settings~notification', {
	url: '/settings~notification',
	views: {
	  'menuContent': {
		templateUrl: 'templates/settings~notification.html'   
	  }
	}
  })
  .state('app.settings-alertwithnotification', {
	url: '/settings-alertwithnotification',
	views: {
	  'menuContent': {
		templateUrl: 'templates/settings-alertwithnotification.html'   
	  }
	}
  })
  .state('app.settings~language', {
	url: '/settings~language',
	views: {
	  'menuContent': {
		templateUrl: 'templates/settings~language.html'   
	  }
	}
  })
  .state('app.change-password', {
	url: '/change-password',
	views: {
	  'menuContent': {
		templateUrl: 'templates/change-password.html',
		controller: 'changePassCtrl'
	  }
	}
  })
  .state('app.compensation', {
	url: '/compensation',
	views: {
	  'menuContent': {
		templateUrl: 'templates/compensation.html'    
	  }
	}
  })
  .state('app.compensation~transaction', {
	url: '/compensation~transaction',
	views: {
	  'menuContent': {
		templateUrl: 'templates/compensation~transaction.html',
		controller: 'compensationTransactionCtrl'
	  }
	}
  })
  .state('app.compensation~transaction~detail', {
	url: '/compensation~transaction~detail/:trans_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/compensation~transaction~detail.html',
		controller: 'compensationTransactionDetailCtrl'
	  }
	}
  })
  .state('app.compensation~application-for-compensation', {
	url: '/compensation~application-for-compensation',
	views: {
	  'menuContent': {
		templateUrl: 'templates/compensation~application-for-compensation.html'    
	  }
	}
  })
  .state('app.application-for-compensation~paypal', {
	url: '/application-for-compensation~paypal',
	views: {
	  'menuContent': {
		templateUrl: 'templates/application-for-compensation~paypal.html',
		controller: 'compenAppPaypalCtrl'
	  }
	}
  })
  .state('app.application-for-compensation~payu', {
	url: '/application-for-compensation~payu',
	views: {
	  'menuContent': {
		templateUrl: 'templates/application-for-compensation~payu.html',
		controller: 'compenAppPayuCtrl'    
	  }
	}
  })
  .state('app.application-for-compensation~payment-colombia', {
	url: '/application-for-compensation~payment-colombia',
	views: {
	  'menuContent': {
		templateUrl: 'templates/application-for-compensation~payment-colombia.html',
		controller: 'compenAppPayColCtrl'    
	  }
	}
  })
  .state('app.my-challenge', {
	url: '/my-challenge',
	views: {
	  'menuContent': {
		templateUrl: 'templates/my-challenge.html',
		controller: 'myChallengesCtrl'
	  }
	}
  })
  .state('app.my-challenges~without-accepted', {
	url: '/my-challenges~without-accepted',
	views: {
	  'menuContent': {
		templateUrl: 'templates/my-challenges~without-accepted.html',
		controller: 'recievedChallengesCtrl'
	  }
	}
  })
  .state('app.my-challenges~without-accepted~details', {
	url: '/my-challenges~without-accepted~details/:record_id',
	views: {
	  'menuContent': {
		templateUrl: 'templates/my-challenges~without-accepted~details.html',
		controller: 'recievedChallengeDetailsCtrl'
	  }
	}
  })
  .state('app.challenge-friend', {
	url: '/challenge-friend',
	views: {
	  'menuContent': {
		templateUrl: 'templates/challenge-friend.html',
		controller: 'friendChallengesCtrl'
	  }
	}
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

.directive('map', function() {
	return {
		restrict: 'E',
		scope: {
		  onCreate: '&'
		},
		link: function ($scope, $element, $attr) {
		  function initialize() {
			var myLatLng = {lat:22.731573, lng: 75.875749};
			var mapOptions = {
			  center: new google.maps.LatLng(22.731573, 75.875749),
			  zoom: 14,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map($element[0], mapOptions);
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				label: "A",
				content:"Hello World!"
			});
			var infowindow = new google.maps.InfoWindow({
			  content:"<p> अ. भा. जैन ओसवाल साजनान फेडरेशन ( रजि. ) , <p>19/16 – ई,विश्राम कालोनी, वाय इन रोड इंदौर (मध्यप्रदेश)</p>"
			});
			infowindow.open(map,marker);
			
			$scope.onCreate({map: map});
	
			// Stop the side bar from dragging when mousedown/tapdown on the map
			google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
			  e.preventDefault();
			  return false;
			});
		  }
	
		  if (document.readyState === "complete") {
			initialize();
		  } else {
			google.maps.event.addDomListener(window, 'load', initialize);
		  }
		}
  	}
})
//Dynamic SRC 
.directive('dynamicUrl', function () {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attr) {
            element.attr('src', attr.dynamicUrlSrc);
        }
    };
});
