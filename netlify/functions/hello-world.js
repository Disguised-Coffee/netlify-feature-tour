exports.handler = async () =>{
    console.log("ayo we got a request");
    return {
        statusCode: 404,
        body: "Who da fwick r u? Get out of mi huse!"
    };
};