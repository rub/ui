import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTable from 'react-table';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import readme from './README.md';

import TablePagination from '../TablePagination';

const data = [
  {
    name: 'Emyr Monaghan',
    age: 26,
    city: 'Berlin',
  },
  {
    name: 'Madihah Watson',
    age: 28,
    city: 'Rome',
  },
  {
    name: 'Rahim Valdez',
    age: 61,
    city: 'Nairobi',
  },
  {
    name: 'Max Mustermann',
    age: 73,
    city: 'Panama Citry',
  },
  {
    name: 'Maggie Alexander',
    age: 52,
    city: 'Bangok',
  },
  {
    name: 'Kirsten Martinez',
    age: 19,
    city: 'New York',
  },
  {
    name: 'Garfield Dejesus',
    age: 78,
    city: 'Paris',
  },
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name', // String-based value accessors!
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
  },
  {
    Header: 'City',
    accessor: 'city', // String-based value accessors!
  },
];

const props = {
  table: () => ({
    className: 'striped',
    zebra: boolean('Zebra Stripping (zebra)', false),
  }),
};

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <ReactTable
        data={data}
        defaultPageSize={5}
        columns={columns}
        PaginationComponent={TablePagination}
      />
    ),
    {
      info: {
        text: readme,
      },
    }
  )
  .add(
    'Zebra Striped',
    () => (
      <ReactTable
        data={data}
        defaultPageSize={5}
        columns={columns}
        className="-border -striped -highlight"
        PaginationComponent={TablePagination}
      />
    ),
    {
      info: {
        text: readme,
      },
    }
  );
