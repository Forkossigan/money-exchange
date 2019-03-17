
module.exports = function makeExchange(currency) {
    Money = {};
    
    
    if(currency>10000){return  Money[error]="You are rich, my friend! We don't have so much coins for exchange"};
    if(currency <= 0){return ' '};
    var H = 0;
    var Q = 0;
    var D = 0;
    var N = 0;
    var P = 0;
    while(currency>=50){
        currency = currency-50;
        H = H + 1;
        
    }
    while(currency>=25){
        currency = currency-25;
        Q = Q + 1;
        
    }
    while(currency>=10){
        currency = currency-10;
        D = D+ 1;
        
    }
    while(currency>=5){
        currency = currency-5;
        N = N + 1;
        
    }
    while(currency>=1){
        currency = currency-1;
        P = P + 1;
        
    }
    if(H>0){Money["H"]=H};
    if(Q>0){Money["Q"]=Q};
    if(D>0){Money["D"]=D};
    if(N>0){Money["N"]=N};
    if(P>0){Money["P"]=P};
    return Money;
  
  
  }