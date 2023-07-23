"use client"
import React from 'react'
import Tab from '@mui/material/Tab';
import { TabPanel, TabList, TabContext } from '@mui/lab';

const Tournaments = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <section className="max-w-7xl m-auto px-8">
            <TabContext value={value}>
                <TabList
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="1" label="Tournaments" />
                    <Tab value="2" label="Result" />
                </TabList>
                <TabPanel value="1">Tournaments</TabPanel>
                <TabPanel value="2">Result</TabPanel>
            </TabContext>
        </section>
    )
}

export default Tournaments