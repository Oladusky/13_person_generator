

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Наталья",
            "id_5": "Дарья",
            "id_6": "Оксана",
            "id_7": "Алевтина",
            "id_8": "София",
            "id_9": "Кристина",
            "id_10": "Елена"
        }
    }`,
    lastNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Иванович",
            "id_3": "Алексеевич",
            "id_4": "Степанович",
            "id_5": "Юрьевич",
            "id_6": "Анатольевич",
            "id_7": "Петрович",
            "id_8": "Тимофеевич",
            "id_9": "Максимович",
            "id_10": "Дмитриевич"
        }
    }`,
    lastNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Петровна",
            "id_3": "Дмитриевна",
            "id_4": "Максимовна",
            "id_5": "Степановна",
            "id_6": "Юрьевна",
            "id_7": "Михайловна",
            "id_8": "Олеговна",
            "id_9": "Робертовна",
            "id_10": "Андреевна"
        }
    }`,
    jobsMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "слесарь",
            "id_2": "программист",
            "id_3": "водитель",
            "id_4": "офицер",
            "id_5": "инженер",
            "id_6": "строитель",
            "id_7": "крановщик",
            "id_8": "экономист",
            "id_9": "юрист",
            "id_10": "полицейский"
        }
    }`,
    jobsFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "учитель",
            "id_2": "визажист",
            "id_3": "программист",
            "id_4": "архитектор",
            "id_5": "юрист",
            "id_6": "продавец",
            "id_7": "бухгалтер",
            "id_8": "судья",
            "id_9": "политолог",
            "id_10": "журналист"
        }
    }`,
    MonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },


    randomYear: function () {
        return this.randomIntNumber(max = 2000, min = 1940);
    },
    randomDay: function () {
        let MofB;
        if (this.person.MonthOfBirth == 'февраля') {
            MofB = this.randomIntNumber(max = 28, min = 1);
        } else if (this.person.MonthOfBirth == 'апреля' || this.person.MonthOfBirth == 'июня' || this.person.MonthOfBirth == 'сентября' || this.person.MonthOfBirth == 'ноября') {
            MofB = this.randomIntNumber(max = 30, min = 1);
        } else {
            MofB = this.randomIntNumber(max = 31, min = 1);
        }
        return MofB;
    },
    randomGender: function () {
        let G;
        this.randomIntNumber(max = 1, min = 0) < .5 ? G = personGenerator.GENDER_MALE : G = personGenerator.GENDER_FEMALE;
        return G;
    },
    randomMonth: function () {
        return this.randomValue(this.MonthJson);
    },
    randomFirstName: function () {
        let firstN;
        if (this.person.Gender == 'Женщина') {
            firstN = this.randomValue(this.firstNameFemaleJson);
        } else if (this.person.Gender == 'Мужчина') {
            firstN = this.randomValue(this.firstNameMaleJson);
        }
        return firstN;

    },
    randomLastName: function () {
        let LastN;
        if (this.person.Gender == 'Женщина') {
            LastN = this.randomValue(this.lastNameFemaleJson);
        } else if (this.person.Gender == 'Мужчина') {
            LastN = this.randomValue(this.lastNameMaleJson);
        }
        return LastN;
    },

    randomSurname: function () {
        let Surn;
        if (this.person.Gender == 'Женщина') {
            Surn = this.randomValue(this.surnameJson) + 'a';
        } else if (this.person.Gender == 'Мужчина') {
            Surn = this.randomValue(this.surnameJson);
        }
        return Surn;
    },
    randomJob: function () {
        let Job;
        if (this.person.Gender == 'Женщина') {
            Job = this.randomValue(this.jobsFemaleJson);
        } else if (this.person.Gender == 'Мужчина') {
            Job = this.randomValue(this.jobsMaleJson);
        }
        return Job;
    },

    getPerson: function () {
        this.person = {};
        this.person.Gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.Surname = this.randomSurname();
        this.person.YearOfBirth = this.randomYear();
        this.person.lastName = this.randomLastName();
        this.person.Job = this.randomJob();
        this.person.DayOfBirth = this.randomDay();
        this.person.MonthOfBirth = this.randomMonth();

        return this.person;
    },
};
document.getElementById('create') = btnCreate;
btnCreate.addEventListener("click", personGenerator.getPerson);
document.getElementById('clean') = btnClean;
btnClean.addEventListener('click', function () {
    this.person = {};
    return this.person;
})

document.getElementById('create') = btnCreate;
btnCreate.addEventListener("click", personGenerator.getPerson);
document.getElementById('clean') = btnClean;
btnClean.addEventListener('click', function () {
    this.person = {};
    return this.person;
})