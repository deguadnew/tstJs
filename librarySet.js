/**
 * 
 * @param {*} actualJson  refers the real time response obtained
 * @param {*} expectedJson  refers the expected Json to receive
 * @returns - boolean 
 */
function comapreJsonForExactMatch(actualJson, expectedJson){
    if(_.isEqual(actualJson,expectedJson))
    return true;
    else 
    return false;
}
/**
 * 
 * @param {*} actualJson  refers the real time response obtained
 * @returns boolean
 */
function checkResponseStatusCode(actualJson){
    if(actualJson.code == 200)
    return true;
    else
    return false;
}
/**
 * 
 * @param {*} actualJson efers the real time response obtained
 * @param {*} targetString  the target string to look on from the actual response
 * @returns boolean
 */
function checkSubstring(actualJson, targetString){
    if(actualJson.includes(targetString)){
        return true;
    }
    else
    return false;
}