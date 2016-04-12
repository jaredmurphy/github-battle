
var Sample = function(array) {
    var length = array.length;
    var randomIndex = Math.floor(Math.random() * length + 0);
    return array[randomIndex];
}


module.exports = Sample;
