import Collapse from './collapse';

const text = document.createElement('div');
text.textContent = `Анимация — один из основных инструментов в современной frontendразработке.
Элементы анимации позволяют улучшить пользовательский интерфейс,
делая его дружелюбнее для обычного пользователя.
Также за счет анимаций можно сделать продукт привлекательней,
что благоприятно будет влиять на уровень его продаж.
`;

const collapse = new Collapse(text);

collapse.addContainer();
collapse.listner();
