import React from 'react';

/*
 *   Component to display the number of messages / issues on the appropriate icons.
 *   Custom styling will be applied dependent on the value of the counter
 */
const NotificationCounter = ({
  styleMap,
  count
}: {
  styleMap: string[];
  count: string;
}) => {
  return (
    <p className={`absolute text-white font-bold ${styleMap[count.length]}`}>
      {count}
    </p>
  );
};

export default NotificationCounter;
