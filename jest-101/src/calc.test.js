import { add, fetchUser } from './calc';

describe('calculator', () => {
  it('add two number', () => {
    expect(add(1, 2)).toEqual(3);
  });

  //toBe
  it('basic usage toBe', () => {
    expect(1 + 1).toBe(2);
    expect('Davi').toBe('Davi');
    // expect({ name: 'Davi' }).toBe({ name: 'Davi' }); // FAIL
  });

  //toBe
  it('basic usage toEqual', () => {
    expect(1 + 1).toEqual(2);
    expect('Davi').toEqual('Davi');
    expect({ name: 'Davi' }).toEqual({ name: 'Davi' });
  });

  it('match object', () => {
    const user = {
      name: 'Davi',
      address: 'Serra de Peroba',
    };

    expect(user.name).toBeDefined();
    expect(user).toEqual({
      name: 'Davi',
      address: 'Serra de Peroba',
    });
  });

  // jest.fn
  it('create a callable function', () => {
    const mock = jest.fn();

    mock('Davi');

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith('Davi');
    expect(mock).toHaveBeenCalledTimes(1);
  });

  // mock implementation
  it('mock implementation', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => a + b);

    expect(fakeAdd(3, 2)).toBe(5);
    expect(fakeAdd).toHaveBeenCalledWith(3, 2);
  });
});

describe('mock API call', () => {
  const user = {
    name: 'Davi',
  };

  it('mock fetch', () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ user }));

    const process = jest.fn();
    fetchUser(111).then((x) => console.log(x));

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:4000/users/111',
    );
  });
});
