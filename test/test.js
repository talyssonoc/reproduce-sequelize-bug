const { expect } = require('chai');
const { sequelize } = require('../models');

describe('Test connection not closing', () => {
  before(() => sequelize.authenticate());
  beforeEach(() => sequelize.truncate({ cascade: true }));
  // after(() => sequelize.close());

  it('will run but the process will not close until sequelize.close() is run', () => {
    expect(1).to.equal(1);
  });
});