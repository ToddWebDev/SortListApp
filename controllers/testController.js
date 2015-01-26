(function() {
    
    var TestController = function ($scope, $routeParams) {
        var groupId = $routeParams.groupId;
        $scope.items = null;
        $scope.categories = null;
        $scope.groups = null;
        
        function init() {
            //Search the groups for the groupId
            for (var i=0,len=$scope.groups.length;i<len;i++) {
               if ($scope.groups[i].id === parseInt(groupId)) {
                   $scope.items = $scope.groups[i].items;
                   $scope.categories = $scope.groups[i].categories;
                   $scope.groups = $scope.groups[i];
                   break;
               }
            }
            
        }
        
$scope.groups= [
           {
      id: 1,
      title: 'Home',
      content: 'Valuables at Home',
      subGroups: 0,
      quantity: 0,
      notes: '',
      tags: '',
      icon: 'home',
      counter: 0,
      categories: [
      		{
      			title: 'Tools',
      			location: 'Garage',
      			icon: 'wrench',
      			counter: 0,
      			items: [
      				{
	      			title: 'Craftsman Tool Storage',
	      			desc: '11 Drawer Tool Chest',
	      			price: 299,
	      			datePurch: '2003-03-17',
	      			qty: 1,
	      			value: '299 '	
		  			},
		  			{
			  		title: 'Air Compressor',
			  		desc: 'Portable 8gal Electric',
			  		price: 179,
			  		datePurch: '2003-10-19',
			  		qty: 1,
			  		value: 150
		  			}
		  			]
	  		},
	 		{
      			title: 'Electronics',
      			location: 'Home',
      			icon: 'off',
      			counter: 0,
      			items: [
      				{
	      			title: 'Samsung HD TV',
	      			desc: '52in LED',
	      			price: 2500,
	      			datePurch: '2011-02-11',
	      			qty: 1,
	      			value: '    '	
		  			},
		  			{
			  		title: 'Playstation 4',
			  		desc: '',
			  		price: 399,
			  		datePurch: '2013-10-12',
			  		qty: 1,
			  		value: 399
		  			}
		  			]
	  		},
	  		{
		  		title: 'Furniture',
		  		location: 'Home',
		  		icon: 'book',
		  		counter: 0,
		  		items: [
		  			{
			  		title: 'BookCase with doors',
			  		desc: '',
			  		price: 150,
			  		datePurch: '2013-05-05',
			  		qty: 1,
			  		value: ''
		  			},
		  			{
			  		title: 'End Table with drawer',
			  		desc: '',
			  		price: 99,
			  		datePurch: '',
			  		qty: 4,
			  		value: ''
		  			},
		  			{
			  		title: 'Queen Matress & Boxspring',
			  		desc: 'includes bed frame and headboard',
			  		price: 9500,
			  		datePurch: '',
			  		qty: 1,
			  		value: ''		  			}
		  		]	
	  		},
	  		{
		  		title: 'Decorations',
		  		location: 'Home',
		  		icon: 'picture',
		  		counter: 0,
		  		items: [
		  			{
			  		title: 'Large Mirror',
			  		desc: 'various sizes and styles',
			  		price: 99,
			  		datePurch: '',
			  		qty: 3,
			  		value: ''
		  			},
		  			{
			  		title: 'Clock',
			  		desc: '',
			  		price: 200,
			  		datePurch: '2002-07-04',
			  		qty: 2,
			  		value: ''
		  			}
		  		]
	  		}
	
	  			],
	  items: [
      		{
		  		title: 'Apple MacBook Pro',
		  		desc: '13in Macbook Pro',
		  		price: 2100,
		  		datePurch: '2010-10-31',
		  		qty: 1,
		  		value: 700,
		  	},
		  	{
			  	title: 'iPad Air',
			  	desc: '32gb Space Black',
			  	price: 850,
			  	datePurch: '2012-07-15',
		  		qty: 1,
		  		value: 600,

			 },
			 {
				 title: 'Havertys Chase Sofa',
				 desc: '8ft Brown Leather with 4ft chase',
				 price: 4000,
				 datePurch: '2004-02-21',
				 qty: 1,
		  		 value: 300

			 },
			 {
			 	title: 'Guitar - CF MARTIN',
			 	desc: 'EX1100 Dreadnought',
			 	price: 1200,
			 	datePurch: '2012-05-25',
		  		qty: 1,
		  		value: 1000

			 },
			 {
				 title: 'Golf Clubs',
				 desc: 'Taylor Made Complete Set w/ bag',
				 price: 599,
				 datePurch: '2009-07-01',
				 qty: 1
			 }
			 ]

    },
        {
	  id: 2,
      title: 'Storage',
      content: 'Valuables in Storage',
      subGroups: 0,
      quantity: 0,
      notes: '',
      tags: '',
      icon: 'folder-close',
      counter: 0,
      categories: [
	 		{
      			title: 'Barn',
      			location: 'Backyard',
      			icon: 'tree-deciduous',
      			counter: 0,
      			items: [
      				{
	      			title: 'Christmas Tree & Lights',
	      			desc: 'Holiday Decorations, etc.',
	      			price: 450,
	      			datePurch: '1995-11-15',
	      			qty: 1,
	      			value: 'priceless' 	
		  			},
		  			{
			  		title: 'Mountain Bikes',
			  		desc: 'from that summer we got into bike riding',
			  		price: 300,
			  		datePurch: '2002-04-29',
			  		qty: 2,
			  		value: 300
		  			}
		  			]
	  		} 
	  			],
      items: [
  	    	{
	  			title: 'Patio Furniture',
	  			desc: 'Table, Umprella, 4 chairs',
	  			price: 400,
	  			datePurch: '2008-03-23',
		  		qty: 1

	  		},
	  		{
		  		title: 'Dirt Bike',
		  		desc: 'Suzuki 200cc',
		  		price: 1400,
		  		datePurch: '2009-09-14',
		  		qty: 1,
		  		value: 900
		  	},
		  	{
			  	title: 'Lawnmower',
			  	desc: 'John Deer Gas Push Mower',
			  	price: 650,
			  	datePurch: '1999-06-02',
		  		qty: 1

			  }
			 ]

    },
    {
	  id: 3,
      title: 'Work',
      content: 'Valuables at Work',
      subGroups: 0,
      quantity: 0,
      notes: '',
      tags: '',
      icon: 'briefcase',
      counter: 0,
      categories: [
	 		{
      			title: 'Checked Out',
      			location: 'Work',
      			icon: 'inbox',
      			counter: 0,
      			items: [
      				{
	      			title: 'iPad mini',
	      			desc: 'PROPERTY OF RON SWANSON',
	      			price: 0,
	      			datePurch: '2013-01-15',
	      			qty: 1,
	      			value: 550	
		  			},
		  			{
			  		title: 'Label Maker',
			  		desc: 'Borrowed from Dwight',
			  		price: 0,
			  		datePurch: '',
			  		qty: 1,
			  		value: 79,
		  			}
		  			]
	  		} 
	  			],
      items: [
      		{
      			title: 'Seagate Wireless',
      			desc: '1tb wireless external harddrive',
      			price: 200,
      			datePurch: '2012-09-13',
      			qty: 2
      		},
      		{
	      		title: '2005 Dundie Award',
	      		desc: 'Finest Work, Hottest In The Office',
	      		price: 0,
	      		datePurch: '2005-09-20',
	      		qty: 2,
	      		value: '9000'
      		}
      		]
    }   
        ];

        
        
        init();
    };
    
    TestController.$inject = ['$scope', '$routeParams'];

    angular.module('sortListApp')
      .controller('TestController', TestController);
    
}());