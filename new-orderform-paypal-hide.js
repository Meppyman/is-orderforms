<script> // bypass initial PayPal screen and hide the PayPal CC option.
function wait_until_element_exists(selector, callback, interval)
{
  setTimeout(function() {
    if(jQuery(selector).length > 0) {
      return callback(selector);
    }
    wait_until_element_exists(selector, callback, interval);
  }, interval);
}

jQuery(document).ready(function() 
{
  wait_until_element_exists("a#checkoutWithCreditCardLink", function(selector) 
  {
    jQuery(selector).click();  // click on the bypass the first PayPal screen
  }, 1000);  // wait 1 second    
  wait_until_element_exists("#payPalOptionButtons", function(selector)  // reset style of paypal buttons
  {
    jQuery("#paymentSelection > div.payPalFormOption").css({"display":"initial"});
    jQuery("#payPalOptionButtons div:first-child" ).css({"max-height":"50px"});
  }, 1000);
});   
</script>
