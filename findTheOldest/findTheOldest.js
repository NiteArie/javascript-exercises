let findTheOldest = function(people) {
    people.sort((first, second) => {
        if ( !first.yearOfDeath ) 
            first.yearOfDeath = new Date().getFullYear();
        if ( !second.yearOfDeath ) 
            second.yearOfDeath = new Date().getFullYear();
        return (first.yearOfDeath - first.yearOfBirth) - (second.yearOfDeath - second.yearOfBirth);
    })

    return people[people.length - 1];
}

module.exports = findTheOldest
