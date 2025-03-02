import type { CalendarCourseCellProps } from '@views/components/calendar/CalendarCourseCell/CalendarCourseCell';
import CalendarCourseBlock from '@views/components/calendar/CalendarCourseCell/CalendarCourseCell';
import { Button } from '@views/components/common/Button/Button';
import Text from '@views/components/common/Text/Text';
import clsx from 'clsx';
import React from 'react';

import CalendarMonthIcon from '~icons/material-symbols/calendar-month';
import ImageIcon from '~icons/material-symbols/image';

type CalendarBottomBarProps = {
    courses?: CalendarCourseCellProps[];
};

/**
 *
 */
export const CalendarBottomBar = ({ courses }: CalendarBottomBarProps): JSX.Element => {
    if (courses?.length === -1) console.log('foo'); // dumb line to make eslint happy
    return (
        <div className='w-full flex py-1.25'>
            <div className='flex flex-grow items-center gap-3.75 pl-7.5 pr-2.5'>
                <Text variant='h4'>Async. and Other:</Text>
                <div className='h-14 inline-flex gap-2.5'>
                    {courses?.map(course => (
                        <CalendarCourseBlock
                            courseDeptAndInstr={course.courseDeptAndInstr}
                            status={course.status}
                            colors={course.colors}
                            key={course.courseDeptAndInstr}
                            className={clsx(course.className, 'w-35!')}
                        />
                    ))}
                </div>
            </div>
            <div className='flex items-center pl-2.5 pr-7.5'>
                <Button variant='single' color='ut-black' icon={CalendarMonthIcon}>
                    Save as .CAL
                </Button>
                <Button variant='single' color='ut-black' icon={ImageIcon}>
                    Save as .PNG
                </Button>
            </div>
        </div>
    );
};
