import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
import type { CloseButtonVariant } from './CloseButton';
import AbstractModalHeader, {
  AbstractModalHeaderProps,
} from './AbstractModalHeader';
import type { BsPrefixOnlyProps } from './helpers';

export interface ModalHeaderProps
  extends AbstractModalHeaderProps,
    BsPrefixOnlyProps {}

const propTypes = {
  /**
   * @default 'modal-header'
   */
  bsPrefix: PropTypes.string,

  /**
   * Provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  closeLabel: PropTypes.string,

  /**
   * Sets the variant for close button.
   */
  closeVariant: PropTypes.oneOf<CloseButtonVariant>(['white']),

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: PropTypes.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: PropTypes.func,
};

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  (
    {
      bsPrefix,
      className,
      closeLabel = 'Close',
      closeButton = false,
      ...props
    },
    ref,
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-header');
    return (
      <AbstractModalHeader
        ref={ref}
        {...props}
        className={classNames(className, bsPrefix)}
        closeLabel={closeLabel}
        closeButton={closeButton}
      />
    );
  },
);

ModalHeader.displayName = 'ModalHeader';
ModalHeader.propTypes = propTypes;

export default ModalHeader;
