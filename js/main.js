// Arrays
var iceCream = [ 'Pistachio', 'Butter Pecan', 'Dulce de Leche' ];

iceCream.push( 'Cookie Dough' );

// Object inside Array
var presidents = [
    { firstName: 'Barack', lastName: 'Obama', termLength: '2', party: 'Democrat', yearsOfPresidency: '8' },
    { firstName: 'George W.', lastName: 'Bush', termLength: '2', party: 'Republican', yearsOfPresidency: '8' },
    { firstName: 'Bill', lastName: 'Clinton', termLength: '2', party: 'Democrat', yearsOfPresidency: '8' },
    { firstName: 'George H.', lastName: 'Bush', termLength: '1', party: 'Republican', yearsOfPresidency: '4' },
    { firstName: 'Ronald', lastName: 'Reagan', termLength: '2', party: 'Republican', yearsOfPresidency: '8' }
];

console.log( presidents[ 2 ].firstName + ' ' + presidents[ 2 ].lastName );

// Declaring a function

function howdy() {
    console.log( 'Alice Guan says Hello\!' );
}
howdy();

//Function Expression
var numba = function( string ) {

        if ( string.length < 7 ) {
            console.log( 'What a short little word\!' );
        } else if ( string.length > 7 ) {
            console.log( 'I\'m sorry, but that\'s too many to count\.' );
        } else {
            console.log( '7\, what a perfect choice\!' );
        }
};

numba( '7' );
numba( 'seventy' );
numba( 'university' );

function inception( callback, value ) {
    callback( value );
}

var callback = function() {
    console.log( 'Inception is a fantastic movie!' );
};

inception( callback );
