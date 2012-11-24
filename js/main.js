$(document).ready(function() {
	
	//opentable
	$(function() {  
        $("#datepicker").datepicker({  
            onSelect: function(date) {
				var a_date = date.split('/');
				document.getElementById('ResMonth').value = a_date[0];
				document.getElementById('ResDate').value = a_date[1];
				document.getElementById('ResYear').value = a_date[2];
    		},
			dateFormat: 'm/d/yy'
        });
    });	
	
	$("#dl_PartySize dt").click(function() {
		$("#dl_PartySize dd ul").toggle();
	});
	$("#dl_PartySize dd ul li").click(function() {
		var text = $(this).html();
		document.forms['reservations'].elements['PartySize'].value = text;
		$("#dl_PartySize dd ul").hide();
	});	
	
	//Opentable Drop down	
	$("#dl_ResHour dt").click(function() {
		$("#dl_ResHour dd ul").toggle();
	});
	$("#dl_ResHour dd ul li").click(function() {
		var text = $(this).html();
		document.forms['reservations'].elements['ResTime'].value = text;
		$("#dl_ResHour dd ul").hide();
		var a_time = text.split(':');
		var resHour = a_time[0];
		var b_time = a_time[1];
		var c_time = b_time.split(' ');
		var resMin = c_time[0];
		resMeridian = c_time[1];
		document.forms['reservations'].elements['ResHour'].value = resHour;
		document.forms['reservations'].elements['ResMinute'].value = resMin;
		document.forms['reservations'].elements['Meridian'].value = resMeridian;
	});
	
	//Drop Down Global Mouseleave:	
	$("dd ul").mouseleave(function() {
        $("dd ul").hide();
    });
	
	
//end document ready
});