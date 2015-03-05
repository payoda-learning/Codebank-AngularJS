var app = angular.module("movieApp",[]);        
		app.controller("movieCtrl",function($scope, $http, $location){
			
			var href, val, lastSearch;
			$scope.search=false;
			
			// Watch 
			$scope.$watch( 'movieName', function(newValue, oldValue){
			});
			
			$scope.$watch( 'search', function(newValue, oldValue){
			});
			
			// Last search item
			lastSearch = localStorage.getItem("movieName");
			if(lastSearch!='' && lastSearch!=undefined)
				{
					$scope.lastSearchItem=lastSearch;
					$scope.showSearch=true;
				}
			else
				{
					$scope.lastSearchItem='';
					$scope.showSearch=false;
				}
			
			// Search Movie
			$scope.moveieSerach = function(){
                if($scope.movieName)
                {
                	href = '#/?search='+$scope.movieName;
                	val = $scope.movieName;
                	$scope.serviceCall(val);
                	
                	// HISTORY.PUSHSTATE
    				history.pushState('', 'New URL: '+href, href);
    				//e.preventDefault();
                }
            };
            
            // Service - API Call
            $scope.serviceCall = function(val){
            	console.log('val'+val);
            	if(val==0)
            	{
            		setTimeout(function () {
            	        $scope.$apply(function () {
            	        	$scope.movieName='';	           		
        	           		$scope.search=false;
            	        });
            	    }, 100);	            	
            	}
            	else
           		{
            		$scope.movieName=val;
            		localStorage.setItem("movieName", $scope.movieName);
            		console.log(localStorage.getItem("movieName"));
	            	$http.jsonp("http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q="+val+"&callback=JSON_CALLBACK").
	                success(function(data) {
	                  // this callback will be called asynchronously
	                  // when the response is available
	                  $scope.items=data;
	                  $scope.search=true;
	                }).
	                error(function(data) {
	                  // called asynchronously if an error occurs
	                  // or server returns response with an error status.
	                	$scope.search=true;
	                });
           		}
            };
            
           
            // Revert to a previously saved state
            window.addEventListener('popstate', function(event) {
            	console.log('$location.search().search'+$location.search().search);
            	if($location.search().search===undefined){	           		
	           		$scope.serviceCall(0);
	           	}
            	else if($location.search().search!=='' && $location.search().search!== undefined){
					$scope.serviceCall($location.search().search);
	            	console.log('popstate fired!');
				}
	           	else {
	           		$scope.serviceCall(0);
	           	}
           	});
            
            /*window.onpopstate = function(event) {
				if($location.search().search!=='' && $location.search().search!== undefined){
					$scope.serviceCall($location.search().search);
	            	console.log('popstate fired!');
				}
			};*/

            
		});