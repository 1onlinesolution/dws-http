const assert = require('assert');
const HttpStatus = require('../lib/httpStatus');
const HttpStatusResponse = require('../lib/httpStatusResponse');

describe('HttpStatusResponse - status', () => {
  it('ok returns correct response', () => {
    const response = HttpStatusResponse.ok('my value');
    assert(response.status === HttpStatus.statusOk);
    assert(response.success === true);
    assert(response.value === 'my value');
    assert(response.timestamp instanceof Date);
    assert(response.ip === undefined);
    assert(response.error === undefined);
  });
});

