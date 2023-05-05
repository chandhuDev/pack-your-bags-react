import sikkim from '../../src/assests/7.-Yumthang-Valley-in-Sikkim.jpg'
import Andaman from '../../src/assests/Andaman-and-Nicobar-Islands.jpg'
import Madhya from '../../src/assests/Bhedaghat.jpg'
import Himachal from '../../src/assests/Bir.jpg'
import Karnataka from '../../src/assests/Chikmagalur.jpg'
import SriNagar from '../../src/assests/dal-lake.jpg'
import Ooty from '../../src/assests/Emerald-Lake.jpg'
import Andhra from '../../src/assests/Gandikota-Hills-Grand-Canyon.jpg'
import Jammu from '../../src/assests/Gulmarg.jpg'
import Karnataka1 from '../../src/assests/Hampi.jpg'
import Odisha from '../../src/assests/Jaisalmer.jpg'
import Himachal1 from '../../src/assests/Khajjiar.jpg'
import Jammu1 from '../../src/assests/Ladakh-winter.jpg'
import Lakshadweep from '../../src/assests/Lakshadweep.jpg'
import Maharastra from '../../src/assests/Mahabaleshwar.jpg'
import Meghalaya from '../../src/assests/Meghalaya.jpg'
import Rajasthan from '../../src/assests/Mount-Abu.jpg'
import Kerala from '../../src/assests/Munnar-Kerala.jpg'
import Gujarat from '../../src/assests/Rann-of-Kutch.jpg'
import West from '../../src/assests/Sundarbans.jpg'
import Arunchal from '../../src/assests/Tawang.jpg'
import TamilNadu from '../../src/assests/trivengamam.jpg'
import UttarPradesh from '../../src/assests/Varanasi.jpg'
import Goa from '../../src/assests/Waterfalls-Dudhsagar.jpg'

import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Navigate=useNavigate
export const AppContext = React.createContext(null)


const images = [
    {
        url: sikkim,
        name: 'Sikkim',
    },
    {
        url: Andaman,
        name: 'Andaman',
    },
    {
        url: Madhya,
        name: 'Madhya Pradesh',
    },
    {
        url: Himachal,
        name: 'Himachal Pradesh',
    },
    {
        url: Karnataka,
        name: 'Karnataka',
    },
    {
        url: SriNagar,
        name: 'Sri Nagar',
    },
    {
        url: Ooty,
        name: 'Ooty',
    },
    {
        url: Andhra,
        name: 'Andhra Pradesh',
    },
    {
        url: Jammu,
        name: 'Jammu Kashmir',
    },
    {
        url: Karnataka1,
        name: 'Karnataka',
    },
    {
        url: Odisha,
        name: 'Odisha',
    },
    {
        url: Himachal1,
        name: 'Himachal Pradesh',
    },
    {
        url: Jammu1,
        name: 'Jammu Kashmir',
    },
    {
        url: Lakshadweep,
        name: 'Lakshadweep',
    },
    {
        url: Maharastra,
        name: 'Maharastra',
    },
    {
        url: Meghalaya,
        name: 'Meghalaya',
    },
    {
        url: Rajasthan,
        name: 'Rajasthan',
    },
    {
        url: Kerala,
        name: 'Kerala',
    },
    {
        url: Gujarat,
        name: 'Gujarat',
    },
    {
        url: West,
        name: 'West Bengal',
    },
    {
        url: Arunchal,
        name: 'Arunchal Pradesh',
    },
    {
        url: TamilNadu,
        name: 'TamilNadu',
    },
    {
        url: UttarPradesh,
        name: 'UttarPradesh',
    },
    {
        url: Goa,
        name: 'Goa',
    },
]

export default images
