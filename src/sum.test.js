import { sum } from "./sum"

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

// @ponicode
describe("sum.sum", () => {
    test("0", () => {
        let callFunction = () => {
            sum.sum("bar", -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sum.sum(-1, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sum.sum(0, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sum.sum(10, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sum.sum(1, "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sum.sum(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
