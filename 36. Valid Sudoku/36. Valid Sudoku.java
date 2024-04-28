class Solution {
    public boolean isValidSudoku(char[][] board) {
        Set<String> hashSet = new HashSet<String>(); 
        for(int i = 0; i < 9; i++){
            for(int j = 0; j < 9; j++){
                if(board[i][j] == '.') continue;
                if(!hashSet.add(i + "(" + board[i][j] + ")")
                    || !hashSet.add(i/3 + "(" + board[i][j] + ")" + j/3)
                    || !hashSet.add("(" + board[i][j] + ")" + j)) return false;
            }
        }
        return true;
    }
}