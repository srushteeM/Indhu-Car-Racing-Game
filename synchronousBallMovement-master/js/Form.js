class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1');
        title.html("CAR RACE");
        title.position(170,0)
        title.style("color","red")
        title.style("fontFamily","cursive");

        var input=createInput("Enter Name");
        input.position(145,150);
        input.style("borderWidth","4px");
        input.style("borderRadius","14px");
        input.size(200,50);

        var button=createButton("REGISTER");
        button.position(170,280)
        button.size(150,40);
        button.style("borderTopLeftRadius","14px");
        button.style("borderBottomRightRadius","14px");
        button.style("borderWidth","7px");
        button.style("backgroundColor","lightblue");
        button.style("fontSize","20px");
        button.style("fontWeight","bold");
        button.style("borderStyle","ridge ");
    }
}
