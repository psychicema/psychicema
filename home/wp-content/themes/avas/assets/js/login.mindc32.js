jQuery(document).ready(function($){'use strict';$('a#show_login').on('click',function(e){$('body').prepend('<div class="tx-login-overlay"></div>');$('form#login').fadeIn(500);$('div.tx-login-overlay, form#login a.tx-close').on('click',function(){$('div.tx-login-overlay').remove();$('form#login').hide()});e.preventDefault()});$('form#login').on('submit',function(e){$('form#login p.status').show().text(ajax_login_object.loadingmessage);$.ajax({type:'POST',dataType:'json',url:ajax_login_object.ajaxurl,data:{'action':'ajaxlogin','username':$('form#login #username').val(),'password':$('form#login #password').val(),'security':$('form#login #security').val()},success:function(data){$('form#login .status').text(data.message);if (data.loggedin==!0){document.location.href=ajax_login_object.redirecturl}}});e.preventDefault()})});// End of jquery