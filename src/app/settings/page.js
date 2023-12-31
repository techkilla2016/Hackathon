"use client"
import React from 'react'
import Header from '@/Components/header'
import { AiFillSetting } from 'react-icons/ai'
import { Container } from 'react-bootstrap'
import Setting from '@/Components/settings'
import Aside from '@/Components/aside'

// export const metadata = {
//     title: 'Settings',
//     description: 'Generated by Techkilla',
// }

const Settings = () => {
    return (
        <div className="main">
            <Aside />
            <main>
                <Header Heading={"Settings"} icon={<AiFillSetting />} />
                <Container>
                    <Setting />
                </Container>
            </main>
        </div>

    )
}

export default Settings
