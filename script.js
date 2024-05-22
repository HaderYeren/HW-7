
function showBeverageMessage() {
    const beverageSelect = document.getElementById('beverage');
    const selectedBeverage = beverageSelect.options[beverageSelect.selectedIndex].text;
    const messageDiv = document.getElementById('beverageMessage');
    messageDiv.textContent = `Ви обрали: ${selectedBeverage}`;
}
function checkDay() {
    const dayInput = document.getElementById('dayInput').value.toLowerCase();
    const messageDiv = document.getElementById('dayMessage');
    const weekdays = ['понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця'];
    const weekends = ['субота', 'неділя'];

    if (weekdays.includes(dayInput)) {
        messageDiv.textContent = `${dayInput} - робочий день.`;
    } else if (weekends.includes(dayInput)) {
        messageDiv.textContent = `${dayInput} - вихідний день.`;
    } else {
        messageDiv.textContent = `Неправильний ввід або такого дня не існує.`;
    }
}
document.getElementById('beverage').addEventListener('change', showBeverageMessage);
