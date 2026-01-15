import * as bold from '@ng-icons/iconsax/bold';
import * as bulk from '@ng-icons/iconsax/bulk';
import * as linear from '@ng-icons/iconsax/linear';
import * as outline from '@ng-icons/iconsax/outline';

describe('Iconsax Icons', () => {
  it('should ensure the export names have not changed unexpectedly', () => {
    expect(Object.keys(bold)).toMatchSnapshot();
    expect(Object.keys(bulk)).toMatchSnapshot();
    expect(Object.keys(outline)).toMatchSnapshot();
    expect(Object.keys(linear)).toMatchSnapshot();
  });
});
