const longestCommonPrefix = (strs: string[]): string => {
    let prefix = strs[0];
    strs.slice(1).forEach(str => {
        let result = [...str].every((char,index) => {
            if (char === prefix[index])
                return true;
            else{
                prefix = prefix.slice(0,index);
                return false;
            }
        })
        prefix = result ? str : prefix;
    });

    return prefix;
};