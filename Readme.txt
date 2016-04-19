SERVICES IN ANGULAR
--------------------

** All of the below mentioned cannot be used in the CONFIG phase of the module.

Value -- this cant have dependencies

Factory - 
1. can have dependencies (you can inject other custom/angular objects etc)
2. normal JS function and
3. return value

Service -
1. Constructor function (returns only object)
2. it internally invokes the provided function with the new keyword (as function constructor)


-----------------------------------------------------------------

** Below mentioned provider and constant CAN be used in the CONFIG & RUN phase of the module.

Provider - 
1. provider content will be available before the CONFIG phase
2. anything included in $get will be available during the RUN phase
3. While using the provider in the CONFIG phase - need to suffix PROVIDER 

Constant - 
1. available in CONFIG phase
2. cannot be changed

-----------------------------------------------------------------