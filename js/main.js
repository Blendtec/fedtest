$(document).ready(function() {
	warrantyFormValidation();
});

function warrantyFormValidation() {
	var OccurenceYear = $('#OccurenceYear'),
		occurenceYearSelect = document.getElementById('OccurenceYear'),
		selectedOption = occurenceYearSelect.options.selectedIndex = 6;


	$('#OccurenceYear').on('change', function() {
			var selectedOption = occurenceYearSelect.options.selectedIndex,
			yearVal = occurenceYearSelect.options[occurenceYearSelect.selectedIndex].value,
			d = new Date(),
			currentYear = d.getFullYear();
			console.log(selectedOption);
			console.log(yearVal);

		if (yearVal > currentYear || yearVal < currentYear - 10) {
			$('.error').show();
			$('#formSubmitBtn').prop("disabled", true);
		} else {
			$('.error').hide();
			$('#formSubmitBtn').prop("disabled", false);
		}
	});
}
