class pizza{
  constructor(s,mt,vt){
    this.size=s;
    this.meatToppings=mt;
    this.veggieToppings=vt;
  }
  sizecost(){
    if(this.size == "Small"){
    return 7.99;
    }
    else if(this.size == "Medium"){
      return 7.99;
    }
    else if(this.size == "Large"){
      return 7.99;
    }
    else if(this.size == "Extra-Large"){
      return 7.99;
    }
  }
toppingCost(top){
    let toppingCost=0;
    if(top == "meat"){
      toppingCost = this.meatToppings.length*0.99;
      return toppingCost;
    }
    if(top == "veggie"){
      toppingCost= this.veggieToppings.length*0.50;
      return 0.50;
    }
  }
price(){
  let totalcost = cost+toppingCost;
  return totalcost;
}
}
