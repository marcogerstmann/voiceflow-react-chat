import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useMemo } from 'react';

import { Nullish } from '@/types';

import('dayjs/locale/de');

dayjs.extend(relativeTime);
dayjs.locale('de');

export const useTimestamp = (startTime?: Nullish<number>) => {
  return useMemo(() => {
    if (!startTime) return null;

    const start = dayjs(startTime).locale('de');
    const now = dayjs();

    switch (true) {
      case now.isSame(start, 'day'):
        return 'Heute';
      case now.subtract(1, 'day').isSame(start, 'day'):
        return 'Gestern';
      default:
        return start.fromNow();
    }
  }, [startTime]);
};
