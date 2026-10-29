import { describe, it, expect } from 'vitest'
import { moveItem } from '../array'

describe('moveItem', () => {
  it('把元素移动到前面', () => {
    expect(moveItem(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b'])
  })

  it('把元素移动到后面', () => {
    expect(moveItem(['a', 'b', 'c'], 0, 2)).toEqual(['b', 'c', 'a'])
  })

  it('不修改原数组', () => {
    const origin = ['a', 'b', 'c']
    moveItem(origin, 0, 2)
    expect(origin).toEqual(['a', 'b', 'c'])
  })

  it('索引相同则原样返回', () => {
    expect(moveItem(['a', 'b'], 1, 1)).toEqual(['a', 'b'])
  })
})
