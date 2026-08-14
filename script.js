let search = document.getElementById("search");
let input = document.getElementById("playerID"); 
search.addEventListener("click",function () {
    let playerID = document.getElementById("playerID").value;
    
    let url = "https://api.gametools.network/bf6/stats/?name="
    + playerID
    + "&platform=pc&raw=true";

    fetch(url)
         .then(response => response.json())
         .then(data => {
             if (data.errors) {
               document.getElementById("result").textContent =
                  "没有找到这个玩家";
                  return;
            }
            let stats = data.playerStats[0]
                .categories[0]
                .catFields;
            console.log(stats);

            let statsObject = {};

            stats.forEach(item => {
               if(item.fields.some(field => field.name === "global")) {
               statsObject[item.name] = item.value;
            }
            });
            {
               document.getElementById("result").innerHTML =
                  `找到玩家：${playerID}
                  <br>真人击杀：${statsObject.human_kills_total}`;
            }
         })
         .catch(error => {
          console.log(error);

          document.getElementById("result").textContent =
               "查询失败，请稍后再试"
         });

        
});
  input.addEventListener("keydown",function(event){
            if(event.key === "Enter"){
               search.click();
            }
         })