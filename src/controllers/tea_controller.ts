import { Request, Response } from "express";

export const getTea = (
  req: Request<object, object, object, { teaType: string | undefined }>,
  res: Response
) => {
  let chosenTea = req.query.teaType;
  if (chosenTea === undefined) {
    chosenTea = "Regular";
  }
  const tea = {
    niceCupOf: `${chosenTea} tea`,
  };

  res.json(tea).status(200);
};
