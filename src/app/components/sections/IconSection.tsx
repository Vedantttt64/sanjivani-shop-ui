"use client"

import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { FaPlaneUp } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { FiPower } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { PiPlantLight } from "react-icons/pi";
import { GiBroom } from "react-icons/gi";
import { MdBabyChangingStation } from "react-icons/md";
import { MdOutlineSolarPower } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { GiShipBow } from "react-icons/gi";

interface IconData {
  title: string;
  iconPath: ReactElement;
}

export default function IconSection() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const IconsData: IconData[] = [
    { title: 'Home', iconPath: <FaPersonMilitaryRifle fontSize={25}/> },
    { title: 'District', iconPath: <MdBabyChangingStation fontSize={25}/>},
    { title: 'Air', iconPath: <FaPlaneUp fontSize={25}/>},
    { title: 'water', iconPath: <GiShipBow fontSize={25}/> },
    { title: 'Food', iconPath:<PiPlantLight fontSize={25}/> },
    { title: 'Cloths', iconPath: <GiBroom fontSize={25}/>},
    { title: 'Shelter', iconPath: <PiStudentBold fontSize={25}/>},
    { title: 'Solar', iconPath: <MdOutlineSolarPower fontSize={25}/> },
    { title: 'Education', iconPath: <GiTeacher fontSize={25}/> },
    { title: 'Training', iconPath: <FaLaptopCode fontSize={25}/> },
    { title: 'Shop', iconPath: <ShoppingCart size={25} /> },
    { title: 'Medical', iconPath: <FaBriefcaseMedical fontSize={25} /> },
    { title: 'Legal', iconPath: <GoLaw fontSize={25}/> },
    { title: 'Login', iconPath: <FiPower fontSize={25}/>},
  ];

  // Keep active navbar icon synchronized with current URL path
  useEffect(() => {
    if (pathname === '/shop') {
      const idx = IconsData.findIndex((i) => i.title.toLowerCase() === 'shop');
      if (idx !== -1) setSelectedIndex(idx);
    } else if (pathname === '/district') {
      const idx = IconsData.findIndex((i) => i.title.toLowerCase() === 'district');
      if (idx !== -1) setSelectedIndex(idx);
    } else if (pathname === '/login') {
      const idx = IconsData.findIndex((i) => i.title.toLowerCase() === 'login');
      if (idx !== -1) setSelectedIndex(idx);
    } else if (pathname === '/') {
      const idx = IconsData.findIndex((i) => i.title.toLowerCase() === 'home');
      if (idx !== -1) setSelectedIndex(idx);
    }
  }, [pathname]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-center">
        {IconsData.map((data, index) => {
          const isSelected = selectedIndex === index;
          const labelClass = isSelected
            ? 'text-xs font-bold text-blue-600'
            : 'text-xs font-bold text-black';

          return (
            <div
              key={index}
              className={`
               cursor-pointer relative group
               flex flex-col items-center justify-center
               px-2 py-1
               rounded-lg
               min-h-[64px]
               basis-1/4 max-w-[25%]
               sm:basis-auto sm:min-w-[56px] sm:max-w-none sm:flex-grow-0
               transition-all duration-300 ease-in-out
               hover:bg-blue-50
               ${isSelected ? 'bg-blue-50 shadow-sm text-blue-600' : 'text-black'}
     
               flex-grow   
               sm:flex-grow-0 
               max-w-[100%]   
              `}
              onClick={() => {
                setSelectedIndex(index);
                if (typeof window !== 'undefined') {
                  const urlParams = new URLSearchParams(window.location.search);
                  const stateParam = urlParams.get('state') || sessionStorage.getItem('selectedState');
                  if (data.title.toLowerCase() === 'login') {
                    router.push('/login');
                  } else if (data.title.toLowerCase() === 'shop') {
                    router.push(stateParam ? `/shop?state=${encodeURIComponent(stateParam)}` : '/shop');
                  } else if (data.title.toLowerCase() === 'district') {
                    // Force navigation even if already at /district
                    if (window.location.pathname === '/district') {
                      window.location.reload();
                    } else {
                      router.push(stateParam ? `/district?state=${encodeURIComponent(stateParam)}` : '/district');
                    }
                  } else if (data.title.toLowerCase() === 'air') {
                    const query = new URLSearchParams();
                    if (stateParam) query.set('state', stateParam);
                    query.set('section', 'air');
                    router.push(`/projects?${query.toString()}`);
                  } else if (data.title.toLowerCase() === 'water') {
                    const query = new URLSearchParams();
                    if (stateParam) query.set('state', stateParam);
                    query.set('section', 'water');
                    router.push(`/projects?${query.toString()}`);
                  } else if (data.title.toLowerCase() === 'food') {
                    const query = new URLSearchParams();
                    if (stateParam) query.set('state', stateParam);
                    query.set('section', 'food');
                    router.push(`/projects?${query.toString()}`);
                  } else if (data.title.toLowerCase() === 'cloths') {
                    const query = new URLSearchParams();
                    if (stateParam) query.set('state', stateParam);
                    query.set('section', 'clothes');
                    router.push(`/projects?${query.toString()}`);
                  } else if (data.title.toLowerCase() === 'shelter') {
                    const query = new URLSearchParams();
                    if (stateParam) query.set('state', stateParam);
                    query.set('section', 'shelter');
                    router.push(`/projects?${query.toString()}`);
                  } else if (data.title.toLowerCase() === 'solar') {
                    const query = new URLSearchParams();
                    if (stateParam) query.set('state', stateParam);
                    query.set('section', 'solar');
                    router.push(`/projects?${query.toString()}`);
                  } else if (data.title.toLowerCase() === 'education') {
                    const query = new URLSearchParams();
                    if (stateParam) query.set('state', stateParam);
                    query.set('section', 'education');
                    router.push(`/projects?${query.toString()}`);
                  } else if (data.title.toLowerCase() === 'training') {
                    const query = new URLSearchParams();
                    if (stateParam) query.set('state', stateParam);
                    query.set('section', 'work');
                    router.push(`/projects?${query.toString()}`);
                  } else if (data.title.toLowerCase() === 'medical') {
                    const query = new URLSearchParams();
                    if (stateParam) query.set('state', stateParam);
                    query.set('section', 'medical');
                    router.push(`/projects?${query.toString()}`);
                  } else if (data.title.toLowerCase() === 'home' && stateParam) {
                    router.push(`/?state=${encodeURIComponent(stateParam)}`);
                  }
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedIndex(index);
                }
              }}
            >
              <div className={`
          flex items-center justify-center
          p-0 rounded-full
          ${isSelected ? 'bg-black-100' : 'bg-black-50'}
          group-hover:bg-blue-50
          transition-colors duration-300
        `}>
                {data.iconPath}
              </div>
              <span className={`
          ${labelClass}
          mt-1 text-center
          transition-colors duration-300
          truncate max-w-[48px] sm:max-w-[80px]
        `}>
                {data.title}
              </span>
              <span className="
          absolute left-1/2 top-full mt-1 -translate-x-1/2
          px-3 py-1.5 rounded-md bg-[rgba(0,0,0,0.5)] text-white text-xs font-medium
          opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
          z-50 whitespace-nowrap transition-all duration-200 shadow-lg
          hidden sm:block
        ">
                {data.title}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}
