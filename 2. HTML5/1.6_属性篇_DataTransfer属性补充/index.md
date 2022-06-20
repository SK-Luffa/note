### e.dataTransfer 
    li.ondragstart=function(e){
      e.dataTransfer.effectAllowed="Tink" //表示按下时候的指针（鼠标格式）.必须在ondragstart事件里面设
    }
    li.ondrop=function(e){
        e.dataTransfer.dropEffect="Tink" //表示放下时候的指针（鼠标格式）.必须在ondragstart事件里面设
    }
