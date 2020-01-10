/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 *
 * Before running this sample, please:
 * - create a Durable orchestration function
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *   function app in Kudu
 */

import { AzureFunction, Context } from "@azure/functions";
import { Test } from "../generated/definitions/Test";

// tslint:disable-next-line: only-arrow-functions
const activityFunction: AzureFunction = async function(
  context: Context
): Promise<Test> {
  return { id: "12323213", test: "ale" } as Test;
};

export default activityFunction;
