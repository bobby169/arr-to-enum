import arrToEnum from "../src";
const status1 = [
    {
        name: 'n1',
        value: 1
    },
    {
        name: 'n2',
        value: 2
    }
]

const status2 = [
    {
        k: 'k1',
        v: 'v1'
    },
    {
        k: 'k2',
        v: 'v2'
    }
]

test('Convert array to equal Enum object', () => {
    expect(arrToEnum(status1)).toEqual( { '1': 'n1', '2': 'n2', n1: 1, n2: 2 });
});

test('Convert array to equal Enum object2', () => {
    expect(arrToEnum(status2, 'test', 'k', 'v')).toEqual( { k1: 'v1', v1: 'k1', k2: 'v2', v2: 'k2' });
});
