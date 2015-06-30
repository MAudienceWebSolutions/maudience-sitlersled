/*  ---------------------------------------------------------------------------------------------------------------------------------------------------
#
#    jQuery for front page tabs
#
*/

jQuery(document).ready(function($) {
	$('#tabs').tabs();
	 
	//hover states on the static widgets
	$('#dialog_link, ul#icons li').hover(
	function() { $(this).addClass('ui-state-hover'); },
	function() { $(this).removeClass('ui-state-hover'); }
	);

	$( "#tabs" ).addClass( "ui-tabs-vertical ui-helper-clearfix" );
	$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});