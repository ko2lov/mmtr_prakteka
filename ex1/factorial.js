
function factorial(int) {
        if(int == 0){
    
        return 1;
        } else {
        let result = 1;
        for (let i = 1; i <= int; i++) {
        
            result *= i;
        }

        return result;
    }
}
