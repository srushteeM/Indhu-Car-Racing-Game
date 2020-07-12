class Form{
    constructor(){}
    display(){
        var title=createElement('h2');
        title.html("CAR RACING GAME");
        title.position(130,0);

        var textBox=createInput("");
        textBox.position(200,100);

        var button=createButton("PLAY");
        button.position(200,170);

    }
}