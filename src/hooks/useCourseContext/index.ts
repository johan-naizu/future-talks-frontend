import { useContext } from 'react';
import { CourseContext } from '@/Context';

export const useCourseContext = () => {
    const context = useContext(CourseContext);
    if (!context) {
        throw new Error('useCourseContext must be used within a CourseContextProvider');
    }
    return context;
}

