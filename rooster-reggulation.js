const assert=require('assert')
const Rooster=require('../index')
describe('Rooster',()=>{
  describe('.announceDawn',()=>{
    it('returns a rooster call')
    //setup
    const expected='cock-a-doodle-doo'
    //exercise
    const result=Rooster.announceDawn()
    //verify
    assert.equal(result,expected)
  })
  describe('Rooster',()=>{
    describe('.timeAtDawn',()=>{
      it('returns its argument as a string')
      //setup
      const inputNumber=5
      const expected='5'
      //exercise
      const result=Rooster.timeAtDawn(inputNumber)
      //verify
      assert.strictEqual(result,expected)
    })
    it('throws an error if passed a number less than 0',()=>{
      const inputNumber=-1
      const expected=RangeError
      assert.throws(()=>{
        Rooster.timeAtDawn(inputNumber)
      },expected)
    })
    it('throws an error if passed a number greater than 23',()=>{
      const inputNumber=-1
      const expected=RangeError
      assert.throws(()=>{
        Rooster.timeAtDawn(inputNumber)
      },expected)
    })
  })
})