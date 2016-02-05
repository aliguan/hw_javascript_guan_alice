var iceCream = [ 'Pistachio', 'Butter Pecan', 'Dulce de Leche' ];

iceCream.push( 'Cookie Dough' );

var presidents = [
    {
        firstName: 'Barack',
        lastName: 'Obama',
        termLength: '2',
        party: 'Democrat',
        yearsOfPresidency: '8'
    },
    { firstName: 'George W.', lastName: 'Bush', termLength: '2', party: 'Republican', yearsOfPresidency: '8' },
    { firstName: 'Bill', lastName: 'Clinton', termLength: '2', party: 'Democrat', yearsOfPresidency: '8' },
    { firstName: 'George H.', lastName: 'Bush', termLength: '1', party: 'Republican', yearsOfPresidency: '4' },
    { firstName: 'Ronald', lastName: 'Reagan', termLength: '2', party: 'Republican', yearsOfPresidency: '8' }
];

console.log( presidents[ 2 ].firstName + ' ' + presidents[ 2 ].lastName );
