interface lotto {
  "id": string;
  "name": string;
  "reward": string;
  "amount": number;
  "number": string[];
}

export type LottoReq = {
  "status": string;
  "response": {
    "date": string;
    "endpoint": string;
    "prizes": lotto[];
    "runningNumbers": lotto[];
  };
};
