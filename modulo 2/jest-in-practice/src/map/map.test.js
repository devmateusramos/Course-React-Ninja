'use strict';

import { expect } from 'chai';
import map from './map';

it('map should be a function', () => {
  expect(map).to.be.a('function');
});

it('map([1,2]),   (item) => item) should return [1,2]', () => {
  expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2]);
});

it('map([3,4]),   (item) => item) should return [3,4]', () => {
  expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4]);
});

it('map([3,4]),   (item) => item + 1) should return [4,5]', () => {
  expect(map([3, 4], (item) => item + 1)).to.be.deep.equal([4, 5]);
});

it('map([5,8]),   (item) => item + 1) should return [6,9]', () => {
  expect(map([5, 8], (item) => item + 1)).to.be.deep.equal([6, 9]);
});

it('map([5,8]),   (item, index) => index) should return [0, 1]', () => {
  expect(map([5, 8], (item, index) => index)).to.be.deep.equal([0, 1]);
});

it('map([5,8]),   (item, index, array) => [5, 8], [5, 8]) should return [0, 1]', () => {
  expect(map([5, 8], (item, index, array) => array)).to.be.deep.equal([
    [5, 8],
    [5, 8],
  ]);
});
