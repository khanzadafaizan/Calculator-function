function onCalculate() {

    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let mathNumber = document.getElementById('mathNumber');
    let englishNumber = document.getElementById('englishNumber');
    let urduNumber = document.getElementById('urduNumber');
    let scienceNumber = document.getElementById('scienceNumber');
    let sindhiNumber = document.getElementById('sindhiNumber');
    let rollNumber = document.getElementById('rollNumber');

    const result = document.getElementById('result');


    rollNumber = Number(rollNumber.value)
    mathNumber = Number(mathNumber.value)
    englishNumber = Number(englishNumber.value)
    urduNumber = Number(urduNumber.value)
    scienceNumber = Number(scienceNumber.value)
    sindhiNumber = Number(sindhiNumber.value)

    const total = mathNumber + englishNumber + urduNumber + scienceNumber + sindhiNumber;

    firstName = (firstName.value)
    lastName = (lastName.value)

    const percentage = total / 500 * 100;

    const grade = percentage;

    if (grade >= 90) {
         result.innerText = firstName + " " + lastName + " " + ":" + "  " + "Roll N0" + " : " + rollNumber + " Percentage " + " : " + percentage + "%" + " " + 'Grade' + ": " + " " + '"A"';        ;
    }

    else if (grade >= 80) {
         result.innerText = firstName + " " + lastName + " " + ":" + "  " + "Roll N0" + " : " + rollNumber + " Percentage " + " : " + percentage + "%" + " " + 'Grade' + ": " + " " + '"B"';
    }

    else if (grade >= 70) {
         result.innerText = firstName + " " + lastName + " " + ":" + "  " + "Roll N0" + " : " + rollNumber + " Percentage " + " : " + percentage + "%" + " " + 'Grade' + ": " + " " + '"C"';

    }


    else if (grade >= 60) {
         result.innerText = firstName + " " + lastName + " " + ":" + "  " + "Roll N0" + " : " + rollNumber + " Percentage " + " : " + percentage + "%" + " " + 'Grade' + ": " + " " + '"D"';
    }

    else {

         result.innerText = firstName + " " + lastName + " " + ":" + "  " + "Roll N0" + " : " + rollNumber + " Percentage " + " : " + percentage + "%" + " " + 'Grade' + ": " + " " + '"D"';
        }

}