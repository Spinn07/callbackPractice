/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first
  function first (name, cb){
    for (var i = 0; i < name.length; i++){
      cb(name[i]);
    }
  }


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
  first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
  function last(names,cb) {
    for (var i = 0; i < names.length; i++){
      cb(names[i]);
    }
  }

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
  function multiply(num1,num2, cb){
    cb(num1*num2);

  }

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
  function contains(names,str , cb){
    for (var i = 0; i < names.length;i++){
      if (names[i] === str){
        return cb(true);

      } else {
        return cb(false);
      }
    }
  }

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



// arr = [5,4,33,2,1]
    //Code Here for uniq
    function uniq(arr, callback){
              var seen = [];
              for (var i = 0; i < arr.length; i++){
                  if (!seen.includes(arr[i])){
                      seen.push(arr[i]);
                  }
              }
              return callback(seen);
          }
     //Code Here for uniq

  uniq(names, function(uniqArr){
   console.log('The new names array with all the duplicate items removed is ', uniqArr);
  });




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
    function each (arr,cb){
      for (var i = 0; i < arr.length; i++){
        cb(arr[i],i);

      }

    }

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
 function getUserById(arr, desiredId, cb) {
     for (var i = 0; i < arr.length; i++) {
         if (arr[i].id === desiredId) {
             cb(arr[i]);

         }


     }

 }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
