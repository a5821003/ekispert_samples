//15821003 五十嵐尚裕

document.addEventListener("DOMContentLoaded",() =>{
    const start_stationApp=new expGuiStation(document.getElementById("start_station"));
    start_stationApp.dispStation();

    const end_stationApp=new expGuiStation(document.getElementById("end_station"));
    end_stationApp.dispStation();

    const resultApp=new expGuiCourse(document.getElementById("result"));

    function result(isSuccess){
        if(isSuccess){
            console.log("運賃：" + resultApp.getFarePrice());
            console.log("路上リスト：" + resultApp.getLineList());
            console.log("地点リスト：" + resultApp.getPointList());
            console.log("出発日時：" + resultApp.getDepartureDate());
            console.log("到着日時：" + resultApp.getArrivalDate());
            console.log(resultApp.getResultString());
        }else{
            alert("探索結果が取得できませんでした");
        }
    }

    document.getElementById("submit_button").addEventListener("click", () => {
        let searchWord="viaList=" + start_stationApp.getStation() 
        + ":" + end_stationApp.getStation();
        console.log(start_stationApp.getStation());
        console.log(end_stationApp.getStation());

        searchWord += "&answerCount=" + String(3);
        let price = resultApp.PRICE_ONEWAY;
        console.log(searchWord);
        resultApp.search(searchWord,price,result);
    });



});