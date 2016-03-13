'use strict';
App.factory('UserService', ['$http', '$q', function($http, $q){

    return {
        fetchAllUsers: function(){
            return $http.get('http://localhost:8080/SpringMVC4RestAPI/user/')
                .then(
                    function (response) {
                        return response.data;
                    },
                    function(errResponse) {
                        console.error('Error while fetching user');
                        return $q.reject(errResponse);
                    }
                );
        },
        createUser: function() {
            return $http.post('http://localhost:8080/SpringMVC4RestAPI/user/', user)
                .then(
                    function(response) {
                      return response.data;
                    },
                    function(response) {
                        console.error('Error while updating user');
                        return $q.reject(errResponse);
                    }
                );
        },

        updateUser: function() {
            return $http.put('http://localhost:8080/SpringMVC4RestAPI/user/' + id, user)
                .then(
                    function(response) {
                        return response.data;
                    },
                    function(errResponse) {
                        console.error('Error while updating user');
                        return $q.reject(errResponse);
                    }
                )
        },

        deleteUser: function() {
            return $http.delete('http://localhost:8080/SpringMVC4RestAPI/user/' + id)
                .then(
                    function(response) {
                        return response.data;
                    },
                    function(response) {
                        console.error('Error while deleting user');
                        return $q.reject(errResponse);
                    }
                );
        }
    };

}])