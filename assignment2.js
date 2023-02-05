const assignment = require("./assignment");

const assignmentState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    SIZE:   Symbol("size"),
    TOPPINGS:   Symbol("toppings"),
    SWEETS:  Symbol("sweets")
});

module.exports = class assignment2 extends assignment{
    constructor(){
        super();
        this.stateCur = assignmentState.WELCOMING;
        this.sSize = "";
        this.sToppings = "";
        this.ssweets = "";
        this.sItem = "Faluda";
        this.price = 0;
        this.flavour = "";
        this.name = "";
        this.svegNonveg = "";
    }
    handleInput(sInput){
        let aReturn = [];
        switch(this.stateCur){
            
            case assignmentState.WELCOMING:
                this.stateCur = assignmentState.SIZE;
                aReturn.push("Welcome to Faluda shop.");
                aReturn.push("whatt size- small, medium or large?");
                break;  
            
            case assignmentState.SIZE:
                this.stateCur = assignmentState.TOPPINGS
                this.sSize = sInput;
                if(this.sSize=="small" || this.sSize== "SMALL"){
                    this.price= this.price + 10;
                }
                else if(this.sSize=="medium" || this.sSize== "MEDIUM"){
                    this.price= this.price + 15;
                }
                else if(this.sSize=="large"  || this.sSize== "LARGE"){
                    this.price= this.price+ 20;
                }
                else{
                    aReturn.push("give correct input")
                    this.stateCur=assignmentState.SIZE
                    break;
                }
                aReturn.push("What flavour would you like to have");
                break;
                case assignmentState.flavour:
                    this.stateCur = assignmentState.SWEETS
                    this.sflavour = sInput;
                    aReturn.push("type name of toppings");
                    break;
            case assignmentState.TOPPINGS:
                this.stateCur = assignmentState.SWEETS
                this.sToppings = sInput;
                aReturn.push("What sweets would you like to have?");
                break;
            case assignmentState.SWEETS:
                this.isDone(true);
                if(sInput.toLowerCase != "no"){
                    this.ssweets = sInput;
                }
                aReturn.push("Thanks for your order of");
                aReturn.push(`${this.sSize} ${this.sToppings} ${this.flavour} ${this.sItem} with ${this.ssweets}`);
                aReturn.push( `your total is ${this.price}`)
                
                let d = new Date(); 
                d.setMinutes(d.getMinutes() + 30);
                aReturn.push(`Please pick it up at ${d.toTimeString()}`);
                break;
        }
        return aReturn;
    }
}