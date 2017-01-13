$(document).ready(function () {
  var quote = "";
    $("#getQuote").on("click", function () {
        $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function (a) {
          quote = a.quote+" -"+a.author
           $("#cont").html("<em>"+a.quote+"</em><br><p style='margin-top:10px'>-"+a.author+"</p>");
          $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text='+quote).attr('target', '_blank');

        });
    });
});