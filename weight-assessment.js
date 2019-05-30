var age = prompt("Введите Ваш возраст");
var height = prompt("Введите Ваш рост в метрах");
var weight = prompt("Введите Ваш вес в килограммах");
var bodyMassIndex = weight / (height * height);
if((age > 18 && age < 26 && bodyMassIndex < 17.5)
 || (age >= 26 && age <= 46 && bodyMassIndex < 18)) {
	alert("Ваш вес недостаточен, опасно для здоровья");	
} else if ((age > 18 && age < 26 && bodyMassIndex >= 17.5 && bodyMassIndex < 19.5)
 || (age >= 26 && age <= 46 && bodyMassIndex >= 18 && bodyMassIndex < 20)) {
	alert("Ваш вес слегка снижен, неопасно для здоровья"); 
} else if ((age > 18 && age < 26 && bodyMassIndex >= 19.5 && bodyMassIndex < 23)
 || (age >= 26 && age <= 46 && bodyMassIndex >= 20 && bodyMassIndex < 26)) {
	alert("Ваш вес нормальный");
} else if ((age > 18 && age < 26 && bodyMassIndex >= 23 && bodyMassIndex < 27.5)
 || (age >= 26 && age <= 46 && bodyMassIndex >= 26 && bodyMassIndex < 28)) {
	alert("Ваш вес излишний");
} else if ((age > 18 && age < 26 && bodyMassIndex >= 27.5 && bodyMassIndex < 30)
 || (age >= 26 && age <= 46 && bodyMassIndex >= 28 && bodyMassIndex < 31)) {
	alert("У Вас ожирение первой степени");
} else if ((age > 18 && age < 26 && bodyMassIndex >= 30 && bodyMassIndex < 35)
 || (age >= 26 && age <= 46 && bodyMassIndex >= 31 && bodyMassIndex < 36)) {
	alert("У Вас ожирение второй степени");
} else if ((age > 18 && age < 26 && bodyMassIndex >= 35 && bodyMassIndex < 40)
 || (age >= 26 && age <= 46 && bodyMassIndex >= 36 && bodyMassIndex < 41)) {
	alert("У Вас ожирение третьей степени");
} else if ((age > 18 && age < 26 && bodyMassIndex >= 40)
 || (age >= 26 && age <= 46 && bodyMassIndex >= 41)) {
	alert("У Вас ожирение четвертой степени");
} else {
	alert("Нет данных для вашего возраста");
}