function checkJsonEquality(actualJson, expectedJson){
    if(_.isEqual(actualJson,expectedJson) == true)
    return true;
    else 
    return false;
}