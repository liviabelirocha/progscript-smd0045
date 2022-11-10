import { Request, Response, Router } from "express";
import { Bid } from "./Bid";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  response.render("place_bid");
});

router.get("/min-bid", (request: Request, response: Response) => {
  const bid = Bid.getInstance();
  const minBid = bid.getUniqueMin();
  response.render("min_bid", { min_bid: minBid });
});

router.post("/place-bid", (request: Request, response: Response) => {
  const bid = Bid.getInstance();
  bid.placeBid(request.body.bid);
  response.render("place_bid");
});

export { router };
