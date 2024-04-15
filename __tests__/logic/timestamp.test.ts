import { timestampToDate } from '../../src/services/Utility';

//Insieme di test 
describe('timestamp to date', () => {
  it('should return a date and time from a timestamp', () => {
    const t = "2024-02-22T09:39:52.788Z";
    const result = timestampToDate(t);
    expect(result).toEqual("10:39:52 - 22/2/2024");
  });
  it('should return a second date and time from a timestamp', () => {
    const t = "2024-02-22T10:22:52.788Z";
    const result = timestampToDate(t);
    expect(result).toEqual("11:22:52 - 22/2/2024");
  });
});

//Test singolo
test('Single timestamp test', () => {
    expect(timestampToDate("2024-01-21T01:19:52.788Z")).toBe("02:19:52 - 21/1/2024");
});
  
