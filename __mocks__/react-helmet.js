const mock = {
  toComponent: jest.fn(() => null),
}

module.exports = {
  rewind: jest.fn(() => ({
    base: mock,
    link: mock,
    meta: mock,
    script: mock,
    title: mock,
  })),
}
