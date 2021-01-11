## Basic Setup
There are problems with managing JavaScript projects this way:

* It is not immediately apparent that the script depends on an external library.  
* If a dependency is missing, or included in the wrong order, the application will not function properly.  
* If a dependency is included but not used, the browser will be forced to download unnecessary code.  


## Creating a Bundle
By stating what dependencies a module needs, webpack can use this information to build a `dependency graph` ==> scripts will be executed in the correct order.  