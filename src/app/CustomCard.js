'use client';

import { useTheme } from 'next-themes';
import React from 'react'

const DUMMY_TEXT = "Lorem ipsum dolor sit amet, consectetuer blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nun."

function CustomCard() {

    const { theme, setTheme } = useTheme();

    return (
        <div className='text-text border-2 border-gray-400 p-20 h-auto rounded text-center flex flex-col gap-10'>
            <h1 className='font-bold text-2xl'>Mode</h1>
            <p className='w-100'>{DUMMY_TEXT}</p>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='bg-button p-4 rounded'>Toggle Theme</button>
        </div>
    )
}

export default CustomCard