  $(function(){

  document.getElementById('open_menu').onclick = function() {

    /* ブラウザ判別 */
    var ie=document.all ? 1 : 0;
    var ns6=document.getElementById&&!document.all ? 1 : 0;
    var opera=window.opera ? 1 : 0;

    /* 子メニューの表示・非表示切替 */
        var child="";

        if(ie || ns6 || opera){
            child=ns6 ? document.getElementById('open_content').style : document.all('open_content').style;

            if (child.display=="none"){
                child.display="block";
            }else{
                child.display="none";
            }
        }

  };

  document.getElementById('open_content').onclick = function() {

    /* ブラウザ判別 */
    var _ie=document.all ? 1 : 0;
    var _ns6=document.getElementById&&!document.all ? 1 : 0;
    var _opera=window.opera ? 1 : 0;

    var _child="";

    if(_ie || _ns6 || _opera){
      _child=_ns6 ? document.getElementById('open_content').style : document.all('open_content').style;

      if (_child.display=="block"){
          _child.display="none";
      }else{
      }
  }
};

});
