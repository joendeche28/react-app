function friendArrives(callback){
    console.log("Friend is on the way...");
    setTimeout(() => {
        callback("Friend has arrived!");
    },2000);
}

function callMe(message){
    console.log("Phone rings:", message);
}

friendArrives(callMe);