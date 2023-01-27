class Form { 
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  setElementsPosition(){
    this.titleImg.position(120,80)
    this.input.position(width/2-110,height/2-80)
    this.playButton.position(width/2-90,height/2-20)
    this.greeting.position(width/2-300,height/2-100)
  }
  setElementsStyle(){
    this.titleImg.class("gameTitle")
    this.input.class("customInput")
    this.playButton.class("customButton")
    this.greeting.class("greeting")
  }
   handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.playButton.hide();
      this.input.hide();
      var message = "Hello "+ this.input.value() + ". </br> Wait for another player to join" 
      this.greeting.html(message)

      playerCount +=1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
    });


   }
    

  display (){
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }

}