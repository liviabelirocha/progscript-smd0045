import { Request, Response, Router } from "express";
import { Bid } from "./Bid";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  response.render("place_bid");
});

router.get("/max-bid", (request: Request, response: Response) => {
  const bid = Bid.getInstance();
  const maxBid = bid.getUniqueMax();
  response.render("max_bid", { max_bid: maxBid });
});

router.post("/place-bid", (request: Request, response: Response) => {
  const bid = Bid.getInstance();
  bid.placeBid(request.body.bid);
  response.render("place_bid");
});

export { router };
