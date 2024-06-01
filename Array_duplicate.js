function check() {
    let count = 0;
    let s = ['p', 'r', 'a', 'g', 'y', 'a', 's', 'i', 'n', 'g', 'h']
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] == s[j]) {
                count++;
            }
        }
    }
    if (count > 0) {
        return 'Yes'
    }
    else {
        return 'No'
    }
}
check()
