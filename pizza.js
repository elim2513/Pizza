class pizza{
  constructor(s,mt,lt){
    this.size=s;
    this.meatToppings=mt;
    this.veggieToppings=vt;
  }
  sizecost(){
    if(this.size == "Small"){
      this.sizeCost = 7.99;
      return sizeCost;
    }
    else if(this.size == "Medium"){
      this.sizeCost = 9.99;
      return sizeCost;
    }
    else if(this.size == "Large"){
      this.sizeCost = 12.99;
      return sizeCost;
    }
    else if(this.size == "Extra-Large"){
      this.sizeCost= 15.99;
      return sizeCost;
    }
  }
}
