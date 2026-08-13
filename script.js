let button= document.getElementById("search");


let players={
    "PX":{
        name:"PX",
        kills:98,
        deaths:120
    },

    "XZ":{
        name:"XZ",
        kills:50,
        deaths:200
    }
};

function searchPlayer(){
    let id = document.getElementById("playerID").value;

    if(players[id]){
        document.getElementById("result").innerHTML =
        "名字: " + players[id].name+" "+
        "击杀：" + players[id].kills+" "+
        "死亡：" + players[id].deaths;
    }
else{
    document.getElementById("result").innerHTML = "没有找到";
}
}