
window.onload = function()
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

