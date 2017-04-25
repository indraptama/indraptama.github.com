class Spring {
  constructor(list, friction) {
    this.__list = $(list);
    this.friction = friction;
    this.desire_positionY = $(window).scrollTop();
    this.py = [];
    // Behaviours
    $(window).on("scroll", this.handleChange.bind(this));
    this.update();
  }

  handleChange(e){
    this.desire_positionY = $(window).scrollTop();
  }

  update(){
    $.each(this.__list, function(i, e){
      if(this.py[i] == null) this.py[i] = 0;
      this.py[i] += ( (this.desire_positionY) - this.py[i]) / (this.friction+i);
      $(e).css({
        "top":  Math.round(this.desire_positionY)+"px",
        "transform": " translateY(-"+ Math.round(this.py[i])+"px) translateZ(-0.1px)"
      });
      /*
      if(this.py[i] >= this.desire_positionY - 1){
        this.py[i] = this.desire_positionY;
      }*/
    }.bind(this))
    window.requestAnimationFrame(this.update.bind(this));
  }
}


let spring1 = new Spring("ul.spring li", 2.2);
