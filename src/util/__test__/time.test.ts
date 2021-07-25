import { TimeUtil } from '@src/util/time';

describe('TimeUtil', () => {
  it('Should that when calling the getUnixTimeForAFutureDay function it returns the current date plus the number of days passed by parameter in unix format', () => {
    const days = 1;
    const date = new Date();
    date.setTime(date.getTime() + days * 86400000);

    const unixFormat = Math.floor(date.getTime() / 1000);
    const result = TimeUtil.getUnixTimeForAFutureDay(days);

    expect(unixFormat).toBe(result);
  });
});
