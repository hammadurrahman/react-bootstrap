import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import { useBootstrapPrefix } from './ThemeProvider';
import PageItem, { Ellipsis, First, Last, Next, Prev } from './PageItem';
import type { BsPrefixProps } from './helpers';

type PaginationSize = 'sm' | 'lg';

export interface PaginationProps
  extends BsPrefixProps,
    React.HTMLAttributes<HTMLUListElement> {
  size?: 'sm' | 'lg';
}

const propTypes = {
  /**
   * @default 'pagination'
   * */
  bsPrefix: PropTypes.string,

  /**
   * Sets the size of all PageItems.
   *
   * @type {('sm'|'lg')}
   */
  size: PropTypes.oneOf<PaginationSize>(['sm', 'lg']),
};

const Pagination = React.forwardRef<HTMLUListElement, PaginationProps>(
  ({ bsPrefix, className, size, ...props }, ref) => {
    const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'pagination');
    return (
      <ul
        ref={ref}
        {...props}
        className={classNames(
          className,
          decoratedBsPrefix,
          size && `${decoratedBsPrefix}-${size}`,
        )}
      />
    );
  },
);

Pagination.propTypes = propTypes;
Pagination.displayName = 'Pagination';

export default Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem,
  Next,
  Last,
});
