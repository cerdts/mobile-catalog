angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

// .service('GetList', [$q, $hhtp, function($q, $http){
//    var server_url = "https://products.healthcatalyst.com";
    
 //   var ret = {
 //       all : function(){
 //       }
 //   }
    
// }])


.service('List', [function(){
    
    var items = [
        {
            'name': 'Clinical',
            'url':'1'
        },
        {
            'name':'Financial',
            'url':'2'
        },
        {
            'name': 'Operational',
            'url':'3'
        },
        {
            'name': 'Patient Safety',
            'url':'4'
        }
    ];
    
    var listitems = items
    
    return listitems

}])


.service('Registration', ['$http', function($http){

    var api_url = 'https://sheetsu.com/apis/v1.0su/82ed836d4cd6';
    var currentID = 1;

    var ret = {
        all: function(){
            
            return $http.get(api_url).then(function(resp){
                if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
                return resp.data;
            });
            
        }, 
        add: function(data){
            currentID++;
            data.id = currentID;
            
            return $http.post(api_url, data).then(function(resp){
                return resp.data;
            });

        }
    }
    
    ret.all();
    
    return ret;

}]);