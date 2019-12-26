const pkg = require('../../../package.json');
import version from '../index';

describe('version', () => {
  it('should get version ', () => {
    expect(version).toEqual(pkg.version);
  });

  it('should style output is not null', () => {
    expect(require('../style')).not.toBeNull();
  });
});
