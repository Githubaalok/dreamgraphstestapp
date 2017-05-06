var global_login_id = "";
var global_login_id_2 = "";
var global_daysarr = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var global_monthsarr = [
							{m1:01,M:'जनवरी',M1:'January'},{m1:02,M:'फ़रवरी',M1:'February'},{m1:03,M:'मार्च',M1:'March'},{m1:04,M:'अप्रैल',M1:'April'},{m1:05,M:'मई',M1:'May'},{m1:06,M:'जून',M1:'June'},{m1:07,M:'जुलाई',M1:'July'},{m1:08,M:'अगस्त',M1:'August'},{m1:09,M:'सितंबर',M1:'September'},{m1:10,M:'अक्टूबर',M1:'October'},{m1:11,M:'नवंबर',M1:'November'},{m1:12,M:'दिसंबर',M1:'December'}	
					   ];
var global_yearsarr = [1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000];
var global_countryarr = [{"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Åland Islands","dial_code":"+358","code":"AX"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1 264","code":"AI"},{"name":"Antarctica","dial_code":"+672","code":"AQ"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1 242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1 246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1 441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Congo, The Democratic Republic of the","dial_code":"+243","code":"CD"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Cote d'Ivoire","dial_code":"+225","code":"CI"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+357","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1 767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1 849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1 473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1 671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iran, Islamic Republic of","dial_code":"+98","code":"IR"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1 876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+7 7","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Korea, Democratic People's Republic of","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of","dial_code":"+82","code":"KR"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Lao People's Democratic Republic","dial_code":"+856","code":"LA"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","dial_code":"+389","code":"MK"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Micronesia, Federated States of","dial_code":"+691","code":"FM"},{"name":"Moldova, Republic of","dial_code":"+373","code":"MD"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1 670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1 939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Réunion","dial_code":"+262","code":"RE"},{"name":"Saint Barthélemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1 869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1 758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1 784","code":"VC"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan, Province of China","dial_code":"+886","code":"TW"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Tanzania, United Republic of","dial_code":"+255","code":"TZ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1 868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1 649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"United States","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Venezuela, Bolivarian Republic of","dial_code":"+58","code":"VE"},{"name":"Viet Nam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1 284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1 340","code":"VI"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"}];
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LogoutCtrl', function($scope,$rootScope,$ionicHistory,$state,$timeout,$window) {
 $scope.login = "";
 $rootScope.$on('login_var', function (event, args) {
	$scope.login = args.global_login;
	global_login_id = args.global_login;
 });
 $scope.logout = function(){
		var login_var = "";
		$rootScope.$broadcast('login_var',{global_login:login_var});
		window.localStorage.removeItem("login_var_local");
		//$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
    };
})

.controller('LogoutCtrl_2', function($scope,$rootScope,$ionicHistory,$state,$timeout,$window) {
 $scope.login_2 = "";
 $rootScope.$on('login_var_2', function (event, args) {
	$scope.login_2 = args.global_login;
	global_login_id_2 = args.global_login;
 });
 $scope.logout = function(){
		var login_var_2 = "";
		$rootScope.$broadcast('login_var_2',{global_login:login_var_2});
		window.localStorage.removeItem("login_var_2_local");
		//$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
    };
})

/** Dashboard Controller**/
.controller('dashboardCtrl',function($scope,$ionicSlideBoxDelegate,$ionicHistory,$ionicLoading,$http,$state,$rootScope,$window,$timeout) {
	/* National Officers */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=national_officers */
	$timeout(function(){
		var login_var_local = window.localStorage.getItem("login_var_local");
		var login_var_2_local = window.localStorage.getItem("login_var_2_local");
		if(login_var_local !== undefined && login_var_local != null) {
			console.log(login_var_local);
			$rootScope.$broadcast('login_var',{global_login:login_var_local});
		} 
		if(login_var_2_local !== undefined && login_var_2_local != null) {
			console.log(login_var_2_local);
			$rootScope.$broadcast('login_var_2',{global_login:login_var_2_local});
		} 
	},500);
	$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
	var action = "national_officers";
	var data_parameters = "action="+action;
	$http.post(globalip,data_parameters, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		$scope.officers = response;
		global_officers = response;
	});
	/* HomeSlider */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=home_slider */
	var action1 = "home_slider";
	var data_parameters1 = "action="+action1;
	$http.post(globalip,data_parameters1, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response1) {
		$scope.slider = response1;
		setTimeout(function(){
      		$ionicSlideBoxDelegate.update();
			$ionicSlideBoxDelegate.loop(true);
			$ionicLoading.hide();
  		},1000);
	});
	/* Vishesh */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=special */
	var action2 = "special";
	var data_parameters2 = "action="+action2;
	$http.post(globalip,data_parameters2, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response2) {
		$scope.special = response2;
	});
	/* Testimonials */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=testimonials */
	var action3 = "testimonials";
	var data_parameters3 = "action="+action3;
	$http.post(globalip,data_parameters3, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response3) {
		$scope.testimonials = response3;
		setTimeout(function(){
      		$ionicSlideBoxDelegate.update();
			$ionicSlideBoxDelegate.loop(true);
  		},1000);
	});
	/* Sajnan Times */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=sajnan_times */
	var action4 = "sajnan_times";
	var data_parameters4 = "action="+action4;
	$http.post(globalip,data_parameters4, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response4) {
		if(response4[0].success == "Y"){
			$scope.sajnan_times = response4[0];
		}
	});
	$scope.GotoLink = function(url){
	  var ref = window.open(url,'_blank','location=no'); 
	  return false;
	}
	$scope.GotoMetrimonial = function(){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$rootScope.$broadcast('site_view',{global_site_view:'matrimonial'});
		$state.go('app.matrimonial');
	}
})
/** Contact Controller**/
.controller('contactCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup) {
	/* Contact Us */ /* http://makerites.com/wordpress/jainoswalsajnanfedration/webservice/?action=contact_us */
	$scope.submit = function() {
		var action = "contact_us";
        var Name = $scope.Name;
		var pati_patni_name = $scope.pati_patni_name;
		var Address = $scope.Address;
		var City = $scope.City;
		var Contact_number = $scope.Contact_number;
		var Email = $scope.Email;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var your_message = $scope.your_message != undefined ? $scope.your_message : '';
		var data_parameters = "action="+action+"&Name="+Name+"&pati_patni_name="+pati_patni_name+"&Address="+Address+"&City="+City+"&Contact_number="+Contact_number+"&Email="+Email+"&your_message="+your_message;
		if(typeof Name === "undefined" || typeof pati_patni_name === "undefined" || typeof Address === "undefined" || typeof City === "undefined" || typeof Contact_number === "undefined" || typeof Email === "undefined" || Name == ""  || pati_patni_name == "" || Address == "" || City == "" || Contact_number == "" || Email == "" ){
			$ionicPopup.show({
			  template: '',
			  title: 'सभी (*) चिन्हित फील्ड अनिवार्य है |',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else if(!filter.test(Email)){
			$ionicPopup.show({
			  template: '',
			  title: 'ई-मेल अमान्य है |',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-balanced'
					},
				  ]
				});
				if(response[0].success_status == 1){
					$scope.Name = $scope.pati_patni_name = $scope.Address = $scope.City = $scope.Contact_number = $scope.Email = $scope.your_message = '' ;
				}
				$ionicLoading.hide();
			});
			
		}
	};
})
/** Matrimonial Contact Controller**/
.controller('matrimonial_contactCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup) {
	/* Contact Us */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=contact_us */
	$scope.submit = function() {
		var action = "contact_us";
        var Name = $scope.Name;
		var pati_patni_name = $scope.pati_patni_name;
		var Address = $scope.Address;
		var City = $scope.City;
		var Contact_number = $scope.Contact_number;
		var Email = $scope.Email;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var your_message = $scope.your_message != undefined ? $scope.your_message : '';
		var data_parameters = "action="+action+"&Name="+Name+"&pati_patni_name="+pati_patni_name+"&Address="+Address+"&City="+City+"&Contact_number="+Contact_number+"&Email="+Email+"&your_message="+your_message;
		if(typeof Name === "undefined" || typeof pati_patni_name === "undefined" || typeof Address === "undefined" || typeof City === "undefined" || typeof Contact_number === "undefined" || typeof Email === "undefined" || Name == ""  || pati_patni_name == "" || Address == "" || City == "" || Contact_number == "" || Email == "" ){
			$ionicPopup.show({
			  template: '',
			  title: 'All (*) Marked Fields Are Compulsory',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-positive'
				},
			  ]
			});
		}
		else if(!filter.test(Email)){
			$ionicPopup.show({
			  template: '',
			  title: 'Invalid E-Mail Format',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-positive'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip_2,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-positive'
					},
				  ]
				});
				if(response[0].success_status == 1){
					$scope.Name = $scope.pati_patni_name = $scope.Address = $scope.City = $scope.Contact_number = $scope.Email = $scope.your_message = '' ;
				}
				$ionicLoading.hide();
			});
			
		}
	};
})
/** Jankaari Controller**/
.controller('jankariCtrl',function($scope,$http,$state,$ionicLoading) {
	/* Ekal-Khidki */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=single_window */
	$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
	var action = "jaankari";
	var data_parameters = "action="+action;
	$http.post(globalip,data_parameters, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		$scope.jankari = response;
		$ionicLoading.hide();
	});
})
/** Login Controller**/
.controller('loginCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup,$ionicHistory,$rootScope,$window) {
	/* Login */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=login */
	$scope.submitloginForm = function() {
		var action = "login";
        var email = $scope.email;
		var password = $scope.password;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var data_parameters = "action="+action+"&username="+email+"&password="+password;
		if(typeof email === "undefined" || typeof password === "undefined" || email == ""  || password == ""){
			$ionicPopup.show({
			  template: '',
			  title: 'सभी (*) चिन्हित फील्ड अनिवार्य है |',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else if(!filter.test(email)){
			$ionicPopup.show({
			  template: '',
			  title: 'ई-मेल अमान्य है |',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				if(response[0].status == "Y"){
					$scope.username = $scope.password = '' ;
					 $ionicHistory.nextViewOptions({
						disableBack: true
					});
					$rootScope.$broadcast('login_var',{global_login:response[0].result.user_id});
					window.localStorage.setItem("login_var_local",response[0].result.user_id);
					$state.go("app.dashboard");
				}
				else{
					$ionicPopup.show({
					  template: '',
					  title: response[0].msg,
					  scope: $scope,
					  buttons: [
						{ 
						  text: 'Ok',
						  type: 'button-balanced'
						},
					  ]
					});
				}
				$ionicLoading.hide();
			});
		}
	};
})
/** Member Login Controller**/
.controller('memberloginCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup,$ionicHistory,$rootScope,$window) {
	/* Member Login */ /* http://makerits.com/jainoswalsajnanfedration/matrimonial/matrimonial_web/?action=login&username=gautam&password=41014101@rG */
	$scope.submitmemberloginForm = function() {
		var action = "login";
        var email = $scope.email;
		var password = $scope.password;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var data_parameters = "action="+action+"&user_name="+email+"&password="+password;
		if(typeof email === "undefined" || typeof password === "undefined" || email == ""  || password == ""){
			$ionicPopup.show({
			  template: '',
			  title: 'All (*) Marked Fields Are Compulsory',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-positive'
				},
			  ]
			});
		}
		else if(!filter.test(email)){
			$ionicPopup.show({
			  template: '',
			  title: 'Invalid E-Mail Format',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-positive'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip_2,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				if(response[0].success_status == 1){
					$scope.username = $scope.password = '' ;
					$ionicHistory.nextViewOptions({
						disableBack: true
					});
					$rootScope.$broadcast('login_var_2',{global_login:response[0].user_id});
					window.localStorage.setItem("login_var_2_local",response[0].user_id);
					$state.go("app.matrimonial");
				}
				else{
					$ionicPopup.show({
					  template: '',
					  title: response[0].msg,
					  scope: $scope,
					  buttons: [
						{ 
						  text: 'Ok',
						  type: 'button-positive'
						},
					  ]
					});
				}
				$ionicLoading.hide();
			});
		}
	};
})
/** Registration Controller**/
.controller('registrationCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup) {
	/* Login */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=register */
	$scope.countryarr =  global_countryarr;
	$scope.submitregistrationForm = function() {
		var error = '';
		var action = "register";
		var firstname = $scope.firstname;
		var lastname = $scope.lastname;
		var user_email = $scope.user_email;
		var password = $scope.password;
		var con_password = $scope.con_password;
		var address_1 = $scope.address_1;
		var address_2 = $scope.address_2 != undefined ? $scope.address_2 : '';
		var mobile_number = $scope.mobile_number;
		var country = $scope.country;
		var gender = $scope.gender;
		var membership_type = $scope.membership_type;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var pass_filter = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
		var data_parameters = "action="+action+"&firstname="+firstname+"&lastname="+lastname+"&user_email="+user_email+"&password="+password+"&address_1="+address_1+"&address_2="+address_2+"&mobile_number="+mobile_number+"&country="+country+"&gender="+gender+"&membership-type="+membership_type;
		if(typeof firstname === "undefined" || typeof lastname === "undefined" || typeof user_email === "undefined" || typeof password === "undefined" || typeof con_password === "undefined" || typeof address_1 === "undefined" || typeof mobile_number === "undefined" || typeof country === "undefined" || typeof gender === "undefined" || typeof membership_type === "undefined" || firstname == "" || lastname == "" || user_email == "" || password == "" || con_password == "" || address_1 == "" || mobile_number == "" || country == "" || gender == "" || membership_type == ""){
			error += '<p>सभी (*) चिन्हित फील्ड अनिवार्य है |</p>';
		}
		if(user_email != '' && user_email != undefined){
			if(!filter.test(user_email)){
				error += '<p>ई-मेल अमान्य है |</p>';
			}
		}
		if(password != '' && password != undefined){
			if(!pass_filter.test(password)){
				error += '<p>आप के पासवर्ड में 8 अक्षर का होना अनिवार्य है , जिसमे एक नंबर (0-9) , एक कैपिटल लेटर (A-Z) , एक स्माल लेटर (a-z) , एक स्पेशल लेटर का होना अनिवार्य है | |</p>';
			}
		}
		if(password != '' && con_password != '' && typeof password !== "undefined" && typeof con_password !== "undefined"){
			if(password != con_password){
				error += '<p>पासवर्ड और कन्फर्म पासवर्ड मैच नहीं कर रहे |</p>';
			}
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-balanced'
					},
				  ]
				});
				if(response[0].success == "Y"){
					$scope.firstname = $scope.lastname = $scope.user_email = $scope.password = $scope.con_password = $scope.address_1 = $scope.address_2 = $scope.mobile_number = $scope.country = $scope.gender = $scope.membership_type = '' ;
				}
				$ionicLoading.hide();
			});
		}
	};
})
/** Forgot Password Controller**/
.controller('forgotpasswordCtrl',function($scope,$http,$ionicLoading,$state,$ionicPopup) {
	/* Forgot Password */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=Forgot */
	$scope.forgotpasswordsubmit = function() {
		var error = '';
		var action = "Forgot";
		var user_email = $scope.user_email;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var data_parameters = "action="+action+"&user_email="+user_email;
		if(typeof user_email === "undefined" || user_email == ""){
			error += '<p>ई-मेल अनिवार्य है |</p>';
		}
		if(user_email != '' && user_email != undefined){
			if(!filter.test(user_email)){
				error += '<p>ई-मेल अमान्य है |</p>';
			}
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-balanced'
					},
				  ]
				});
				if(response[0].success == "Y"){
					$scope.user_email = '' ;
				}
				$ionicLoading.hide();
			});
		}
	};
})
/** Sandesh Controller**/
.controller('sandeshCtrl',function($scope,$http,$state,$ionicLoading,$stateParams) {
	/* Sandesh Officers */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=special_detalis&officer_title=lalchand-bandi-details */
	$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
	var action = "special_detalis";
	var officer_title = $stateParams.slug;
	var data_parameters = "action="+action+"&officer_title="+officer_title;
	$http.post(globalip,data_parameters, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		$scope.written_by = response[0].written_by;
		$scope.before_speech = response[0].before_speech;
		$scope.slogan = response[0].slogan;
		$scope.speech = response[0].speech;
		$scope.yours = response[0].yours;
		$scope.name = response[0].name;
		$scope.image = response[0].image;
		$ionicLoading.hide();
	});
})
/** Ekal-Khidki Controller**/
.controller('ekal_khidkiCtrl',function($scope,$http,$state,$ionicLoading) {
	/* Ekal-Khidki */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=single_window */
	$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
	var action = "single_window";
	var data_parameters = "action="+action;
	$http.post(globalip,data_parameters, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		angular.forEach(response,function(value,index){
			if(value.tab_title == "जैन तीर्थ यात्रा"){
				$scope.jain_thirth_yatra_tab_title = value.tab_title;
				$scope.jain_thirth_yatra_tab_deas = value.tab_deas;
				$scope.jain_thirth_yatra_content = value.tab_content;
			}
			if(value.tab_title == "महातीर्थ धर्मशाला"){
				$scope.mahathirth_dharmshala_tab_title = value.tab_title;
				$scope.mahathirth_dharmshala_tab_deas = value.tab_deas;
				$scope.mahathirth_dharmshala_content = value.tab_content;
			}
        });
		$ionicLoading.hide();
	});
})
/** Introduction Form Controller **/
.controller('introductionformCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup,$ionicModal,$cordovaCamera,$cordovaFile,$cordovaFileTransfer) {
	/* Parichay Patra */ /* http://makerites.com/wordpress/jainoswalsajnanfedration/matrimonial/matrimonial_web */
	$scope.daysarr = global_daysarr;
	$scope.monthsarr = global_monthsarr;
	$scope.yearsarr = global_yearsarr;
	$scope.submit = function() {
		var action = "introduction_form";
        var pratayasi_name = $scope.pratayasi_name;
		var gottr = $scope.gottr;
		var Address = $scope.Address;
		var Phone_number = $scope.Phone_number != undefined ? $scope.Phone_number : '';
		var Mobile_number = $scope.Mobile_number;
		var Suchna_number = $scope.Suchna_number;
		var year = $scope.year;
		var month = $scope.month;
		var day = $scope.day;
		var Date_of_birth = year+'-'+month+'-'+day;
		var Birth_time = $scope.Birth_time;
		var samyakaal = $scope.samyakaal;
		var Birth_place = $scope.Birth_place;
		var Types_vard = $scope.Types_vard;
		var Hight = $scope.Hight;
		var Wait = $scope.Wait;
		var Blood_group = $scope.Blood_group != undefined ? $scope.Blood_group : '';
		var Education = $scope.Education;
		var email162 = $scope.email162;
		var Business = $scope.Business;
		var Income = $scope.Income;
		var Intrested = $scope.Intrested;
		var Important_details = $scope.Important_details;
		var Father_name = $scope.Father_name;
		var Father_mobile_number = $scope.Father_mobile_number;
		var Mother_name_work = $scope.Mother_name_work;
		var gotter_soyam = $scope.gotter_soyam;
		var gotter_mama = $scope.gotter_mama;
		var gotter_dadi = $scope.gotter_dadi;
		var gotter_nani = $scope.gotter_nani;
		var manglik = $scope.manglik;
		var Patrika_milan = $scope.Patrika_milan;
		var other = $scope.other != '' ? $scope.other : '';
		var Dharmik_manyata = $scope.Dharmik_manyata;
		var bhai_vivahit = $scope.bhai_vivahit != undefined ? $scope.bhai_vivahit : '';
		var bhai_avivahit = $scope.bhai_avivahit != undefined ? $scope.bhai_avivahit : '';
		var bahan_vivahit = $scope.bahan_vivahit != undefined ? $scope.bahan_vivahit : '';
		var bahan_avivahit = $scope.bahan_avivahit != undefined ? $scope.bahan_avivahit : '';
		var residentsinc = $scope.residentsinc;
		var vahan_2wheeler = $scope.vahan_2wheeler != undefined ? $scope.vahan_2wheeler : '';
		var vahan_4wheeler = $scope.vahan_4wheeler != undefined ? $scope.vahan_4wheeler : '';
		var upstithiti = $scope.upstithiti;
		var Other_contact = $scope.Other_contact;
		var other_adderess = $scope.other_adderess;
		var other_Mobile_number = $scope.other_Mobile_number;
		var Pratyashi_relationship = $scope.Pratyashi_relationship;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		/** var photo = $scope.photo;*/
		var data_parameters = "action="+action+"&pratayasi_name="+pratayasi_name+"&gottr="+gottr+"&Address="+Address+"&Phone_number="+Phone_number+"&Mobile_number="+Mobile_number+"&Suchna_number="+Suchna_number+"&Date_of_birth="+Date_of_birth+"&Birth_time="+Birth_time+"&samyakaal="+samyakaal+"&Birth_place="+Birth_place+"&Types_vard="+Types_vard+"&Hight="+Hight+"&Wait="+Wait+"&Blood_group="+Blood_group+"&Education="+Education+"&email162="+email162+"&Business="+Business+"&Income="+Income+"&Intrested="+Intrested+"&Important_details="+Important_details+"&Father_name="+Father_name+"&Father_mobile_number="+Father_mobile_number+"&Mother_name_work="+Mother_name_work+"&gotter_soyam="+gotter_soyam+"&gotter_mama="+gotter_mama+"&gotter_dadi="+gotter_dadi+"&gotter_nani="+gotter_nani+"&manglik="+manglik+"&Patrika_milan="+Patrika_milan+"&other="+other+"&Dharmik_manyata="+Dharmik_manyata+"&bhai_vivahit="+bhai_vivahit+"&bhai_avivahit="+bhai_avivahit+"&bahan_vivahit="+bahan_vivahit+"&bahan_avivahit="+bahan_avivahit+"&residentsinc="+residentsinc+"&vahan_2wheeler="+vahan_2wheeler+"&vahan_4wheeler="+vahan_4wheeler+"&upstithiti="+upstithiti+"&Other_contact="+Other_contact+"&other_adderess="+other_adderess+"&other_Mobile_number="+other_Mobile_number+"&Pratyashi_relationship="+Pratyashi_relationship;
		if(typeof pratayasi_name === "undefined" || typeof gottr === "undefined" || typeof Address === "undefined" || typeof Mobile_number === "undefined" || typeof Suchna_number === "undefined" || typeof year === "undefined" || typeof month === "undefined" || typeof day === "undefined" || typeof Birth_time === "undefined" || typeof samyakaal === "undefined" || typeof Birth_place === "undefined" || typeof Types_vard === "undefined" || typeof Hight === "undefined" || typeof Wait === "undefined" || typeof Education === "undefined" || typeof email162 === "undefined" || typeof Business === "undefined" || typeof Income === "undefined" || typeof Intrested === "undefined" || typeof Important_details === "undefined" || typeof Father_name === "undefined" || typeof Father_mobile_number === "undefined" || typeof Mother_name_work === "undefined" || typeof gotter_soyam === "undefined" || typeof gotter_mama === "undefined" || typeof gotter_dadi === "undefined" || typeof gotter_nani === "undefined" || typeof manglik === "undefined" || typeof Patrika_milan === "undefined" || typeof Dharmik_manyata === "undefined" || typeof residentsinc === "undefined" || typeof upstithiti === "undefined" || typeof Other_contact === "undefined" || typeof other_adderess === "undefined" || typeof other_Mobile_number === "undefined" || typeof Pratyashi_relationship === "undefined" || pratayasi_name == "" || gottr == "" || Address == "" ||  Mobile_number == "" || Suchna_number == "" || year == "" || month == "" || day == "" || Birth_time == "" || samyakaal == "" || Birth_place == "" || Types_vard == "" || Hight == "" || Wait == "" || Education == "" || email162 == "" || Business == "" || Income == "" || Intrested == "" || Important_details == "" || Father_name == "" || Father_mobile_number == "" || Mother_name_work == "" || gotter_soyam == "" || gotter_mama == "" || gotter_dadi == "" || gotter_nani == "" || manglik == "" || Patrika_milan == "" || Dharmik_manyata == "" || residentsinc == "" || upstithiti == "" || Other_contact == "" || other_adderess == "" || other_Mobile_number == "" || Pratyashi_relationship == ""){
			$ionicPopup.show({
			  template: '',
			  title: 'All (*) Marked Fields Are Compulsory',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-positive'
				},
			  ]
			});
		}
		else if(!filter.test(email162)){
			$ionicPopup.show({
			  template: '',
			  title: 'Invalid E-Mail Format',
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-positive'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip_2,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-positive'
					},
				  ]
				});
				if(response[0].success_status == 1){
					$scope.pratayasi_name = $scope.gottr = $scope.Address = $scope.Phone_number = $scope.Mobile_number = $scope.Suchna_number = $scope.Date_of_birth = $scope.Birth_time = $scope.samyakaal = $scope.Birth_place = $scope.Types_vard = $scope.Hight = $scope.Wait = $scope.Blood_group = $scope.Education = $scope.email162 = $scope.Business = $scope.Income = $scope.Intrested = $scope.Important_details = $scope.Father_name = $scope.Father_mobile_number = $scope.Mother_name_work = $scope.gotter_soyam = $scope.gotter_mama = $scope.gotter_dadi = $scope.gotter_nani = $scope.manglik = $scope.Patrika_milan = $scope.other = $scope.Dharmik_manyata = $scope.bhai_vivahit = $scope.bhai_avivahit = $scope.bahan_vivahit = $scope.bahan_avivahit = $scope.residentsinc = $scope.vahan_2wheeler = $scope.vahan_4wheeler = $scope.upstithiti = $scope.Other_contact = $scope.other_adderess = $scope.other_Mobile_number = $scope.Pratyashi_relationship = '' ;
				}
				$ionicLoading.hide();
			});
		}
	};
	$scope.chooseOption4PPhoto = function() {
		$ionicPopup.show({
		  template: '<div class="row text-center"><div class="col col-50"><button class="button button-royal icon ion-camera" ng-click="takePhoto()"></button></div><div class="col col-50"><button class="button button-energized icon ion-images" ng-click="choosePhoto()" ></button></div></div>',
		  //templateUrl: 'templates/uploadmemberregistration.html',
		  title: 'Choose Option',
		  scope: $scope,
		  buttons: [
			{ 
			  text: 'Cancel',
			  type: 'button-positive'
			},
		  ]
		});
	};
	// open PhotoLibrary
    $scope.takePhoto = function () {
		console.log('takePhoto');
		var options = {
			quality: 75,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 300,
			targetHeight: 300,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};
		$cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.imgURI = "data:image/jpeg;base64," + imageData;
			var currentName = imageData.replace(/^.*[\\\/]/, '');
			var d = new Date(),
			n = d.getTime(),
			newFileName = n + ".jpg";
			$cordovaFile.moveFile(cordova.file.tempDirectory, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
				
		  }, function(error){
			//an error occured
		  });
		}, function (err) {
			// An error occured. Show a message to the user
		});
	};
	$scope.choosePhoto = function () {
		console.log('choosePhoto');
		var options = {
			quality: 75,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 300,
			targetHeight: 300,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};
		$cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.imgURI = "data:image/jpeg;base64," + imageData;
			var url = $globalip_2;
 			//File for Upload
			var targetPath = cordova.file.externalRootDirectory + "logo_radni.png";
			 
			// File name only
			var filename = targetPath.split("/").pop();
			 
			var options = {
				 fileKey: "file",
				 fileName: filename,
				 chunkedMode: false,
				 mimeType: "image/jpg",
				params : {'directory':'upload', 'fileName':filename, 'action':'uploadTesting'} 
				};
				  
			 $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {
				$ionicPopup.show({
				  template: '',
				  title: result[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-positive'
					},
				  ]
				});
			 }, function (err) {
				 $ionicPopup.show({
				  template: '',
				  title: err,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-positive'
					},
				  ]
				});
			 }, function (progress) {
				 // PROGRESS HANDLING GOES HERE
			 });
			
		}, function (err) {
			// An error occured. Show a message to the user
		});
	}
	// ionic Modal
	$ionicModal.fromTemplateUrl('termsandconditions.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	// Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		// Execute action
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
		// Execute action
	});
})
/** Profile Controller **/
.controller('profileCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup,$rootScope,$ionicHistory,$cordovaCamera,$cordovaFileTransfer) {
	/* User Profile */ 
	/* http://makerits.com/jainoswalsajnanfedration/webservice/?action=update_profile&action_1=update_user_profile&ID=115&description=helloheretimepass&gender=Male&birth_date=1995/01/11&country=Aruba&mobile_number=9165679898&user_email=timepass10237@gmail.com */
	$scope.daysarr = global_daysarr;
	$scope.monthsarr = global_monthsarr;
	$scope.yearsarr = global_yearsarr;
	$scope.countryarr =  global_countryarr;
	/* Get Details */
	/* http://makerits.com/jainoswalsajnanfedration/webservice/?action=update_profile&action_1=user_deatils&user_id=123 */
	//if(global_login_id != '' && global_login_id != undefined){
		var data_parameters12 = "action=update_profile&action_1=user_deatils&user_id="+global_login_id+"";
		$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
		$http.post(globalip,data_parameters12, {
			headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
		})
		.success(function(response) {
			if(response[0].success == "Y"){
				$scope.cover_image = response[0].cover_image ? response[0].cover_image : 'img/siteimgs/no-pic.png';
				$scope.profile_image = response[0].profile_image ? response[0].profile_image : 'img/siteimgs/no_logo.gif';
				$scope.gender = response[0].gender;
				$scope.user_email = response[0].user_email;
				var dob = response[0].birth_date;
				var date = new Date(dob) ;
				$scope.day = date.getDate();
				$scope.month = date.getMonth()+1;
				$scope.year = date.getFullYear();
				$scope.country = response[0].country;
				$scope.mobile_number = response[0].mobile_number;
				$scope.description = response[0].description;
				$scope.address_1 = response[0].address_1;
				$scope.address_2 = response[0].address_2;
				$scope.membership_type = response[0].membership_type;
				$scope.first_name = response[0].first_name;
				$scope.last_name = response[0].last_name;
				$scope.profile_privacy = response[0].profile_privacy;
				$scope.hide_in_members = response[0].hide_in_members;
				$scope.user_registered = response[0].user_registered;
			}
			$ionicLoading.hide();
		});
	//}
	/* Profile */
	$scope.submitprofileForm = function() {
		var error = '';
		var action = "update_profile";
		var action_1 = "update_user_profile";
		var gender = $scope.gender;
		var year = $scope.year;
		var month = $scope.month;
		var day = $scope.day;
		var birth_date = year+'-'+month+'-'+day;
		var country = $scope.country;
		var user_email = $scope.user_email;
		var mobile_number = $scope.mobile_number;
		var description = $scope.description != undefined ? $scope.description : '';
		var address_1 = $scope.address_1;
		var address_2 = $scope.address_2 != undefined ? $scope.address_2 : '';
		var membership_type = $scope.membership_type;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var data_parameters = "action="+action+"&action_1="+action_1+"&ID="+global_login_id+"&gender="+gender+"&birth_date="+birth_date+"&country="+country+"&user_email="+user_email+"&mobile_number="+mobile_number+"&description="+description+"&address_1="+address_1+"&address_2="+address_2+"&membership-type="+membership_type;
		if(typeof global_login_id === "undefined" || typeof gender === "undefined" || typeof year === "undefined" || typeof month === "undefined" || typeof day === "undefined" || typeof country === "undefined" || typeof address_1 === "undefined" || typeof membership_type === "undefined" || typeof user_email === "undefined" || typeof mobile_number === "undefined" || global_login_id == "" || gender == "" || year == "" || month == "" || day == "" || country == "" || address_1 == "" || membership_type == "" || user_email == "" || mobile_number == ""){
			error += '<p>सभी (*) चिन्हित फील्ड अनिवार्य है |</p>';
		}
		if(user_email != '' && user_email != undefined){
			if(!filter.test(user_email)){
				error += '<p>ई-मेल अमान्य है |</p>';
			}
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-balanced'
					},
				  ]
				});
				if(response[0].success_status == 1){
					//$scope.gender = $scope.year = $scope.month = $scope.day = $scope.birth_date = $scope.country = $scope.user_email = $scope.mobile_number = $scope.description = '' ;
				}
				$ionicLoading.hide();
				//$state.go("app.myprofile");
				//$state.go($state.current, {}, {reload: true});
			});
		}
	};
	/* Account */
	$scope.submitaccountForm = function() {
		var error = '';
		var action = "update_profile";
		var action_1 = "update_Account";
		var first_name = $scope.first_name;
		var last_name = $scope.last_name;
		var user_email = $scope.user_email;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var data_parameters = "action="+action+"&action_1="+action_1+"&ID="+global_login_id+"&first_name="+first_name+"&last_name="+last_name+"&user_email="+user_email;
		if(typeof global_login_id === "undefined" || typeof first_name === "undefined" || typeof last_name === "undefined" || typeof user_email === "undefined" || global_login_id == "" || first_name == "" || last_name == "" || user_email == ""){
			error += '<p>सभी (*) चिन्हित फील्ड अनिवार्य है |</p>';
		}
		if(user_email != '' && user_email != undefined){
			if(!filter.test(user_email)){
				error += '<p>ई-मेल अमान्य है |</p>';
			}
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-balanced'
					},
				  ]
				});
				if(response[0].success_status == 1){
					//$scope.first_name = $scope.last_name = $scope.user_email = '' ;
				}
				$ionicLoading.hide();
				//$state.go("app.account");
			});
		}
	};
	/* Change Password */
	/* http://makerits.com/jainoswalsajnanfedration/webservice/?action=update_profile&action_1=change_password&ID=115&current_pass=test@123&new_pass=test@1234 */
	$scope.submitchgpasswordForm = function() {
		var error = '';
		var action = "update_profile";
		var action_1 = "change_password";
		var current_pass = $scope.current_pass;
		var new_pass = $scope.new_pass;
		var con_pass = $scope.con_pass;
		var pass_filter = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
		var data_parameters = "action="+action+"&action_1="+action_1+"&ID="+global_login_id+"&current_pass="+current_pass+"&new_pass="+new_pass;
		if(typeof global_login_id === "undefined" || typeof current_pass === "undefined" || typeof new_pass === "undefined" || typeof con_pass === "undefined" || global_login_id == "" || current_pass == "" || new_pass == "" || con_pass == ""){
			error += '<p>सभी (*) चिन्हित फील्ड अनिवार्य है |</p>';
		}
		if(new_pass != '' && new_pass != undefined){
			if(!pass_filter.test(new_pass)){
				error += '<p>आप के पासवर्ड में 8 अक्षर का होना अनिवार्य है , जिसमे एक नंबर (0-9) , एक कैपिटल लेटर (A-Z) , एक स्माल लेटर (a-z) , एक स्पेशल लेटर का होना अनिवार्य है | |</p>';
			}
		}
		if(new_pass != '' && con_pass != '' && typeof new_pass !== "undefined" && typeof con_pass !== "undefined"){	
			if(new_pass != con_pass){
				error += '<p>पासवर्ड और कन्फर्म पासवर्ड मैच नहीं कर रहे |</p>';
			}
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-balanced'
					},
				  ]
				});
				if(response[0].success_status == 1){
					$scope.current_pass = $scope.new_pass = $scope.con_pass = '' ;
				}
				$ionicLoading.hide();
			});
		}
	};
	/* Privacy */
	/* http://makerits.com/jainoswalsajnanfedration/webservice/?action=update_profile&action_1=Privacy&ID=115&profile_privacy=Everyone&hide_in_members=No */
	$scope.submitprivacyForm = function() {
		var error = '';
		var action = "update_profile";
		var action_1 = "Privacy";
		var profile_privacy = $scope.profile_privacy;
		var hide_in_members = $scope.hide_in_members;
		var data_parameters = "action="+action+"&action_1="+action_1+"&ID="+global_login_id+"&profile_privacy="+profile_privacy+"&hide_in_members="+hide_in_members;
		if(typeof global_login_id === "undefined" || typeof profile_privacy === "undefined" || typeof hide_in_members === "undefined" || global_login_id == "" || profile_privacy == "" || hide_in_members == ""){
			error += '<p>सभी (*) चिन्हित फील्ड अनिवार्य है |</p>';
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-balanced'
					},
				  ]
				});
				if(response[0].success_status == 1){
					//$scope.current_pass = $scope.new_pass = $scope.con_pass = '' ;
				}
				$ionicLoading.hide();
				//$state.go("app.privacy");
			});
		}
	};
	//Aalok
})
/** Business Directory Controller **/
.controller('business_directoryCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup,$cordovaCamera,$cordovaFileTransfer) {
	/* Business Directory */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=business_directory */
	$scope.submitBusinessdirForm = function() {
		$scope.businessdirForm = {};
		var error = '';
		var action = "business_directory";
        var bs_name = $scope.bs_name;
		var bs_gotr = $scope.bs_gotr;
		var bs_group = $scope.bs_group;
		var bs_farm_name = $scope.bs_farm_name;
		var bs_service = $scope.bs_service;
		var bs_pin = $scope.bs_pin;
		var bs_address = $scope.bs_address;
		var bs_pin_2 = $scope.bs_pin_2;
		var partner_name = $scope.partner_name != undefined ? $scope.partner_name : '';
		var bs_catagory = $scope.bs_catagory;
		var bs_other_business = $scope.bs_other_business != '' ? $scope.bs_other_business : '';
		var bs_phone_number = $scope.bs_phone_number;
		var bs_mob_1 = $scope.bs_mob_1;
		var bs_wtsup_no = $scope.bs_wtsup_no;
		var bs_mob_2 = $scope.bs_mob_2 != undefined ? $scope.bs_mob_2 : '';
		var bs_wtsup_no_2 = $scope.bs_wtsup_no_2 != '' ? $scope.bs_wtsup_no_2 : '';
		var bs_email = $scope.bs_email;
		var bs_email_2 = $scope.bs_email_2 != undefined ? $scope.bs_email_2 : '';
		var bs_website = $scope.bs_website != undefined ? $scope.bs_website : '';
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		/** var photo = $scope.photo;*/
		var data_parameters = "action="+action+"&bs_name="+bs_name+"&bs_gotr="+bs_gotr+"&bs_group="+bs_group+"&bs_farm_name="+bs_farm_name+"&bs_service="+bs_service+"&bs_pin="+bs_pin+"&bs_address="+bs_address+"&bs_pin_2="+bs_pin_2+"&partner_name="+partner_name+"&bs_catagory="+bs_catagory+"&bs_other_business="+bs_other_business+"&bs_phone_number="+bs_phone_number+"&bs_mob_1="+bs_mob_1+"&bs_wtsup_no="+bs_wtsup_no+"&bs_mob_2="+bs_mob_2+"&bs_wtsup_no_2="+bs_wtsup_no_2+"&bs_email="+bs_email+"&bs_email_2="+bs_email_2+"&bs_website="+bs_website;
		if(typeof bs_name === "undefined" || typeof bs_gotr === "undefined" || typeof bs_group === "undefined" || typeof bs_farm_name === "undefined" || typeof bs_service === "undefined" || typeof bs_pin === "undefined" || typeof bs_address === "undefined" || typeof bs_pin_2 === "undefined" || typeof bs_catagory === "undefined" || typeof bs_phone_number === "undefined" || typeof bs_mob_1 === "undefined" || typeof bs_wtsup_no === "undefined" || typeof bs_email === "undefined" || bs_name == "" || bs_gotr == "" || bs_group == "" || bs_farm_name == "" || bs_service == "" || bs_pin == "" || bs_address == "" || bs_pin_2 == "" || bs_catagory == "" || bs_phone_number == "" || bs_mob_1 == "" || bs_wtsup_no == "" || bs_email == "")
		{
			error += '<p>सभी (*) चिन्हित फील्ड अनिवार्य है |</p>';
		}
		if(bs_email != '' && bs_email != undefined){
			if(!filter.test(bs_email)){
				error += '<p>ई-मेल 1 अमान्य है |</p>';
			}
		}
		if(bs_email_2 != ''){
			if(!filter.test(bs_email_2)){
				error += '<p>ई-मेल 2 अमान्य है |</p>';
			}
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-balanced'
				},
			  ]
			});
		}
		else{
			//alert(data_parameters);
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-balanced'
					},
				  ]
				});
				if(response[0].success_status == 1){
					$scope.bs_name = $scope.bs_gotr = $scope.bs_group = $scope.bs_farm_name = $scope.bs_service = $scope.bs_pin = $scope.bs_address = $scope.bs_pin_2 = $scope.partner_name = $scope.bs_catagory = $scope.bs_other_business = $scope.bs_phone_number = $scope.bs_mob_1 = $scope.bs_wtsup_no = $scope.bs_mob_2 = $scope.bs_wtsup_no_2 = $scope.bs_email = $scope.bs_email_2 = $scope.bs_website = '' ;
				}
				$ionicLoading.hide();
			});
		}
	};
	$scope.chooseOption4PPhoto = function() {
		$ionicPopup.show({
		  template: '<div class="row text-center"><div class="col col-50"><button class="button button-royal icon ion-camera" ng-click="takePhoto()"></button></div><div class="col col-50"><button class="button button-energized icon ion-images" ng-click="choosePhoto()" ></button></div></div>',
		  //templateUrl: 'templates/uploadmemberregistration.html',
		  title: 'Choose Option',
		  scope: $scope,
		  buttons: [
			{ 
			  text: 'Cancel',
			  type: 'button-positive'
			},
		  ]
		});
	};
	// open PhotoLibrary
    $scope.takePhoto = function () {
		console.log('takePhoto');
		var options = {
			quality: 75,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 300,
			targetHeight: 300,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};
		$cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.imgURI = "data:image/jpeg;base64," + imageData;
		}, function (err) {
			// An error occured. Show a message to the user
		});
	}
	$scope.choosePhoto = function () {
		console.log('choosePhoto');
		var options = {
			quality: 75,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 300,
			targetHeight: 300,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};
		$cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.imgURI = "data:image/jpeg;base64," + imageData;
			
		}, function (err) {
			// An error occured. Show a message to the user
		});
	}
	$scope.chooseOption4VCard = function() {
		$ionicPopup.show({
		  template: '<div class="row text-center"><div class="col col-50"><button class="button button-royal icon ion-camera" ng-click="takePhoto()"></button></div><div class="col col-50"><button class="button button-energized icon ion-images" ng-click="choosePhoto()" ></button></div></div>',
		  title: 'Choose Option',
		  scope: $scope,
		  buttons: [
			{ 
			  text: 'Cancel',
			  type: 'button-positive'
			},
		  ]
		});
	};
})
/** Matrimonial Controller**/
.controller('matrimonialCtrl',function($scope,$ionicSlideBoxDelegate,$ionicHistory,$ionicLoading,$http,$state) {
	/* MatrimonialSlider */ /* //http://makerits.com/jainoswalsajnanfedration/matrimonial/matrimonial_web?action=home_slider */
	$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
	var action = "home_slider";
	var data_parameters = "action="+action;
	$http.post(globalip_2,data_parameters, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		$scope.slider = response;
		setTimeout(function(){
      		$ionicSlideBoxDelegate.update();
			$ionicSlideBoxDelegate.loop(true);
			$ionicLoading.hide();
  		},500);
	});
	/* Second Section */ /* http://makerits.com/jainoswalsajnanfedration/matrimonial/matrimonial_web?action=second_section */
	var action1 = "second_section";
	var data_parameters1 = "action="+action1;
	$http.post(globalip_2,data_parameters1, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response1) {
		$scope.reviews = response1;
	});
	/* Our Wedding Gallery */ /* http://makerits.com/jainoswalsajnanfedration/matrimonial/matrimonial_web?action=home_gallery */
	var action2 = "home_gallery";
	var data_parameters2 = "action="+action2;
	$http.post(globalip_2,data_parameters2, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response2) {
		$scope.gallery = response2;
	});
	/* Creative Ideas */ /* http://makerits.com/jainoswalsajnanfedration/matrimonial/matrimonial_web/?action=creative_ideas */
	var action3 = "creative_ideas";
	var data_parameters3 = "action="+action3;
	$http.post(globalip_2,data_parameters3, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response3) {
		$scope.creative_ideas = response3[0];
	});
})
/** Member Registration Controller**/
.controller('memberregistrationCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup) {
	/* Login */ /* http://makerits.com/jainoswalsajnanfedration/webservice/?action=register */
	$scope.daysarr = global_daysarr;
	$scope.monthsarr = global_monthsarr;
	$scope.yearsarr = global_yearsarr;
	$scope.countryarr =  global_countryarr;
	/* Mother Tounge */ /* http://makerits.com/jainoswalsajnanfedration/matrimonial/matrimonial_web/?action=mother_tongue_list */
	var action1 = "mother_tongue_list";
	var data_parameters1 = "action="+action1;
	$http.post(globalip_2,data_parameters1, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response1) {
		$scope.mother_tongues = response1;
	});
	$scope.submitmemberregistrationForm = function() {
		var error = '';
		var action = "register";
		var profile_created_by = $scope.profile_created_by;
		var firstname = $scope.firstname;
		var lastname = $scope.lastname;
		var matri_gender = $scope.matri_gender;
		var matri_marital_status = $scope.matri_marital_status;
		var matri_Sect = $scope.matri_Sect;
		var matri_sub_sect = $scope.matri_sub_sect;
		var matri_castes = $scope.matri_castes;
		var matri_mobile = $scope.matri_mobile;
		var user_email = $scope.user_email;
		var password = $scope.password;
		var con_password = $scope.con_password;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var pass_filter = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
		var description = $scope.description != undefined ? $scope.description : '';
		var country = $scope.country;
		var mother_tongue = $scope.mother_tongue != undefined ? $scope.mother_tongue : '';
		var professional = $scope.professional != undefined ? $scope.professional : '';
		var year = $scope.year;
		var month = $scope.month;
		var day = $scope.day;
		var dob = year+'-'+month+'-'+day;
		var data_parameters = "action="+action+"&profile_created_by="+profile_created_by+"&firstname="+firstname+"&lastname="+lastname+"&matri_gender="+matri_gender+"&matri_Sect="+matri_Sect+"&matri_sub_sect="+matri_sub_sect+"&matri_castes="+matri_castes+"&matri_mobile="+matri_mobile+"&matri_marital_status="+matri_marital_status+"&user_email="+user_email+"&password="+password+"&description="+description+"&matri_country="+country+"&mother_tongue="+mother_tongue+"&professional="+professional+"&matri_dob="+dob;
		if(typeof profile_created_by === "undefined" || typeof firstname === "undefined" || typeof lastname === "undefined" || typeof matri_gender === "undefined" || typeof matri_Sect === "undefined" || typeof matri_sub_sect === "undefined" || typeof matri_castes === "undefined" || typeof matri_mobile === "undefined" || typeof matri_marital_status === "undefined" || typeof country === "undefined" || typeof year === "undefined" || typeof month === "undefined" || typeof day === "undefined" || typeof user_email === "undefined" || typeof password === "undefined" || typeof con_password === "undefined" || profile_created_by == "" || firstname == "" || lastname == "" || matri_gender == "" || matri_Sect == "" || matri_sub_sect == "" || matri_castes == "" || matri_mobile == "" || matri_marital_status == "" || country == "" || country == null || year == "" || month == "" || day == "" || user_email == "" || password == "" || con_password == ""){
			error += '<p>All (*) Marked Fields Are Compulsory</p>';
		}
		if(user_email != '' && user_email != undefined){
			if(!filter.test(user_email)){
				error += '<p>E-Mail Is Invalid</p>';
			}
		}
		if(password != '' && password != undefined){
			if(!pass_filter.test(password)){
				error += '<p>You must have the password of 8 characters, including a number (0-9), a capital letter (A-Z), a small letter (a-z), a special letter is mandatory</p>';
			}
		}
		if(password != '' && con_password != '' && typeof password !== "undefined" && typeof con_password !== "undefined"){
			if(password != con_password){
				error += '<p>Password & Confirm Password Not Matching</p>';
			}
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-positive'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip_2,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-positive'
					},
				  ]
				});
				if(response[0].success_status == 1){
					$scope.profile_created_by = $scope.firstname = $scope.lastname = $scope.matri_gender = $scope.matri_marital_status = $scope.matri_Sect = $scope.matri_sub_sect = $scope.matri_caste = $scope.country = $scope.year = $scope.month = $scope.day = $scope.mother_tongue = $scope.matri_mobile = $scope.professional = $scope.description = $scope.user_email = $scope.password = $scope.con_password = '' ;
				}
				$ionicLoading.hide();
			});
		}
	};
})
/** Member Profile Controller**/
.controller('memberprofileCtrl',function($scope,$http,$state,$ionicLoading,$stateParams) {
	/* Member Profile */ /* http://makerites.com/wordpress/jainoswalsajnanfedration/matrimonial/matrimonial_web?action=single_user&user_id=41 */
	$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
	var action = "single_user";
	var user_id = $stateParams.user_id;
	var data_parameters = "action="+action+"&user_id="+user_id;
	$http.post(globalip_2,data_parameters, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		$scope.memberdata = response[0];
		$ionicLoading.hide();
	});
})
/** Member Profile Update Controller**/
.controller('memberupdateCtrl',function($scope,$http,$state,$ionicLoading,$ionicPopup,$cordovaCamera,$cordovaFileTransfer) {
	/* Update */ /* http://makerites.com/wordpress/jainoswalsajnanfedration/matrimonial/matrimonial_web/?action=single_user&user_id=58 */
	/* http://makerites.com/wordpress/jainoswalsajnanfedration/matrimonial/matrimonial_web/?action=update_profile&user_id=50&user_email=gautammakerits@gmail.com&firstname=gautam&lastname=raghuwanshi&description=i%20am%20pghp%20developer&country=France&dob=10/10/1995&mother_tongue=Gujrati&professiona=Sales%20Manager */
	$scope.daysarr = global_daysarr;
	$scope.monthsarr = global_monthsarr;
	$scope.yearsarr = global_yearsarr;
	$scope.countryarr =  global_countryarr;
	/* Mother Tounge */ /* http://makerites.com/wordpress/jainoswalsajnanfedration/matrimonial/matrimonial_web/?action=mother_tongue_list */
	var action1 = "mother_tongue_list";
	var data_parameters1 = "action="+action1;
	$http.post(globalip_2,data_parameters1, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response1) {
		$scope.mother_tongues = response1;
	});
	var data_parameters13 = "action=single_user&user_id="+global_login_id_2+"";
		$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
		$http.post(globalip_2,data_parameters13, {
			headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
		})
		.success(function(response) {
			if(response[0].status == "Y"){
				$scope.profile_created_by = response[0].profile_created_by;
				$scope.firstname = response[0].fname;
				$scope.lastname = response[0].lname;
				$scope.matri_gender = response[0].matri_gender;
				var dob = response[0].dob;
				var date = new Date(dob) ;
				$scope.day = date.getDate();
				$scope.month = date.getMonth()+1;
				$scope.year = date.getFullYear();
				$scope.matri_marital_status = response[0].matri_marital_status;
				$scope.matri_Sect = response[0].matri_Sect;
				$scope.matri_sub_sect = response[0].matri_sub_sect;
				$scope.matri_castes = response[0].matri_castes;
				$scope.country = response[0].Country;
				$scope.mother_tongue = response[0].mother_tongue ? response[0].mother_tongue : '';
				$scope.matri_mobile = response[0].matri_mobile;
				$scope.user_email = response[0].email;
				$scope.image_url = response[0].image_url ? response[0].image_url : './img/siteimgs/boy-512.png';
			}
			$ionicLoading.hide();
		});
	$scope.submitmemberupdateForm = function() {
		var error = '';
		var action = "update_profile";
		var profile_created_by = $scope.profile_created_by;
		var firstname = $scope.firstname;
		var lastname = $scope.lastname;
		var matri_gender = $scope.matri_gender;
		var country = $scope.country;
		var year = $scope.year;
		var month = $scope.month;
		var day = $scope.day;
		var dob = year+'-'+month+'-'+day;
		var matri_marital_status = $scope.matri_marital_status;
		var matri_Sect = $scope.matri_Sect;
		var matri_sub_sect = $scope.matri_sub_sect;
		var matri_castes = $scope.matri_castes;
		var mother_tongue = $scope.mother_tongue != undefined ? $scope.mother_tongue : '';
		var matri_mobile = $scope.matri_mobile;
		var user_email = $scope.user_email;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var data_parameters = "action="+action+"&user_id="+global_login_id_2+"&profile_created_by="+profile_created_by+"&user_email="+user_email+"&firstname="+firstname+"&lastname="+lastname+"&matri_gender="+matri_gender+"&matri_country="+country+"&matri_dob="+dob+"&matri_marital_status="+matri_marital_status+"&matri_Sect="+matri_Sect+"&matri_sub_sect="+matri_sub_sect+"&matri_castes="+matri_castes+"&matri_mobile="+matri_mobile+"&mother_tongue="+mother_tongue;
		if(typeof global_login_id_2 === "undefined" || typeof profile_created_by === "undefined" || typeof user_email === "undefined" || typeof firstname === "undefined" || typeof lastname === "undefined" || typeof matri_gender === "undefined" || typeof matri_marital_status === "undefined" || typeof matri_Sect === "undefined" || typeof matri_sub_sect === "undefined" || typeof matri_castes === "undefined" || typeof matri_mobile === "undefined" || typeof country === "undefined" || typeof year === "undefined" || typeof month === "undefined" || typeof day === "undefined" || global_login_id_2 == "" || profile_created_by == "" || firstname == "" || lastname == "" || matri_gender == "" || matri_marital_status == "" || matri_marital_status == null || matri_Sect == "" || matri_Sect === null || matri_sub_sect == "" || matri_sub_sect == null || matri_castes == "" || matri_castes == null || matri_mobile == "" || country == "" || country == null || year == "" || month == "" || day == "" || user_email == ""){
			error += '<p>All (*) Marked Fields Are Compulsory</p>';
		}
		if(user_email != '' && user_email != undefined){
			if(!filter.test(user_email)){
				error += '<p>E-Mail Is Invalid</p>';
			}
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-positive'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip_2,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-positive'
					},
				  ]
				});
				if(response[0].success_status == 1){
					//$scope.user_name = $scope.firstname = $scope.lastname = $scope.country = $scope.year = $scope.month = $scope.day = $scope.mother_tongue = $scope.professional = $scope.description = $scope.user_email = $scope.password = $scope.con_password = '' ;
				}
				$ionicLoading.hide();
			});
		}
	};
	$scope.chooseOption4Profile = function() {
		$ionicPopup.show({
		  template: '<div class="row text-center"><div class="col col-50"><button class="button button-royal icon ion-camera" ng-click="takePhoto()"></button></div><div class="col col-50"><button class="button button-energized icon ion-images" ng-click="choosePhoto()" ></button></div></div>',
		  //templateUrl: 'templates/uploadmemberregistration.html',
		  title: 'Choose Option',
		  scope: $scope,
		  buttons: [
			{ 
			  text: 'Cancel',
			  type: 'button-positive'
			},
		  ]
		});
		
	};
	// open PhotoLibrary
		$scope.takePhoto = function () {
			//myPopup.close();
			console.log('takePhoto');
			var options = {
				quality: 75,
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.CAMERA,
				allowEdit: true,
				encodingType: Camera.EncodingType.JPEG,
				targetWidth: 300,
				targetHeight: 300,
				popoverOptions: CameraPopoverOptions,
				saveToPhotoAlbum: false
			};
			$cordovaCamera.getPicture(options).then(function (imageData) {
				$scope.image_url = "data:image/jpeg;base64," + imageData;
				/*var server = globalip_2+"?action=updateProfileImg&user_id="+global_login_id_2;
				var options = new FileUploadOptions();
				options.fileKey = "profile_img";
				options.fileName = imageData.substr(imageData.lastIndexOf('/') + 1);
				options.mimeType = "image/jpeg";
				options.chunkedMode = false; // Transfer picture to server
				var ft = new FileTransfer();
				ft.upload(imageData, server, function(r) {
					//document.getElementById('camera_status').innerHTML = "Upload successful: " + r.bytesSent + " bytes uploaded.";
				}, function(error) {
				   // document.getElementById('camera_status').innerHTML = "Upload failed: Code = " + error.code;
				}, options);*/
			}, function (err) {
				// An error occured. Show a message to the user
			});
		}
		$scope.choosePhoto = function () {
			//myPopup.close();
			console.log('choosePhoto');
			var options = {
				quality: 75,
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
				allowEdit: true,
				encodingType: Camera.EncodingType.JPEG,
				targetWidth: 300,
				targetHeight: 300,
				popoverOptions: CameraPopoverOptions,
				saveToPhotoAlbum: false
			};
			$cordovaCamera.getPicture(options).then(function (imageData) {
				$scope.image_url = "data:image/jpeg;base64," + imageData;
				/*var server = globalip_2+"?action=updateProfileImg&user_id="+global_login_id_2;
				var options = new FileUploadOptions();
				options.fileKey = "profile_img";
				options.fileName = imageData.substr(imageData.lastIndexOf('/') + 1);
				options.mimeType = "image/jpeg";
				options.chunkedMode = false; // Transfer picture to server
				var ft = new FileTransfer();
				ft.upload(imageData, server, function(r) {
					//document.getElementById('camera_status').innerHTML = "Upload successful: " + r.bytesSent + " bytes uploaded.";
				}, function(error) {
				   // document.getElementById('camera_status').innerHTML = "Upload failed: Code = " + error.code;
				}, options);*/
			}, function (err) {
				// An error occured. Show a message to the user
			});
		}
})
/** Forgot Password Member Controller**/
.controller('forgotpasswordmemberCtrl',function($scope,$http,$ionicLoading,$state,$ionicPopup) {
	/* Forgot Password Member */ /* http://makerits.com/jainoswalsajnanfedration/matrimonial/matrimonial_web??action=Forgot&user_email=vivek.makerit@gmail.com */
	$scope.forgotpasswordmembersubmit = function() {
		var error = '';
		var action = "Forgot";
		var user_email = $scope.user_email;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
		var data_parameters = "action="+action+"&user_email="+user_email;
		if(typeof user_email === "undefined" || user_email == ""){
			error += '<p>Email Is Required</p>';
		}
		if(user_email != '' && user_email != undefined){
			if(!filter.test(user_email)){
				error += '<p>Invalid E-Mail Format</p>';
			}
		}
		if(error != ''){
			$ionicPopup.show({
			  template: '',
			  title: error,
			  scope: $scope,
			  buttons: [
				{ 
				  text: 'Ok',
				  type: 'button-positive'
				},
			  ]
			});
		}
		else{
			$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
			$http.post(globalip_2,data_parameters, {
				headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.success(function(response) {
				$scope.msg = response[0].msg;
				$ionicPopup.show({
				  template: '',
				  title: response[0].msg,
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-positive'
					},
				  ]
				});
				if(response[0].success_status == 1){
					$scope.user_email = '' ;
				}
				$ionicLoading.hide();
			});
		}
	};
})
/** Member List Controller**/
.controller('memberlistCtrl',function($scope,$ionicSlideBoxDelegate,$ionicLoading,$http,$state) {
	/* Member List */ /* http://makerits.com/jainoswalsajnanfedration/matrimonial/matrimonial_web/?action=users_list */
	$ionicLoading.show({template: '<ion-spinner icon="crescent"></ion-spinner>'});
	var action = "users_list";
	var data_parameters = "action="+action;
	$http.post(globalip_2,data_parameters, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		$scope.members = response;
		$ionicLoading.hide();
	});
})
/** Menu **/
.controller('MenuController', function($scope, $ionicSideMenuDelegate,$state,$ionicHistory,$rootScope) {
	$scope.site_view = '';
	$scope.switch_site = function(site){
		$rootScope.$broadcast('site_view',{global_site_view:site});
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		var loc = site == 'site' ? 'dashboard' : site;
		$state.go('app.'+loc);
		$ionicSideMenuDelegate.toggleLeft();
	}
	$rootScope.$on('site_view', function (event, args) {
		$scope.site_view = args.global_site_view;
	});
	$scope.site_view = $scope.site_view ? $scope.site_view : 'site';
	$scope.GotoSanvidhaan = function(){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('app.sanvidhaan');
		$ionicSideMenuDelegate.toggleLeft();
	}
	$scope.GotoPadadhikari = function(){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('app.padadhikari');
		$ionicSideMenuDelegate.toggleLeft();
	}
	$scope.GotoKaryakarini = function(){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('app.karyakarini');
		$ionicSideMenuDelegate.toggleLeft();
	}
	$scope.GotoUddeshya = function(){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('app.uddeshya');
		$ionicSideMenuDelegate.toggleLeft();
	}
	$scope.GotoBusiness_directory = function(){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('app.business_directory');
		$ionicSideMenuDelegate.toggleLeft();
	}
	$scope.GotoMatrimonial = function(){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$rootScope.$broadcast('site_view',{global_site_view:'matrimonial'});
		$state.go('app.matrimonial');
		$ionicSideMenuDelegate.toggleLeft();
	}
	$scope.GotoLink = function(url){
	  var ref = window.open(url,'_blank','location=no'); 
	  return false;
	}
	$scope.GotoEkal_khidki = function(){ 
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('app.jain-thirth-yatra');
		$ionicSideMenuDelegate.toggleLeft();
	}
});
