import * as actions from './index';

describe('Add message', () => {
  it('should have a type of ADD_MESSAGE', () => {
    const message = 'this is a message';
    const expected = {
      type: 'ADD_MESSAGE',
      message: 'this is a message'
    }

    const result = actions.addMessage(message)

    expect(result).toEqual(expected)

  })
})
