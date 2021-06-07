const assert = require('assert');
const HttpStatus = require('../lib/httpStatus');

describe('HttpStatus - status', () => {
  it('statusOk is equal to 200', () => assert(HttpStatus.statusOk === 200));
  it('statusCreated is equal to 201', () => assert(HttpStatus.statusCreated === 201));
  it('statusNoContent is equal to 204', () => assert(HttpStatus.statusNoContent === 204));
  it('statusFound is equal to 302', () => assert(HttpStatus.statusFound === 302));
  it('statusBadRequest is equal to 400', () => assert(HttpStatus.statusBadRequest === 400));
  it('statusUnauthorized is equal to 401', () => assert(HttpStatus.statusUnauthorized === 401));
  it('statusForbidden is equal to 403', () => assert(HttpStatus.statusForbidden === 403));
  it('statusNotFound is equal to 404', () => assert(HttpStatus.statusNotFound === 404));
  it('statusConflict is equal to 409', () => assert(HttpStatus.statusConflict === 409));
  it('statusUnprocessableEntity is equal to 422', () => assert(HttpStatus.statusUnprocessableEntity === 422));
  it('statusServerError is equal to 500', () => assert(HttpStatus.statusServerError === 500));
  it('statusNotImplemented is equal to 501', () => assert(HttpStatus.statusNotImplemented === 501));
  it('statusBadGateway is equal to 502', () => assert(HttpStatus.statusBadGateway === 502));
  it('statusServiceUnavailable is equal to 503', () => assert(HttpStatus.statusServiceUnavailable === 503));
});

describe('HttpStatus - name', () => {
  it('statusNameOk is equal to "Ok"', () => assert(HttpStatus.statusNameOk === 'Ok'));
  it('statusNameCreated is equal to "Created"', () => assert(HttpStatus.statusNameCreated === 'Created'));
  it('statusNameNoContent is equal to "No Content"', () => assert(HttpStatus.statusNameNoContent === 'No Content'));
  it('statusNameFound is equal to "Found"', () => assert(HttpStatus.statusNameFound === 'Found'));
  it('statusNameBadRequest is equal to "BadRequest"', () => assert(HttpStatus.statusNameBadRequest === 'BadRequest'));
  it('statusNameUnauthorized is equal to "Unauthorized"', () => assert(HttpStatus.statusNameUnauthorized === 'Unauthorized'));
  it('statusNameForbidden is equal to "Forbidden"', () => assert(HttpStatus.statusNameForbidden === 'Forbidden'));
  it('statusNameNotFound is equal to "Not Found"', () => assert(HttpStatus.statusNameNotFound === 'Not Found'));
  it('statusNameConflict is equal to "Conflict"', () => assert(HttpStatus.statusNameConflict === 'Conflict'));
  it('statusNameUnprocessableEntity is equal to "Unprocessable Entity"', () => assert(HttpStatus.statusNameUnprocessableEntity === 'Unprocessable Entity'));
  it('statusNameServerError is equal to "Internal Server Error"', () => assert(HttpStatus.statusNameServerError === 'Internal Server Error'));
  it('statusNameNotImplemented is equal to "Not Implemented"', () => assert(HttpStatus.statusNameNotImplemented === 'Not Implemented'));
  it('statusNameBadGateway is equal to "Bad Gateway"', () => assert(HttpStatus.statusNameBadGateway === 'Bad Gateway'));
  it('statusNameServiceUnavailable is equal to "Service Unavailable"', () => assert(HttpStatus.statusNameServiceUnavailable === 'Service Unavailable'));
});
