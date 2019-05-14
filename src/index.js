/**
 *
 * Minimal implementation that shows instrumentation error in for loop
 *
*/

'use strict';

(function(env) {
    // Nyc's instrumenter thinks that the space between '=' and '0' below is a statment
    for (var i = 0; i < env.count; i++) 
    {
        console.log('Running ' + i + ' of ' + count + '.');
    }
})(this);

