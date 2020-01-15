import { addMessage } from './addMessage';

describe('addMessage', () => {
  it('should return a default initial state', () => {
    const expected = [];
    const result = addMessage(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return an updated state', () => {
    const mockAction = {
      type: 'ADD_MESSAGE',
      message: 'this is a message'
    }
    const expected = ['this is a message'];

    const result = addMessage([], mockAction);

    expect(result).toEqual(expected)
  })
})