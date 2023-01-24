/**
 * 
 * @param {*} actualJson  refers the real time response obtained
 * @param {*} expectedJson  refers the expected hson to receive
 * @returns - Boolean 
 */
function checkJsonEquality(actualJson, expectedJson){
    if(_.isEqual(actualJson,expectedJson))
    return true;
    else 
    return false;
}
function checkingStatusCode(actualJson){
    if(actualJson.code == 200)
    return true;
    else
    return false;
}

function checkSubtrings(actualJson, targetString){
    if(actualJson.includes(targetString)){
        return true;
    }
    else
    return false;
}