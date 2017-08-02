function ContentLoader(){
  var constructor = function(){
    setInterval(function(){checkValidation(navigator.connection);},30000);
    loadShopInfo();
  }
  
  function checkValidation(connection){
    if($(connection).type != "none" && $(connection).type != "unknown" && !isUndefined(connection)){
      console.log("refreshato");
      window.location.href = 'index.html';    
    }  
  }
  function loadShopInfo(){
    $.get('local/shop/contacts.html', function(data){
      if($(data).length > 0){
        $(data).appendTo($('#alert'))
      }    
    });
  }
  constructor();
  
  function isUndefined(obj){
    return typeof $(obj) === "undefined";
  }
}
(function () {
  var c_loader = new ContentLoader();
}());