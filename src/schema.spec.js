/**
 * @jest-environment node
 */
import * as mongoose from "mongoose";
import util from "util";

it("mathces the same schema", () => {
  const schemaA = new mongoose.Schema({
    type: {
      type: mongoose.Schema.Types.String,
      enum: ["string", "number"],
    },
  });
  const schemaB = new mongoose.Schema({
    type: {
      type: mongoose.Schema.Types.String,
      enum: ["string", "number"],
    },
  });

  delete schemaA.$id;
  delete schemaB.$id;

  cLog(schemaA);
  cLog(schemaB);

  expect(schemaA.paths).toMatchObject(schemaB.paths);
});

const cLog = (data) => {
  console.log(util.inspect(data, false, null, true));
};