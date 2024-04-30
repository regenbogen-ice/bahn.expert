// import { addMinutes, isEqual, subMinutes } from 'date-fns';
import {
  Controller,
  Get,
  OperationId,
  Query,
  Route,
  Tags,
} from '@tsoa/runtime';
// import { departureAndArrivals } from '@/external/risBoards';
import { getAbfahrten } from '@/server/iris';
// import { TimeType } from '@/external/generated/risBoards';
import type { AbfahrtenResult } from '@/types/iris';
import type { EvaNumber } from '@/types/common';

@Route('/iris/v2')
export class IrisControllerv2 extends Controller {
  /**
   *
   * @isInt lookahead
   * @isInt lookbehind
   */
  @Get('/abfahrten/{evaNumber}')
  @Tags('IRIS')
  @OperationId('Abfahrten v2')
  abfahrten(
    evaNumber: EvaNumber,
    /** minutes */
    @Query() lookahead = 150,
    /** minutes */
    @Query() lookbehind = 0,
    @Query() startTime?: Date,
  ): Promise<AbfahrtenResult> {
    return getAbfahrten(evaNumber, true, {
      lookahead,
      lookbehind,
      startTime,
    });
    // const defaultedStartTime = startTime || new Date();
    // const abfahrtenPromise = getAbfahrten(evaNumber, true, {
    //   lookahead,
    //   lookbehind,
    //   startTime: defaultedStartTime,
    // });
    // const boardsPromise = departureAndArrivals(
    //   evaNumber,
    //   subMinutes(defaultedStartTime, Math.min(60, lookbehind)),
    //   addMinutes(defaultedStartTime, Math.min(120, lookahead)),
    // );

    // const abfahrten = await abfahrtenPromise;
    // try {
    //   const board = await boardsPromise;
    //   const allAbfahrten = [...abfahrten.departures, ...abfahrten.lookbehind];
    //   for (const b of board) {
    //     const abfahrt = allAbfahrten.find(
    //       (a) => a.train.number === b.transport.number.toString(),
    //     );
    //     if (
    //       abfahrt?.departure &&
    //       b.departure &&
    //       isEqual(
    //         abfahrt.departure.scheduledTime,
    //         new Date(b.departure.timeSchedule),
    //       )
    //     ) {
    //       abfahrt.journeyId = b.departure.journeyID;
    //       abfahrt.departure.isRealTime =
    //         b.departure.timeType === TimeType.Real || undefined;
    //     }
    //     if (
    //       abfahrt?.arrival &&
    //       b.arrival &&
    //       isEqual(
    //         abfahrt.arrival.scheduledTime,
    //         new Date(b.arrival.timeSchedule),
    //       )
    //     ) {
    //       abfahrt.journeyId = b.arrival.journeyID;
    //       abfahrt.arrival.isRealTime =
    //         b.arrival.timeType === TimeType.Real || undefined;
    //     }
    //   }
    // } catch (e) {
    //   // eslint-disable-next-line no-console
    //   console.error(e);
    // }

    // return abfahrten;
  }
}
