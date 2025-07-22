import { FormatTicketTransactionPipe } from '../format-ticket-transaction/format-ticket-transaction.pipe';

describe('FormatTicketTransactionPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatTicketTransactionPipe();
    expect(pipe).toBeTruthy();
  });
});
