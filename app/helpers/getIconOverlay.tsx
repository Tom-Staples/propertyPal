import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faCircleExclamation,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

interface OverlayTransform {
  spinner: string;
  exclamation: string;
  circle: string;
}
/*
 * Determines the state of the icon and returns the correct overlay
 * based on this
 */
export default function getIconOverlay(
  transform: OverlayTransform,
  count: number | null,
  countDisplay: string
): React.JSX.Element | undefined {
  const loading: boolean = count === null;
  const fetchError: boolean = count === -1;

  if (loading) {
    return (
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        size='xs'
        className='text-white'
        transform={transform.spinner}
      />
    );
  }
  if (fetchError) {
    return (
      <FontAwesomeIcon
        icon={faCircleExclamation}
        size='xs'
        className='text-white'
        transform={transform.exclamation}
      />
    );
  }
  if (countDisplay.length) {
    return (
      <FontAwesomeIcon
        icon={faCircle}
        size='xs'
        className='text-red-600'
        transform={transform.circle}
      />
    );
  }
}
