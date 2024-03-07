import { Request, Response } from "express";

export const getTea = (
  req: Request<object, object, object, { teaType: string | undefined }>,
  res: Response
) => {
  const teaType = req.query;
  const tea = {
    niceCupOf: `${teaType.teaType} tea`,
  };

  res.json(tea).status(200);
};
