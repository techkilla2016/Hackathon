import React from 'react'
import Seo from '@/Components/SEO'
import Header from '@/Components/header'
import { AiFillSetting } from 'react-icons/ai'
import { Container } from 'react-bootstrap'
import Setting from '@/Components/settings'
import Aside from '@/Components/aside'

const Settings = () => {
    return (
        <div className="main">
            <Aside />
            <Seo title="Settings" />
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
