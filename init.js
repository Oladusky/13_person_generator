window.onload = function()
{
    generateNewPerson();
};
 function generateNewPerson()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.Surname;
    document.getElementById('genderOutput').innerText = initPerson.Gender;
    document.getElementById('birthYearOutput').innerText = initPerson.YearOfBirth;
    document.getElementById('lastNameOutput').innerText = initPerson.lastName;
    document.getElementById('birthDayOutput').innerText = initPerson.DayOfBirth;
    document.getElementById('birthMonthOutput').innerText = initPerson.MonthOfBirth;
    document.getElementById('JobOutput').innerText = initPerson.Job;


    
};

function cleanPerson()
{
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('lastNameOutput').innerText = "";
    document.getElementById('birthDayOutput').innerText = "";
    document.getElementById('birthMonthOutput').innerText = "";
    document.getElementById('JobOutput').innerText = "";


    
};
document.getElementById('create_btn').addEventListener('click', function () {
    generateNewPerson();
});
document.getElementById('clean_btn').addEventListener('click', function () {
    cleanPerson();
});



