class starRating extends HTMLElement {
  get value () {
    return this.getAttribute('value') || 0;
  }
  set value (val){
    this.setAttribute('value', val);
    this.highlight(this.value - 1);
  }
  get number () {
    return this.getAttribute('number') || 5;
  }

  set number (val) {
    this.setAttribute('number', val);
  }

  this.stars = [];

  while (this.firstChild) {
    this.removeChild(this.firstChild);
  }

  for (let i = 0; i < this.number; i++){
      let  s = document.createElement('div');
      s.className = 'star';
      this.appendChild(s);
      this.stars.push(s);
    }

    this.value = this.value;
  }

  highlight (info) {
    this.stars.forEach((star,i) => {
      star-classList.toggle('full', i <= info);
    });
  }

  constructor () {
    super();

    this.number = this.number;

    this.addEventListener('mousemove' e => {
      let box = this.getBoundingClientRect(),
      starInfo = Math.floor((e.pageX - box.left) / box.width * this.stars.legth);

     this.highlight(starInfo);
   });
   this.addEventListener('mouseout' () => {
     this.value = this.value;
   });

   this.addEventListener('click', e => {
    let box = this.getBoundingClientRect(),
    starInfo = Math.floor((e.pageX - box.left) / box.width * this.stars.length);
    this.value = SuperInfo + 1;
    let rateEvent = new Event('rate');
    this.dispatchEvent(rateEvent);
  });

  }
}
customElements.define('x-star-rating', StarRating);
