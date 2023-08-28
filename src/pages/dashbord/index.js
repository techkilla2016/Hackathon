import Seo from '@/Components/SEO'
import Header from '@/Components/header'
import { Container } from 'react-bootstrap'
import { LuLayoutDashboard } from 'react-icons/lu'
import Dashbord from '@/Components/dashbord'
import Aside from '@/Components/aside'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
    const router = useRouter();
    const [cookies] = useCookies()
    useEffect(() => {
        console.log(cookies?.auth)
        if (!cookies?.auth) {
            router.push('/');
        }
    }, [])
    return (
        <>
            <div className="main">
                <Aside />
                <Seo title="Techkilla" />
                <main>
                    <Header Heading={"Dashboard"} icon={<LuLayoutDashboard />} />
                    <Container>
                        <Dashbord />
                    </Container>
                </main>
            </div>
        </>
    )
}
