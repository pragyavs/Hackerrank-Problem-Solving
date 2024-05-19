  string res = "";
    for(int i = 0; i < s.size(); i++) {
        if(s.at(i) == t.at(i))
            res.append("0");
        else
            res.append("1");
    }

    return res;
}
