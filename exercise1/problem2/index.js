function intWithinBounds() {
    n = arguments[0];
    low = arguments[1];
    up = arguments[2];    
    
    if( n % 1 != 0) {
      return false;
    }
    
    if(n > low && n  < up )    
      return true; 

      return false;
}

module.exports = intWithinBounds;
