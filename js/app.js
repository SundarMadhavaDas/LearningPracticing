'use strict';

var app =angular.module("app", ['app.mcsas', 'mwl.calendar', 'ui.tree', 'gridster', 'ui.router.state', 'ui.bootstrap','ncy-angular-breadcrumb','ngTouch', 'ui.grid', 'ui.grid.moveColumns', 'chartjs-directive']);

app.config(function($stateProvider,$urlRouterProvider){
$stateProvider
.state('/', {
     url: "",
     templateUrl: 'partials/login.html'           
    })

.state('forgot-password', {
     url: "/forgot-password",
     templateUrl: 'partials/forgot-password.html'           
    })

.state('new-account', {
     url: "/new-account",    
     templateUrl: 'partials/new-account.html'      
    })

.state('app', {
     url: "/App",
     templateUrl: 'partials/app.html',    
     controller: 'NotesController' 
    })

.state('app.home', {
     url: "/Home",
     templateUrl: 'partials/home.html',
     controller: 'TabsDemoCtrl' ,
     ncyBreadcrumb: {
          label: 'Home'
        }  
    })

.state('app.curriculum', {
     url: "/Curriculum",
     templateUrl: 'partials/curriculum.html',
     controller: '',
     ncyBreadcrumb: {
            label: 'curriculum',
            parent: 'app'     
        }
    })

.state('app.math', {
     url: '/math',
     templateUrl: 'partials/math.html',
     controller: 'Curriculum_subjectCtrl',
      ncyBreadcrumb: {
            label: 'Math',
            parent: 'app'     
        }
     })

.state('app.math.module', {
     url: '/{moduleId:[0-9]{1,4}}',
     templateUrl: 'partials/math_module.html',
     controller: 'Curriculum_moduleCtrl' ,
     ncyBreadcrumb: {
          label: 'math.module',
          parent: 'app'
        }
    })

.state('app.lo', {
      url: '/lo',
      templateUrl: 'partials/basecontent.html'    
    })

.state('app.lo.content', {
      url: '/{loId:[0-9]{1,4}}',
      templateUrl: 'partials/content.html',
      controller: 'Curriculum_loCtrl',
      ncyBreadcrumb: {
          label: 'content'
        }
    })

.state('app.notes', {
     url: '/notes',
     templateUrl: 'templates/home.html',
     controller: 'NotesController' ,
     ncyBreadcrumb: {
            label: 'Notes',
            parent: 'app'
        }
    })

.state('app.starttest', {
     url: "/starttest",
     templateUrl: 'partials/starttest.html',
     controller: '' 
    })

.state('app.report', {
      url: '/Report',
      templateUrl: 'table/report.html',
      controller: 'reportCtrl'
       
    })

.state('app.report.subject', {
      url: '/Subject',
    
            templateUrl: 'table/module_table.html',
            controller: 'reportCtrl'
       
    })
.state('app.report.module', {
      url: '/Sub/Module/{moduleId:[0-9]{1,4}}',
      templateUrl: 'table/module.html',
      controller: 'lessonCtrl' 
    })

.state('app.report.lesson', {
      url: '/Sub/Module/Lesson/{loId:[0-9]{1,4}}',
    
            templateUrl: 'table/los.html',
            controller: 'losCtrl' 
    })

.state('app.report.LO', {
      url: '/Sub/Module/Lesson/LO/{skillId:[0-9]{1,4}}',
    
            templateUrl: 'table/skill.html',
            controller: 'skillCtrl' 
    })

.state('app.course', {
      url: "/course",
    
     templateUrl: 'publisher/course.html',    
       controller: '' 
    })
.state('app.newcourse', {
      url: "/Newcourse",
    
     templateUrl: 'publisher/newcourse.html',    
       controller: '' 
    })
.state('app.newmodule', {
      url: "/Newmodule",
    
     templateUrl: 'publisher/newmodule.html',    
       controller: '' 
    })
.state('app.newmodule.moduleform', {
      url: "/moduleform",
    
     templateUrl: 'publisher/moduleform.html',    
       controller: '' 
    })
.state('app.lesson', {
      url: "/Newlesson",
    
     templateUrl: 'publisher/lesson.html',    
       controller: '' 
    })
.state('app.lesson.lessonform', {
      url: "/lessonform",
    
     templateUrl: 'publisher/lessonform.html',    
       controller: '' 
    })
});



// controller for home page( teacher dashboard widgets)///////////////////////////////////////////////////

app.controller('TabsDemoCtrl',['$scope', '$window', '$timeout',
            function ($scope, $window, $timeout) {
     $scope.$on('$locationChangeStart', function(e, next, current) {
            //$scope.page = next.split('/').splice(-1);
            //$scope.styleUrl = 'demo/' + $scope.page + '/style.css'
        });
     $scope.gridsterOptions = {
      margins: [10, 10],
      columns: 9,
      draggable: {
        handle: 'h3'
      }
    };
///////////////////// for Default widget and new widget ////////////////////////////////////
    $scope.dashboards = {
      '1': {
        id: '1',
        name: 'Home',
        widgets: [ {
          col: 0,
          row: 6,
          sizeY: 1,
          sizeX: 6,
          name: "Widget 1"
        }]
      }  
    };
    $scope.clear = function() {
      $scope.dashboard.widgets = [];
    };

    $scope.addWidget = function() {
      $scope.dashboard.widgets.push({
        name: "New Widget",
        sizeX: 1,
        sizeY: 1
      });
    };

    $scope.$watch('selectedDashboardId', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.dashboard = $scope.dashboards[newVal];
      } else {
        $scope.dashboard = $scope.dashboards[1];
      }
    });
 ///////////////////////////////////////////////////////////////////////////               
 
////////////////for Recommendedd widget//////////////////////////////////
                              
    $scope.dashboards1 = {
      '1': {
        id: '1',
        
        widgets: [ {
          col: 3,
          row: 1,
          sizeY: 2,
          sizeX: 3,
          name: "Recommended Content widget"
        }]
      }
    };
     $scope.$watch('selectedDashboardId', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.dashboard1 = $scope.dashboards1[newVal];
      } else {
        $scope.dashboard1 = $scope.dashboards1[1];
      }
    });         
                
//////////////////////////////////////////////////////////////////////////////////////
                
  ////////////////for Calendar widget//////////////////////////////////
                              
    $scope.dashboards2 = {
      '1': {
        id: '1',
        
        widgets: [ {
          col: 0,
          row: 1,
          sizeY: 4,
          sizeX: 3,
          name: "Things in Class"
        }]
      }
    };
     $scope.$watch('selectedDashboardId', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.dashboard2 = $scope.dashboards2[newVal];
      } else {
        $scope.dashboard2 = $scope.dashboards2[1];
      }
    });         
                
//////////////////////////////////////////////////////////////////////////////////////

////////////////for Roster widget//////////////////////////////////
                              
    $scope.dashboards3 = {
      '1': {
        id: '1',
        
        widgets: [ {
          col: 3,
          row: 4,
          sizeY: 2,
          sizeX: 3,
          name: "Roster widget"
        }]
      }
    };
     $scope.$watch('selectedDashboardId', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.dashboard3 = $scope.dashboards3[newVal];
      } else {
        $scope.dashboard3 = $scope.dashboards3[1];
      }
    });         
                
//////////////////////////////////////////////////////////////////////////////////////  
////////////////for Assignment widget//////////////////////////////////
                              
    $scope.dashboards4 = {
      '1': {
        id: '1',
        
        widgets: [ {
          col: 6,
          row: 1,
          sizeY: 2,
          sizeX: 3,
          name: "Assignment widget"
        }]
      }
    };
     $scope.$watch('selectedDashboardId', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.dashboard4 = $scope.dashboards4[newVal];
      } else {
        $scope.dashboard4 = $scope.dashboards4[1];
      }
    });         
                
//////////////////////////////////////////////////////////////////////////////////////  

////////////////for Collabration widget//////////////////////////////////
                              
    $scope.dashboards5 = {
      '1': {
        id: '1',
        
        widgets: [ {
          col: 6,
          row: 3,
          sizeY: 3,
          sizeX: 3,
          name: "Activity Feed"
        }]
      }
    };
     $scope.$watch('selectedDashboardId', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.dashboard5 = $scope.dashboards5[newVal];
      } else {
        $scope.dashboard5 = $scope.dashboards5[1];
      }
    });         
                
//////////////////////////////////////////////////////////////////////////////////////  
                
    // init dashboard
    $scope.selectedDashboardId = '1';           
                
     ////////////////////////////
                
             $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.slide1=[];
  
  
  
  $scope.addSlide = function() {
    var newWidth = 300+ slides.length + 1;

    
    slides.push({
      image: 'http://placekitten.com/' + newWidth  + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
  for(var j=0;j<4;j++)
  {
    
    
    $scope.slide1[j]=$scope.slides[j+1];
  }
  $scope.slide1[3]=$scope.slides[0];
 
}]);


//////////////// controller for open moodal of Calendar widget ////////////////////////////

app.controller('CalendarWidgetCtrl', ['$scope', '$modal', '$log', 
  function($scope, $modal, $log) {

    $scope.remove = function(widget) {
      $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
    };

    $scope.openSettings = function(widget) {
      $modal.open({
        scope: $scope,
        templateUrl: 'demo/dashboard/widget_settings.html',
        controller: 'WidgetSettingsCtrl',
        resolve: {
          widget: function() {
            return widget;
          }
        }
      });
    };
      
   $scope.items = ['Group A', 'Group B', 'Group C']; 
     
        $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/widget/calendarWidgetContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };      
  }
]);
/////////////////////////////////////////////////////////////////////////////
//////////////// controller for open moodal of Default widget //////////////////////////////////////

app.controller('CustomWidgetCtrl', ['$scope', '$modal', '$log', 
  function($scope, $modal, $log) {

    $scope.remove = function(widget) {
      $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
    };

    $scope.openSettings = function(widget) {
      $modal.open({
        scope: $scope,
        templateUrl: 'demo/dashboard/widget_settings.html',
        controller: 'WidgetSettingsCtrl',
        resolve: {
          widget: function() {
            return widget;
          }
        }
      });
    };
      
   $scope.items = ['Group A', 'Group B', 'Group C']; 
     
        $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/widget/RosterWidgetContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

  };
      
      
  }
]);
//////////////// controller for open moodal of Roster widget //////////////////////////////////////

app.controller('RosterWidgetCtrl', ['$scope', '$modal', '$log', 
  function($scope, $modal, $log) {

    $scope.remove = function(widget) {
      $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
    };

    $scope.openSettings = function(widget) {
      $modal.open({
        scope: $scope,
        templateUrl: 'demo/dashboard/widget_settings.html',
        controller: 'WidgetSettingsCtrl',
        resolve: {
          widget: function() {
            return widget;
          }
        }
      });
    };
      
   $scope.items = ['Group A', 'Group B', 'Group C']; 
     
        $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/widget/RosterWidgetContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

  };
      
      
  }
]);

//////////////// controller for open moodal of Recommended widget //////////////////////////////

app.controller('recommendWidgetCtrl', ['$scope', '$modal', '$log', 
  function($scope, $modal, $log) {

    $scope.remove = function(widget) {
      $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
    };

   
    $scope.openSettings = function(widget) {
      $modal.open({
        scope: $scope,
        templateUrl: 'demo/dashboard/widget_settings.html',
        controller: 'WidgetSettingsCtrl',
        resolve: {
          widget: function() {
            return widget;
          }
        }
      });
    };
      
   $scope.items = ['Group A', 'Group B', 'Group C']; 
     
        $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/widget/recommendedWidgetContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

  };    
  }
]);

///////////////////////////////////////////////////////////////////////////////
//////////////// controller for open moodal of Default widget //////////////////////////////////////

app.controller('AssignmentWidgetCtrl', ['$scope', '$modal', '$log', 
  function($scope, $modal, $log) {

    $scope.remove = function(widget) {
      $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
    };

    $scope.openSettings = function(widget) {
      $modal.open({
        scope: $scope,
        templateUrl: 'demo/dashboard/widget_settings.html',
        controller: 'WidgetSettingsCtrl',
        resolve: {
          widget: function() {
            return widget;
          }
        }
      });
    };
      
   $scope.items = ['Group A', 'Group B', 'Group C']; 
     
        $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/widget/assignmentwidgetContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

  };
      
      
  }
]);
///////////////////////////////////////////////////////////////////////////////////////////

//////////////////// controller for functioning of calendar //////////////////////////////
app.controller('Calendarctrl', function ($modal, moment) {

    var vm = this;

    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';
    vm.calendarDay = new Date();
    vm.events = [
      {
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        type: 'info',
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: 'This is a really long event title that occurs on every year',
        type: 'important',
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true
      }
    ];

    /*
     var currentYear = moment().year();
     var currentMonth = moment().month();

    function random(min, max) {
      return Math.floor((Math.random() * max) + min);
    }

    for (var i = 0; i < 1000; i++) {
      var start = new Date(currentYear,random(0, 11),random(1, 28),random(0, 24),random(0, 59));
     vm.events.push({
        title: 'Event ' + i,
        type: 'warning',
        startsAt: start,
        endsAt: moment(start).add(2, 'hours').toDate()
      })
    }*/

   

  });

////////////////Commen  controller for close moodal of All widget /////////////////////////////////

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

//controller for Widget Settings//

app.controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$modalInstance', 'widget',
  function($scope, $timeout, $rootScope, $modalInstance, widget) {
    $scope.widget = widget;

    $scope.form = {
      name: widget.name,
      sizeX: widget.sizeX,
      sizeY: widget.sizeY,
      col: widget.col,
      row: widget.row
    };

    $scope.sizeOptions = [{
      id: '1',
      name: '1'
    }];

    $scope.dismiss = function() {
      $modalInstance.dismiss();
    };

    $scope.remove = function() {
      $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
      $modalInstance.close();
    };

    $scope.submit = function() {
      angular.extend(widget, $scope.form);

      $modalInstance.close(widget);
    };

  }
]);

// helper code
app.filter('object2Array', function() {
  return function(input) {
    var out = [];
    for (i in input) {
      out.push(input[i]);
    }
    return out;
  }
});

//// function for breadcrumb/////

app.run(function($rootScope, $state, $breadcrumb) {
    $rootScope.isActive = function(stateName) {
      return $state.includes(stateName);
    }
  });

////// Services & json for Curriculum player   //////////////////////////////////////////////////////////

app.service('ContactService', function () {
    //to create unique contact id
    var uid = 1;
    
    //contacts array to hold list of all contacts
    var contacts = 
     [
            {
                "id":"0",
             "title": "ABOUT IIT MATH",
                        "LOS": [
                            {   
                                "id": "1",
                                "lo": "IIT MATH SYLLABUS",
                                "description": "Tips for IIT Preparation",
                                "content": "Content of IIT MggghkATH SYLLABUS"
                            },
                            {   
                                "id": "2",
                                "lo": "The timlines for preparation of IIT",
                                "description": "The timlines for preparation of IIT",
                                "content": "the content of timelines for iit prep"
                            },
                            {   
                                "id": "3",
                                "lo": "Score Requirements",
                                "description": "Tips for IIT Preparation Score Requirements",
                                "content": "The content of score requiremnt"
                            }
                        ] 
            },
            {
                
                "id":"1",
                        "title": "Probability",
                        "LOS": [
                            {   
                                "id": "1",
                                "lo": " Bayesian Analysis",
                                "description": "IIT Preparation for  Bayesian Analysis",
                                "content": "Content of  Bayesian Analysis"
                            },
                            {   
                                "id": "2",
                                "lo": " Birthday Problem",
                                "description": " Birthday Problem preparation of IIT",
                                "content": "the content of  Birthday Problem"
                            },
                            {   "id": "3",
                                "lo": "Chuck-a-Luck",
                                "description": "Chuck-a-Luck for IIT Preparation",
                                "content": "The content for Chuck-a-Luck"
                            }
                        ]
                    },

            {
                "id":"2",
             "title": "Permu & combi",
                        "LOS": [
                            {   
                                "id": "1",
                                "lo": "Factorial",
                                "description": "Factorialfor IIT Preparation",
                                "content": "Content of Factorial for IIT"
                            },
                            {
                                "id": "2",
                                "lo": "Generating Function",
                                "description": "Generating Function for preparation of IIT",
                                "content": "the content of Generating Function"
                            },
                            {   
                                "id": "3",
                                "lo": "Fibonacci Number",
                                "description": "Fibonacci Number for IIT Preparation",
                                "content": "The content of Fibonacci Number"
                            }
                        ]

            },
            {
                        "id":"3",     
                        "title": "Quadratic Eq.",
                       "LOS": [
                            {   
                                "id": "1",
                                "lo": "Polynomial",
                                "description": "Polynomial for IIT Preparation",
                                "content": "Content of Polynomial IIT MATH"
                            },
                            {   
                                "id": "2",
                                "lo": "Quadratic Formula",
                                "description": "Quadratic Formula for preparation of IIT",
                                "content": "the content of Quadratic Formula for iit prep"
                            },
                            {   
                                "id": "3",
                                "lo": "Geometric Mean",
                                "description": "Geometric Mean for IIT Preparation Score Requirements",
                                "content": "The content of Geometric Mean"
                            }
                        ]
                    },
            {
                "id":"4",
             "title": "Geometry",
                       "LOS": [
                            {   
                                "id": "1",
                                "lo": "IIT MATH SYLLABUS",
                                "description": "Tips for IIT Preparation",
                                "content": "Content of IIT MATH SYLLABUS"
                            },
                            {
                                "id": "2",
                                "lo": "The timlines for preparation of IIT",
                                "description": "The timlines for preparation of IIT",
                                "content": "the content of timelines for iit prep"
                            },
                            {
                                "id": "3",
                                "lo": "Score Requirements",
                                "description": "Tips for IIT Preparation Score Requirements",
                                "content": "The content of score requiremnt"
                            }
                        ]
 
            },
            {
                "id":"5",
                
                        "title": "Algebra",
                        "LOS": [
                            {
                                "id": "1",
                                "lo": "Addition Theorm",
                                "description": "IIT Algebra Addition Theorm",
                                "content": "Content of IIT MATH SYLLABUS"
                            },
                            {
                                "id": "2",
                                "lo": "Multiplication Therom",
                                "description": "IIT Algebra Multiplication Therom",
                                "content": "the content of timelines for iit prep"
                            },
                            {
                                "id": "3",
                                "lo": "Bayes Theorm",
                                "description": "IIT Algebra Bayes Theorm",
                                "content": "The content of score requiremnt"
                            }
                        ]
                    }
        
        ];        

    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////

//// controller for curriculum Subject ////////////////////////////////////////////////////////////

app.controller('Curriculum_subjectCtrl', function ($scope,$stateParams, ContactService) {
  $scope.oneAtATime = true;
   
  $scope.modules = ContactService.list();
  
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});

//// controller for curriculum module in Subject ////////////////////////////////////////////////////

app.controller('Curriculum_moduleCtrl', function ($rootScope,$scope,$stateParams, ContactService) {
  $scope.oneAtATime = true;
  $scope.moduleId=$stateParams.moduleId;
  $scope.modules = ContactService.list();
  $rootScope.moduleId=$stateParams.moduleId;
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
    
/////////////////////////////////
 $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.slide1=[];
    $scope.addSlide = function() {
    var newWidth = 350+ slides.length + 1;

    
    slides.push({
      image: 'http://placekitten.com/' + newWidth  + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
  for(var j=0;j<3;j++)
  {
    $scope.slide1[j]=$scope.slides[j+1];
  }
  $scope.slide1[3]=$scope.slides[0];
});


////////////////////////////////////////////////////////////////////////////////////////////////////////


//// controller for curriculum lo in module in Subject ////////////////////////////////////////////////

app.controller('Curriculum_loCtrl', function ($rootScope,$scope,$stateParams, ContactService) {
   
   $scope.oneAtATime = true;
   $scope.moduleId=$rootScope.moduleId;
   $scope.loId=$stateParams.loId;
   $scope.modules = ContactService.list();
	
    $scope.showSelectedText = function() {

    $scope.selectedText =  $scope.getSelectionText();
    $scope.selectedTextarray=$scope.getSelectionText();
    };
	
	$scope.getSelectionText = function() {

		var text = "";
      if (window.getSelection) {
          text = window.getSelection().toString();
      } else if (document.selection && document.selection.type != "Control") {
          text = document.selection.createRange().text;
      }
		var showmenu=1;

      return text;
    };
    
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});

//// controller is used for  progress bar in curriculum player in lo ////

app.controller('ProgressDemoCtrl', function ($scope) {
  $scope.max = 200;

  $scope.random = function() {
    var value = Math.floor((Math.random() * 100) + 1);
    var type;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    $scope.showWarning = (type === 'danger' || type === 'warning');

    $scope.dynamic = value;
    $scope.type = type;
  };
  $scope.random();

  $scope.randomStacked = function() {
    $scope.stacked = [];
    var types = ['success', 'info', 'warning', 'danger'];

    for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
        var index = Math.floor((Math.random() * 4));
        $scope.stacked.push({
          value: Math.floor((Math.random() * 30) + 1),
          type: types[index]
        });
    }
  };
  $scope.randomStacked();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////


/// this sievices & json is used for table (All lavel) in Report/// 

app.service('recordService', function () {
    //to create unique contact id
    var uid = 1;
    
    //contacts array to hold list of all contacts
    var records = 
 [
            {
                "id": "0",
                "title": "Probability",
                "proficiency": "minimal",
                "proficiencyval":"1",
                "status": "complete",
                "statusval":"100",
                "grit": "medium",
                "gritval":"2",
                "lesson": [
                    {
                        "id": "101",
                        "title": "Lesson-1",
                        "proficiency": "partial",
                        "proficiencyval":"2",
                        "status": "Half way",
                        "statusval":"50",
                        "grit": "High",
                        "gritval":"3",
                        "LO": [
                            {
                                "id": "1001",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1002",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1003",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    },
                    {
                        "id": "102",
                        "title": "Lesson-2",
                        "proficiency": "medium",
                        "proficiencyval":"3",
                        "status": "Start",
                        "statusval":"0",
                        "grit": "Low",
                        "gritval":"1",
                        "LO": [
                            {
                                "id": "1004",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1005",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1006",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    },
                    {
                        "id": "103",
                        "title": "Lesson-3",
                        "proficiency": "minimal",
                        "proficiencyval":"1",
                        "status": "complete",
                        "statusval":"100",
                        "grit": "medium",
                        "gritval":"2",
                        "LO": [
                            {
                                "id": "1007",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1008",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1009",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    }
                    
                ]
             }, 
             {
                "id": "1",
                "title": "Permu & combi",
                "proficiency": "minimal",
                "proficiency": "partial",
                "proficiencyval":"2",
                "status": "Half way",
                "statusval":"50",
                "grit": "High",
                "gritval":"3",
                "lesson": [
                    {
                        "id": "201",
                        "title": "Lesson-4",
                        "proficiency": "partial",
                        "proficiencyval":"2",
                        "status": "Half way",
                        "statusval":"50",
                        "grit": "High",
                        "gritval":"3",
                        "LO": [
                            {
                                "id": "2001",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2002",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2003",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    },
                    {
                        "id": "202",
                        "title": "Lesson-5",
                        "proficiency": "medium",
                        "proficiencyval":"3",
                        "status": "Start",
                        "statusval":"0",
                        "grit": "Low",
                        "gritval":"1",
                        "LO": [
                            {
                                "id": "2004",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2005",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2006",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    },
                    {
                        "id": "203",
                        "title": "Lesson-6",
                        "proficiency": "minimal",
                        "proficiencyval":"1",
                        "status": "complete",
                        "statusval":"100",
                        "grit": "medium",
                        "gritval":"2",
                        "LO": [
                            {
                                "id": "2007",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2008",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2009",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    }
                    
                ]
            }          

            
        ];
        
// simply Returns the Mudule from all records
    this.list = function () {
        return records;
    }
    
// simply Returns the lesson from modules   
  
    this.module= function (id) {
    
      
        return records[id].lesson;
      
    }
    
// simply Returns the LOs from lessons
    this.los= function (lid) {
      
        var j;
        j= moduleidgen(lid);
        return records[j-1].lesson[j-1].LO;
    }

// simply Returns the Skill from LO
    this.LO= function (sklid) {
        var j;
        j= moduleidgen(sklid);
        j=j*100;
        
        var k= logeneration(sklid);
        j=j+k;
        return records[k-1].lesson[k-1].LO[k-1].skill;
    }
});

var moduleidgen=function(lid)
{
    
    var j=parseInt(lid/100);
    return j;
    
};
    
var logeneration=function(sklid)
{
    
    var j=parseInt(sklid/1000);
    return j;
    
};
///////////////////////////////////////////////////////////////////////////////////////////////////////



/// Controller for Table of module & Chart in Report///////////////////////////////////////////////////

app.controller('reportCtrl', ['$scope', '$http','recordService', function ($scope, $http, recordService ) {
  $scope.gridOptions = {
  };

  $scope.gridOptions.columnDefs = [
    { name: 'title'},
    { name: 'proficiency'},
    { name: 'status'},
    { name: 'grit'}

  ];
 
$scope.gridOptions.data = recordService.list();
$scope.record=$scope.gridOptions.data;

      $scope.visible = function (item) {
        return !($scope.query && $scope.query.length > 0
        && item.title.indexOf($scope.query) == -1);
      };
    
    
    // scope for chart
    
        $scope.generatePieData = function(){
          var data =  [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        },
        {
          value: 40,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Grey"
        },
        {
          value: 120,
          color: "#4D5360",
          highlight: "#616774",
          label: "Dark Grey"
        }

      ]
          $scope.myChart = {"data": data, "options": {} };
        };  
      
          $scope.polarArea = function() {
          document.getElementById('myCoolChart').setAttribute('type', 'PolarArea');
           $scope.generatePieData();
        };
}]);                              
                       
/// Controller for Table of lesson & Chart in Report///////////////////////////////////////////////////

app.controller('lessonCtrl', ['$rootScope','$scope', '$stateParams', '$http','recordService', function ( $rootScope, $scope, $stateParams, $http, recordService ) {
  $scope.gridOptions= {
  };

  $scope.gridOptions.columnDefs = [
    { name: 'title'},
    { name: 'proficiency'},
    { name: 'status'},
    { name: 'grit'}

  ];
 
    
    
$scope.moduleId=$stateParams.moduleId;
$scope.gridOptions.data = recordService.module($scope.moduleId);
$scope.record=$scope.gridOptions.data;
    
     // scope for chart
    
        $scope.generatePieData = function(){
          var data =  [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        },
        {
          value: 40,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Grey"
        },
        {
          value: 120,
          color: "#4D5360",
          highlight: "#616774",
          label: "Dark Grey"
        }

      ]
          $scope.myChart = {"data": data, "options": {} };
        };  
      
         $scope.doughnut = function() {
          document.getElementById('myCoolChart').setAttribute('type', 'Doughnut');
           $scope.generatePieData();
        };
    
}]);


/// Controller for Table of LOs & Chart in Report///////////////////////////////////////////////////

app.controller('losCtrl', ['$rootScope','$scope', '$stateParams', '$http','recordService', function ( $rootScope, $scope, $stateParams, $http, recordService ) {
  $scope.gridOptions= {
  };

  $scope.gridOptions.columnDefs = [
    { name: 'title'},
    { name: 'proficiency'},
    { name: 'status'},
    { name: 'grit'}

  ];
  //console.log(recordService.list());
$scope.moduleId=  $stateParams.moduleId;
    console.log($scope.moduleId);
$scope.loId=$stateParams.loId;
   

$scope.gridOptions.data = recordService.los($scope.loId);
$scope.record=$scope.gridOptions.data;
    
    
    // scope for chart
    
        $scope.generatePieData = function(){
          var data =  [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        },
        {
          value: 40,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Grey"
        },
        {
          value: 120,
          color: "#4D5360",
          highlight: "#616774",
          label: "Dark Grey"
        }

      ]
          $scope.myChart = {"data": data, "options": {} };
        };  
      
        $scope.pie = function() {
          document.getElementById('myCoolChart').setAttribute('type', 'Pie');
           $scope.generatePieData();
        };
  
}]);

/// Controller for Table of Skill & Chart in Report///////////////////////////////////////////////////

app.controller('skillCtrl', ['$rootScope','$scope', '$stateParams', '$http','recordService', function ( $rootScope, $scope, $stateParams, $http, recordService ) {
  $scope.gridOptions= {
  };

  $scope.gridOptions.columnDefs = [
    { name: 'title'},
    { name: 'proficiency'},
    { name: 'status'},
    { name: 'grit'}

  ];
  //console.log(recordService.list());
$scope.moduleId=  $stateParams.moduleId;
    console.log($scope.moduleId);
$scope.loId=$stateParams.loId;
    //console.log($scope.loId);
$scope.skillId=$stateParams.skillId;
    
$scope.gridOptions.data = recordService.LO($scope.skillId);
    console.log($scope.gridOptions.data);
$scope.record=$scope.gridOptions.data;
//$rootScope.loId=$stateParams.loId;
//$rootScope.moduleId=$stateParams.moduleId;    
}]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////