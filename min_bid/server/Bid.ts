export class Bid {
  private static instance: Bid;

  private bids: number[] = [];

  private constructor() {}

  public static getInstance(): Bid {
    if (!Bid.instance) Bid.instance = new Bid();
    return Bid.instance;
  }

  public placeBid(bid: number): void {
    this.bids.push(bid);
  }

  private filterRepeatedItems(
    array: Array<number>,
    itemsToRemove: Array<number>
  ) {
    return (array = array.filter((item) => {
      return itemsToRemove.indexOf(item) === -1;
    }));
  }

  public getUniqueMin() {
    if (this.bids.length < 1) return;

    let mainArr: number[] = [];
    let repeatedArr: number[] = [];
    let min: number | undefined = undefined;

    for (const item of this.bids) {
      if (mainArr.includes(item)) repeatedArr.push(item);
      mainArr.push(item);
    }

    mainArr = this.filterRepeatedItems(mainArr, repeatedArr);
    min = Math.min(...mainArr);

    if (min === Infinity) return;
    return min;
  }
}
