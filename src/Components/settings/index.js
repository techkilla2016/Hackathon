import React from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { settingData } from '@/data/setting'
const Setting = () => {
    return (
        <div className='setting py-4'>
            <div className="setting-list">
                <table>
                    <thead>
                        <tr className='row-1'>
                            <th>Heading</th>
                            <th>Heading</th>
                            <th>Heading</th>
                            <th>Heading</th>
                            <th>Heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            settingData?.map((curItem, keys) => {
                                return <tr key={keys} className={`${keys % 2 !== 0 && 'row-1'}`}>
                                    <td>{curItem?.head1}</td>
                                    <td>{curItem?.head2}</td>
                                    <td>{curItem?.head3}</td>
                                    <td>{curItem?.head4}</td>
                                    <td>
                                        <button className='btn edit'>
                                            <MdOutlineModeEditOutline />
                                        </button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Setting
