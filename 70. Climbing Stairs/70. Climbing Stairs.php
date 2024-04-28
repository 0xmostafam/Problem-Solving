class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    
    function climbStairs($n) {
        if($n === 0){
            return 0;
        }
        $fib = array(1,2);
        
        for($i = 2; $i < $n; $i++){
            array_push($fib, ($fib[$i-1] + $fib[$i-2]));
        }
        return $fib[$n-1];
    }
}