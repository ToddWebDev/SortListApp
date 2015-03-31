(function(){
	var groupsFactory = function(){
		var groups = [
           {
      id: 1,
      title: 'Home',
      content: 'Valuables at Home',
      subGroups: 4,
      count: 5,
      notes: '',
      tags: '',
      icon: 'home',
      context: 'bg-danger',
      categoryCount: 4,
      categories: [
      		{
	      		id: 1,
      			title: 'Tools',
      			location: 'Garage',
      			icon: 'wrench',
      			count: 2,
      			items: [
      				{
	      			id: 1,
	      			title: 'Craftsman Tool Storage',
	      			desc: '11 Drawer Tool Chest',
	      			price: 299,
	      			datePurch: '2003-03-17',
	      			qty: 1,
	      			value: 299	
		  			},
		  			{
			  		id: 2,
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
		 		id: 2,
      			title: 'Electronics',
      			location: 'Home',
      			icon: 'off',
      			count: 2,
      			items: [
      				{
	      			id: 1,
	      			title: 'Samsung HD TV',
	      			desc: '52in LED',
	      			price: 2500,
	      			datePurch: '2011-02-11',
	      			qty: 1,
	      			value: 0,	
		  			},
		  			{
			  		id: 2,
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
		  		id: 3,
		  		title: 'Furniture',
		  		location: 'Home',
		  		icon: 'book',
		  		count: 3,
		  		items: [
		  			{
			  		id: 1,
			  		title: 'BookCase with doors',
			  		desc: '',
			  		price: 150,
			  		datePurch: '2013-05-05',
			  		qty: 1,
			  		value: 150
		  			},
		  			{
			  		id: 2,
			  		title: 'End Table with drawer',
			  		desc: '',
			  		price: 99,
			  		datePurch: '',
			  		qty: 4,
			  		value: 50
		  			},
		  			{
			  		id: 3,
			  		title: 'Queen Matress & Boxspring',
			  		desc: 'includes bed frame and headboard',
			  		price: 9500,
			  		datePurch: '',
			  		qty: 1,
			  		value: 500		  			}
		  		]	
	  		},
	  		{
		  		id: 4,
		  		title: 'Decorations',
		  		location: 'Home',
		  		icon: 'picture',
		  		count: 2,
		  		items: [
		  			{
			  		id: 1,
			  		title: 'Large Mirror',
			  		desc: 'various sizes and styles',
			  		price: 99,
			  		datePurch: '',
			  		qty: 3,
			  		value: 50
		  			},
		  			{
			  		id: 2,
			  		title: 'Clock',
			  		desc: '',
			  		price: 200,
			  		datePurch: '2002-07-04',
			  		qty: 2,
			  		value: 75
		  			}
		  		]
	  		}
	
	  			],
	  items: [
      		{
		  		id: 1,
                title: 'Apple MacBook Pro',
		  		desc: '13in Macbook Pro',
		  		price: 2100,
		  		datePurch: '2010-10-31',
		  		qty: 1,
		  		value: 700,
		  	},
		  	{
			  	id: 2,
                title: 'iPad Air',
			  	desc: '32gb Space Black',
			  	price: 850,
			  	datePurch: '2012-07-15',
		  		qty: 1,
		  		value: 600,

			 },
			 {
				 id: 3,
                 title: 'Havertys Chase Sofa',
				 desc: '8ft Brown Leather with 4ft chase',
				 price: 4000,
				 datePurch: '2004-02-21',
				 qty: 1,
		  		 value: 300

			 },
			 {
                id: 4,
                title: 'Guitar - CF MARTIN',
			 	desc: 'EX1100 Dreadnought',
			 	price: 1200,
			 	datePurch: '2012-05-25',
		  		qty: 1,
		  		value: 1000

			 },
			 {
				 id: 5,
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
      subGroups: 1,
      count: 3,
      notes: '',
      tags: '',
      icon: 'folder-close',
      context: 'bg-info',
      categoryCount: 1,
      categories: [
	 		{
		 		id: 5,
      			title: 'Barn',
      			location: 'Backyard',
      			icon: 'tree-deciduous',
      			count: 2,
      			items: [
      				{
	      			id: 1,
	      			title: 'Christmas Tree & Lights',
	      			desc: 'Holiday Decorations, etc.',
	      			price: 450,
	      			datePurch: '1995-11-15',
	      			qty: 1,
	      			value: -300 	
		  			},
		  			{
			  		id: 2,
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
	  			id: 1,
                title: 'Patio Furniture',
	  			desc: 'Table, Umprella, 4 chairs',
	  			price: 400,
	  			datePurch: '2008-03-23',
		  		qty: 1

	  		},
	  		{
		  		id: 2,
                title: 'Dirt Bike',
		  		desc: 'Suzuki 200cc',
		  		price: 1400,
		  		datePurch: '2009-09-14',
		  		qty: 1,
		  		value: 900
		  	},
		  	{
			  	id: 3,
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
      subGroups: 1,
      count: 2,
      notes: '',
      tags: '',
      icon: 'briefcase',
      context: 'bg-warning',
      categoryCount: 1,
      categories: [
	 		{
		 		id: 6,
      			title: 'Checked Out',
      			location: 'Work',
      			icon: 'inbox',
      			count: 2,
      			items: [
      				{
	      			id: 1,	
	      			title: 'iPad mini',
	      			desc: 'PROPERTY OF RON SWANSON',
	      			price: 0,
	      			datePurch: '2013-01-15',
	      			qty: 1,
	      			value: 550	
		  			},
		  			{
			  		id: 2,
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
      			id: 1,
                title: 'Seagate Wireless',
      			desc: '1tb wireless external harddrive',
      			price: 200,
      			datePurch: '2012-09-13',
      			qty: 2
      		},
      		{
	      		id: 2,
                title: '2005 Dundie Award',
	      		desc: 'Finest Work, Hottest In The Office',
	      		price: 0,
	      		datePurch: '2005-09-20',
	      		qty: 2,
	      		value: 9000
      		}
      		]
    		}   
        ];
        
        var factory = {};
        
    // INDEX SERVICES // NEEDS WORK // NOT OPTIMAL 
    
        var count = 3;
        
    factory.getCount = function(){
            count++;
            return count;
        };
    
    factory.getCategoryCount = function(groupId){
        groupId--;
        if( groups[groupId].count != null){
        groups[groupId].categoryCount++;
        }else{ groups[groupId].categoryCount = 1; }
        return groups[groupId].categoryCount;
    };
        
    factory.getItemCount = function(groupId){
        groupId--;
        if( groups[groupId].count != null){
            groups[groupId].count++;
        }else{ groups[groupId].count = 1; }
        return groups[groupId].count;
    };
        
    factory.getSubItemCount = function(groupId, categoryId){
        groupId--;
        categoryId--;
     console.log(groups[groupId].categories[categoryId].title);
        groups[groupId].categories[categoryId].count++;
        return groups[groupId].categories[categoryId].count;   
    };
        
    // GROUP SERVICES  

    factory.getGroups = function(){
	        return groups;
        };  
    
    factory.getGroup = function(groupId){
	    	 for (var i=0,len=groups.length;i<len;i++) {
               if (groups[i].id === parseInt(groupId)) {
				   return groups[i];
               }
         	}
         	return {};      
        };
        
     factory.saveGroup = function(group, id){
         group.items = [];
         group.categories = [];
         group.context = 'bg-success';
         group.id = id;
         groups.push(group);
        };
        
    factory.removeGroup = function(groupId){
        for(var i=0, l=groups.length; i < l; i++){
            if(groups[i].id === parseInt(groupId)){
                console.log(groups[i].title);
                groups[i].splice(i, 1);
            }
        }
    };
    
//     factory.getGroupIndex = function(groupId){
//        for (var i=0,len=groups.length;i<len;i++) {
//             if (groups[i].id === parseInt(groupId)) {
//              return groups.indexOf("Apple");   
//             }
//        }
//     };
   
    // ITEM SERVICES
        
     factory.getItem = function(groupId, itemId){
	    	 for 
        (var i=0,len=groups[groupId].items.length;i<len;i++) {
               if (groups[groupId].items[i].id === parseInt(itemId)) {
				   return groups[groupId].items[i];
               }
         	}
         	return {};      
        };
              
     factory.saveItem = function(item, groupId){
            groupId--;
            groups[groupId].items.push(item);
            item = {};
        
        };
        
    factory.removeItem = function(itemId, groupId){
       groupId--;
    for(var i=0, l=groups[groupId].items.length; i < l; i++) {
      if(groups[groupId].items[i].id === parseInt(itemId)){
        console.log(groups[groupId].items[i]);
        groups[groupId].items.splice(i, 1);
      }
    }
  };

// CATEGORY AND SUBITEM RESOURCES
       
		factory.getCategory = function(groupId, categoryId){
            groupId--;
 for (var i=0,len=groups[groupId].categories.length;i<len;i++) {
  if (groups[groupId].categories[i].id === parseInt(categoryId)) {
				   return groups[groupId].categories[i];
               }
         	}
         	return {};      
        };
        
    factory.saveSubGroup = function(category, id, groupId){
         groupId--;
         category.items = [];
         category.id = id;
         groups[groupId].categories.push(category);
        };
        
        factory.getSubItem = function(groupId, categoryId, itemId){
	        groupId--;
	        categoryId--;
	        console.log(groupId);
	        console.log(categoryId);
	        console.log(itemId);
	        	for 
        (var i=0,len=groups[groupId].categories[categoryId].items.length;i<len;i++) {
               if (groups[groupId].categories[categoryId].items[i].id === parseInt(itemId)) {
				   return groups[groupId].categories[categoryId].items[i];
               }
         	}
         	return {};   
        };
        
        factory.saveSubItem = function(item, groupId, categoryId){
           groupId--;
           categoryId--;
            groups[groupId].categories[categoryId].items.push(item);
            item = {}
        };
        
    factory.removeSubItem = function(itemId, groupId, categoryId){
        groupId--;
        categoryId--;
        for(var i=0, l=groups[groupId].categories[categoryId].items.length; i < l; i++) {
      if(groups[groupId].categories[categoryId].items[i].id === parseInt(itemId)){
        console.log(groups[groupId].categories[categoryId].items[i]);
        groups[groupId].categories[categoryId].items.splice(i, 1);
      } 
       }
        };
 

        
        return factory;
	};
	
	angular.module('sortListApp').factory('groupsFactory', groupsFactory);
	
}());