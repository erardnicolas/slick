HTMLWidgets.widget({

  name: 'slick',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

        renderValue: function(x) {
          el.setAttribute("class",x.class)
          el.style.margin = "auto";
    
          content='';    
          for(var image in x.message)
          {
            content += '<div><img src="' + x.message[image] + '"/></div>';
          }
          el.innerHTML = content;
          
          $(document).ready(function(){
            $("."+x.class).slick(x.options);      
          });
   
        },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
