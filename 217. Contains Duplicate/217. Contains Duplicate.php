class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function containsDuplicate($nums) {
        $numsMap = [];
        foreach($nums as $num){
            if(isset($numsMap[$num]))
                return true;
            $numsMap[$num] = 1;
        }
        return false;
    }
}