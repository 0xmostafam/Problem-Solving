class Solution {
public:
    int firstUniqChar(string s) {
        if (s.empty())
            return -1;
        bool flag = false;
        int i = 0;
        while(flag == false && !s.empty()){
            if(i == s.size())
                break;
            if(s.size() == 1)
                return 0;
            for(int j = 0 ; j < s.size() ; j++){
                if(i == j)
                    continue;
                if(s[i] == s[j]){
                    flag = false;
                    break;
                }
                else
                    flag = true;
            }
            if(flag)
                return i;
            i++;
        }
        return -1;
    }
};