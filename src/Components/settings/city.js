import React, { useEffect, useState } from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { db } from '../../firebaseConfig';
import { collection, addDoc, setDoc, getDoc, doc, getDocs, onSnapshot } from "firebase/firestore";
import { AiOutlineSearch } from 'react-icons/ai'
var subscribe = undefined;

const CityTable = ({ city, building }) => {


    const [cityData, setCityData] = useState([]);

    useEffect(() => {
        subscribe = onSnapshot(collection(db, "Users"),
            (snapshot) => {
                var docs = snapshot.docs;
                setCityData(docs)
            });
    }, [!subscribe]
    )

    const filter = (e)=>{
        cityData.filter((doc)=>{
           return false
        })
    }

    return (
        <div className='setting py-4'>
            <div className="search d-flex justify-content-start py-4">
                <input onKeyUp={filter} type="search" name="" id="search" placeholder='Enter email id' className='form-control py-2' />
                <button className='btn btn-primary mx-2'><AiOutlineSearch /></button>
                <button className='btn btn-primary mx-4'>Download</button>
            </div>
            <div className="setting-list">
                <table>
                    <thead>
                        <tr className='row-1'>
                            <th>Name</th>
                            <th>EmailTime</th>
                            <th>ScanTime</th>
                            <th>Has Project</th>
                            <th>Email</th>
                            <th>Building</th>
                            <th>OtherEmail</th>
                            {/* <th>Option</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cityData?.map((curItem, keys) => {
                                // console.log(building.toLowerCase() === curItem.data().obj.building,city == curItem.data().obj.City)
                                // console.log(building.toLowerCase(), curItem.data().obj.building, city, curItem.data().obj.City)
                                if ((building.toLowerCase() === curItem.data().obj?.building) || city == "all") {
                                    return (

                                        <tr key={keys} className={`${keys % 2 !== 0 && 'row-1'}`}>
                                            <td>{curItem.data().obj?.Name}</td>
                                            <td>{curItem.data().obj?.EmailTime}</td>
                                            <td>{curItem.data().obj?.scanTime}</td>
                                            <td>{'TRUE'}</td>
                                            <td>{curItem.data().obj?.Email}</td>
                                            <td>{curItem.data().obj?.building}</td>
                                            <td>{curItem.data().obj?.scanForSelf}</td>
                                            <td>{curItem.data().obj?.emailAddress}</td>
                                            {/* <td>
                                                <button className='btn edit'>
                                                    <MdOutlineModeEditOutline />
                                           np     </button>
                                            </td> */}
                                        </tr>)
                                }
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CityTable
