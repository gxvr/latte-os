
function update_date() {
  $('.time').html(moment().format('hh:mm'));
	$('.date').html(moment().format('LL'));
}
setInterval(update_date, 1000);