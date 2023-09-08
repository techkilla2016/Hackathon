"use client"
import React from 'react'
import Header from '@/Components/header'
import { HiMiniBuildingOffice2 } from 'react-icons/hi2'
import { Container } from 'react-bootstrap'
import Aside from '@/Components/aside'
// import CityTable from '@/Components/settings/city'
import Building from '@/Components/building'
// import { LuLayoutDashboard } from 'react-icons/lu'
import CityData from '@/data/city'
// export const metadata = {
//     title: 'Techkilla',
//     description: 'Generated by Techkilla',
// }
const City = ({ params }) => {
    return (
        <div className="main">
            <Aside />
            <main>
                <Header Heading={params?.city} isback={`/`} icon={<HiMiniBuildingOffice2 />} />
                <Container>
                    <Building data={CityData} city={params?.city} />
                </Container>
            </main>
        </div>

    )
}

export default City
