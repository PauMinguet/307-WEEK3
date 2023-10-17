class Portfolio {
  constructor() {
    this.portfolio = []; 
  }

  createPortfolio() {
    return this.portfolio;
  }

  isEmpty() {
    return this.portfolio.length === 0; 
  }

  count() {
    return this.portfolio.length;
  }

  purchase(symbol, num) {
    if (num < 1){
      return "Invalid number of stocks";
    }
    this.portfolio.push([symbol, num]);
    return this.portfolio;
  }

  sale(symbol, num) {
    for (let i = 0; i < this.portfolio.length; i++) {
      if (this.portfolio[i][0] == symbol) {
        if (this.portfolio[i][1] == num) {
          this.portfolio.splice(i, 1);
        } else if (this.portfolio[i][1] < num) {
          throw new Error("ShareSaleException");
        } else {
          this.portfolio[i][1] -= num;
        }
        return this.portfolio;
      }
    }
    return this.portfolio; 
  }
}

export default Portfolio;