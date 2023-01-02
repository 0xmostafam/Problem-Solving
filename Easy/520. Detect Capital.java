class Solution {
    public:
        bool detectCapitalUse(string word) {
            int count = 0;
            for (char c : word) {
                if (isupper(c)) {
                    count++;
                }
            }
            return count == word.size() || count == 0 || (count == 1 && isupper(word[0]));
        }
};