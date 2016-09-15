(function() {

	var imdb = angular.module("imdb")
	imdb.controller("searchBox", searchBox);

	function searchBox($scope, $http,$timeout,message) {
      
		$scope.appName = "The Movie DB";
		$scope.searchName = ''
		var url='http://api.themoviedb.org/3/';
		// var url1='https://api.themoviedb.org/3/movie/550/'
		var key='5eda3946d7bc1c979a17ba8d1f6103b9'
		$scope.getActors = function() {
			
			if ($scope.searchName != '') {
				var promise = $http.get(url+'search/person?api_key='+key+'&query=' + $scope.searchName);
				promise.then(successCallback, errorCallback);
			}
			else
			{

					$scope.results=[{name:"no results!"}];


			}
			function successCallback(response) {
				$scope.results = response.data.results
				console.log("success", response.data.results)
			}

			function errorCallback(response) {
				console.log("error", response.data.results)
			}
		
		};
		// scope.getMovies = function() {
// 			
			// if ($scope.idByName != '') {
				// var promise = $http.get(url+'search/i?api_key='+key+'&query=' + $scope.idByName);
				// promise.then(successCallback, errorCallback);
			// }
			// else
			// {
// 
					// $scope.results=[{name:"no results!"}];
// 
// 
			// }
			// function successCallback(response) {
				// $scope.results = response.data.results
				// console.log("success", response.data.results)
			// }
// 
			// function errorCallback(response) {
				// console.log("error", response.data.results)
			// }
// 		
		// };
		
		
		
		$scope.url1='http://image.tmdb.org/t/p/w500';
		// $scope.imageUrl=$http.get($scope.url1);
// 		
		
	}

})();

