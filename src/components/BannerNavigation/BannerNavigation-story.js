import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import { BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import { BannerNavigationWithContent } from './BannerNavigationWithContent';
import Search from '../Search';
import Link from '../Link';

storiesOf('BannerNavigation', module)
  .addDecorator(withReadme([readme]))
  .add(
    'default',
    withInfo({
      text: `
    The BannerNavigation is used on internal applications above the main navigation to crosslink between the most important internal applications. It is hidden on Mobile devices.

    ~~~js
    import { BannerNavigation, BannerNavigationItem } from '@wfp/ui';
    ~~~
    `,
    })(() => (
      <BannerNavigation>
        <BannerNavigationItem>
          <Link href="http://communities.wfp.org" target="_blank">
            Communities
          </Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="http://manuals.wfp.org" target="_blank">
            Manuals
          </Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="https://go.docs.wfp.org" target="_blank">
            GoDocs
          </Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="http://opweb.wfp.org" target="_blank">
            OPweb
          </Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="http://info.wfp.org" target="_blank">
            IN/FO
          </Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="https://selfservice.go.wfp.org" target="_blank">
            Self-service
          </Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Link href="https://welearn.wfp.org" target="_blank">
            WeLearn
          </Link>
        </BannerNavigationItem>
        <BannerNavigationItem>
          <Search
            id="search-2"
            labelText="Search"
            kind="banner"
            placeHolderText="Search"
            onChange={action('onChange')}
          />
        </BannerNavigationItem>
      </BannerNavigation>
    ))
  )
  .add(
    'BannerNavigationWithContent',
    withInfo({
      text: `
    The BannerNavigation is used on internal applications above the main navigation to crosslink between the most important internal applications. It is hidden on Mobile devices.

    ~~~js
    import { BannerNavigation, BannerNavigationItem } from '@wfp/ui';
    ~~~
    `,
    })(() => <BannerNavigationWithContent />)
  );
