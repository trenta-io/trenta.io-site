
/* App Picker/Drawer */
    $('#app-picker').hide();
    
   // Moved to toppanel.elavo 'onclick'
   //      $("#appsIcon").click(function () {
   //   $('#app-picker').fadeIn(500);
   // })
    
    $(".app-picker").click(function () {
      $('#app-picker').fadeOut(200);
    });
    $(".app-picker-app").click(function () {
      $('#app-picker').fadeOut(200);
    });
    $("#dock").click(function () {
      $('#app-picker').fadeOut(200);
    });

