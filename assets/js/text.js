 $(document).ready(function() {
     $.ajax({
         url: "assets/data/indextext.txt",
         dataType: "text",
         success: function(data) {
             $("#intro").html(data);
         }
     });
 });
