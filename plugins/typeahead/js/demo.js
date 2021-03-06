function displayResult(item, val, text) {
    console.log(item);
    $('.alert').show().html('You selected <strong>' + val + '</strong>: <strong>' + text + '</strong>');
}

$(function () {

$('.typeahead').typeahead({
	source: [
		{ id: 1, full_name: 'Toronto', first_two_letters: 'To' },
		{ id: 2, full_name: 'Montreal', first_two_letters: 'Mo' },
		{ id: 3, full_name: 'New York', first_two_letters: 'Ne' },
		{ id: 4, full_name: 'Buffalo', first_two_letters: 'Bu' },
		{ id: 5, full_name: 'Boston', first_two_letters: 'Bo' },
		{ id: 6, full_name: 'Columbus', first_two_letters: 'Co' },
		{ id: 7, full_name: 'Dallas', first_two_letters: 'Da' },
		{ id: 8, full_name: 'Vancouver', first_two_letters: 'Va' },
		{ id: 9, full_name: 'Seattle', first_two_letters: 'Se' },
		{ id: 10, full_name: 'Los Angeles', first_two_letters: 'Lo' }
	],
	display: 'full_name',
	itemSelected: displayResult
	});
});