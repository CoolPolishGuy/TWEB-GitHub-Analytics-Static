$(function() {
    console.log("loading data");

    function loadData() {
      $.getJSON("./file.json", function (data){
        console.log(data);

        if(data.length > 0) {

        }
        //$(".section-heading").text(message);
        
      });
    };
    loadData();
    setInterval(loadData, 2000);
});
