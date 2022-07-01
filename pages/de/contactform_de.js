$(document).ready(function() {
  $(".ajax-contact-form").submit(function() {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "pages/de/contactworking_de.php",
      data: str,
      success: function(msg) {
        if(msg == 'OK') {
          result = '<p>Danke schön Ihre Bewerbung wurde angenommen.</p> <p> Wir werden uns mit Ihnen in Verbindung setzen.</p>';
          $(".fields").hide();
        } else {
        result = msg;
        }
        $('.note').html(result);
      }
    });
    return false;
  });
});
