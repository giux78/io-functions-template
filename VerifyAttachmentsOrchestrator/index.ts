/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 *
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *    function app in Kudu
 */

import * as df from "durable-functions";
import * as moment from "moment";

// tslint:disable-next-line: typedef
const orchestrator = df.orchestrator(function*(context) {
  yield context.df.callActivity("VerifyAttachmentsActivity");

  console.log("aleooooooo");
  // sleep for one hour between cleanups
  const nextCleanup = moment.utc(context.df.currentUtcDateTime).add(1, "m");
  yield context.df.createTimer(nextCleanup.toDate());

  context.df.continueAsNew(undefined);
});

export default orchestrator;
