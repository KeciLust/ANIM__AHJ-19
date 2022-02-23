export default class Collapse {
  constructor(element) {
    this.element = element;
  }

  addContainer() {
    const containerWidget = document.querySelector('.collapse');
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Collapse';
    this.element.classList.add('element');
    containerWidget.append(button);
    containerWidget.append(this.element);
  }

  listner() {
    const button = document.querySelector('.button');
    button.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }

  anime() {

  }
}
