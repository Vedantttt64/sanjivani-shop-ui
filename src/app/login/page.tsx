"use client"

import React from 'react'
import FormInput from '../components/ui/elements/FormInput';
import DropDown, { DropDownOptions } from '../components/ui/elements/DropDown';
import Link from 'next/link';
import { login, LoginRequest } from '@/services/auth';
import { registerVendor, RegisterVendorReq } from '@/services/vendor/registerVendor';
import { registerCorporate, RegisterCorporateReq } from '@/services/corporate/registerCorporate';

const VendorRegisterInit: RegisterVendorReq = {
    name: "",
    location: "",
    mobileNumber: "",
    emailAddress: "",
    password: "",
}

const CorporateRegisterInit: RegisterCorporateReq = {
    companyName: "",
    companyLocation: "",
    companyAdminName: "",
    companyAdminMobileNumber: "",
    companyAdminEmailAddress: "",
    password: "",
    role:"ROLE_CORPORATE"
}

const initState: LoginRequest = {
    mobileNumber: "",
    password: "",
}

export default function Login() {

    const [authData, setAuthData] = React.useState(initState);
    const [vendorRegister, setVendorRegister] = React.useState<RegisterVendorReq>(VendorRegisterInit);

    const [corporateRegister, setCorporateRegister] = React.useState(CorporateRegisterInit);

    const [formType, setFormType] = React.useState("login");

    const handleDataChange = (field: keyof typeof authData, value: string) => {
        setAuthData((prev: typeof authData) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleVendorRegister = (field: keyof typeof vendorRegister, value: string) => {
        setVendorRegister((prev: typeof vendorRegister) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleCorporateRegister = (field: keyof typeof corporateRegister, value: string) => {
        setCorporateRegister((prev: typeof corporateRegister) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleClose = async () => {
        if (formType === "login") {
            console.log(authData);
            const resp = await login(authData);
            console.log("response : ", resp);
        }

        if (formType === "vendorRegister") {
            console.log(vendorRegister);
            const resp = await registerVendor(vendorRegister);
            console.log(resp);
        }

        if (formType === "corporateRegister") {
            console.log(corporateRegister);
            const resp = await registerCorporate(corporateRegister);
            console.log(resp);
        }
    };

    return (
        <div className='bg-[#eeeeee] min-h-screen flex items-center justify-center p-4 overflow-auto'>
            <div className='w-full max-w-sm flex flex-col items-center justify-center'>
                <form className='w-full px-6 py-8 shadow-xl hover:shadow-2xl rounded-2xl bg-white flex flex-col items-center justify-center transition-shadow duration-150'>
                    <div className='text-center mb-1 flex flex-col justify-center items-center'>
                        <Link className='justify-center flex' href="/">
                            <img src="images/sanjivani-logo.png" className='w-[85%] h-auto' alt="Sanjivani Logo" />
                        </Link>
                        
                    </div>

                    {formType === "login" && (
                        <>
                            <FormInput label="" icon='phone' type="tel" placeholder='Enter Mobile Number' inputStyle="placeholder:font-extrabold placeholder:uppercase placeholder:tracking-wider placeholder:text-xs placeholder:text-slate-500" value={authData.mobileNumber} onChange={(value) => handleDataChange('mobileNumber', value)} />
                            <FormInput label="" icon='password' type="password" placeholder='Enter Password' inputStyle="placeholder:font-extrabold placeholder:uppercase placeholder:tracking-wider placeholder:text-xs placeholder:text-slate-500" value={authData.password} onChange={(value) => handleDataChange('password', value)} />
                        </>
                    )}

                    {formType === "volunteer" && (
                        <>
                            <FormInput label="Full Name" icon='user' type="text" value={vendorRegister.name} onChange={(value) => handleVendorRegister('name', value)} />
                            <FormInput label="Location" icon='user' type="text" value={vendorRegister.location} onChange={(value) => handleVendorRegister('location', value)} />
                            <FormInput label="Phone Number" icon='phone' type="tel" value={vendorRegister.mobileNumber} onChange={(value) => handleVendorRegister('mobileNumber', value)} />
                            <FormInput label="Email" icon='email' type="email" value={vendorRegister.emailAddress} onChange={(value) => handleVendorRegister('emailAddress', value)} />
                            <FormInput label="Password" icon='password' type="password" value={vendorRegister.password} onChange={(value) => handleVendorRegister('password', value)} />
                        </>
                    )}

                    {formType === "corporateRegister" && (
                        <>
                            <FormInput label="Company Name" icon='user' type="text" value={corporateRegister.companyName} onChange={(value) => handleCorporateRegister('companyName', value)} />
                            <FormInput label="Company Location" icon='location' type="text" value={corporateRegister.companyLocation} onChange={(value) => handleCorporateRegister('companyLocation', value)} />
                            <FormInput label="Admin Name" icon='user' type="text" value={corporateRegister.companyAdminName} onChange={(value) => handleCorporateRegister('companyAdminName', value)} />
                            <FormInput label="Admin Mobile Number" icon='phone' type="tel" value={corporateRegister.companyAdminMobileNumber} onChange={(value) => handleCorporateRegister('companyAdminMobileNumber', value)} />
                            <FormInput label="Admin Email Address" icon='email' type="email" value={corporateRegister.companyAdminEmailAddress} onChange={(value) => handleCorporateRegister('companyAdminEmailAddress', value)} />
                            <FormInput label="Password" icon='password' type="password" value={corporateRegister.password} onChange={(value) => handleCorporateRegister('password', value)} />
                        </>
                    )}

                    <div className="mt-5 w-full flex gap-4 justify-between">
                        {formType === "login" ? (
                            <>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="flex-1 text-white py-2.5 rounded-md font-bold uppercase tracking-wide transition duration-300 ease-in-out cursor-pointer hover:scale-105 text-center"
                                    style={{
                                        background: 'linear-gradient(to right, #f97316, #ec4899)',
                                    }}
                                >
                                    LOGIN
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormType("corporateRegister")}
                                    className="flex-1 bg-blue-600 text-white py-2.5 rounded-md font-bold uppercase tracking-wide hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer hover:scale-105 text-center"
                                >
                                    REGISTER
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="flex-1 text-white py-2.5 rounded-md font-bold uppercase tracking-wide transition duration-300 ease-in-out cursor-pointer hover:scale-105 text-center"
                                    style={{
                                        background: 'linear-gradient(to right, #f97316, #ec4899)',
                                    }}
                                >
                                    REGISTER
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormType("login")}
                                    className="flex-1 bg-blue-600 text-white py-2.5 rounded-md font-bold uppercase tracking-wide hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer hover:scale-105 text-center"
                                >
                                    LOGIN
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
