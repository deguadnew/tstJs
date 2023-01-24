function checkEqualJson(actualResponse, expectedResponse){
    if(_.isEqual(actualResponse, expectedResponse) == true)
    return true;
    else
    return false;
}