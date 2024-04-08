"use client";

import Image from 'next/image';
import Grid from '/public/Gride.svg';
import 'font-awesome/css/font-awesome.min.css';
import CoverPage from "@/components/general/CoverPage";
import { useEffect, useState } from 'react';
import { University } from '@/types';
import PageTemplate from '@/components/general/PageTemplate';
import CardContainer from '@/components/general/CardContainer';
import { filter as fuzzyFilter } from 'fuzzy';
import { useCourseContext } from '@/hooks/useCourseContext';

const Courses = () => {
    const { universities } = useCourseContext();
    const [searchText, setSearchText] = useState<string>('');
    const [filteredUniversities, setFilteredUniversities] = useState<{ data: University[] }>({ data: [] });

    useEffect(() => {
        const filteredData = fuzzyFilter(searchText, universities?.data || [], {
            extract: (univesity: University) => univesity.attributes.name || '',
        }).map(item => item.original)
        setFilteredUniversities({
            data: filteredData,
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [universities, searchText])


    return (
        <PageTemplate
            className="w-screen min-h-screen h-full relative"
        >
            <Image src={Grid} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
            <CoverPage
                title="Universities"
                searchText={searchText}
                setSearchText={setSearchText}
            />

            <CardContainer
                type="university"
                universityData={filteredUniversities}
                cols={3}
            />

        </PageTemplate>
    )
}

export default Courses;