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
                            <img src="images/sanjivani-logo.png" className='w-[70%] h-auto' alt="Sanjivani Logo" />
                        </Link>
                        
                    </div>

                    {formType === "login" && (
                        <>
                            <FormInput
                                label=""
                                icon="phone"
                                type="tel"
                                placeholder="ENTER MOBILE NUMBER"
                                inputStyle="font-extrabold uppercase tracking-wider text-xs text-slate-700 placeholder:font-extrabold placeholder:uppercase placeholder:tracking-wider placeholder:text-xs placeholder:text-slate-400"
                                value={authData.mobileNumber}
                                onChange={(value) => handleDataChange('mobileNumber', value)}
                            />
                            <FormInput
                                label=""
                                icon="password"
                                type="password"
                                placeholder="ENTER PASSWORD"
                                inputStyle="font-extrabold uppercase tracking-wider text-xs text-slate-700 placeholder:font-extrabold placeholder:uppercase placeholder:tracking-wider placeholder:text-xs placeholder:text-slate-400"
                                value={authData.password}
                                onChange={(value) => handleDataChange('password', value)}
                            />
                        </>
                    )}

                    {formType === "volunteer" && (
                        <>
                            <FormInput label="Full Name" icon='user' type="text" placeholder="Enter Full Name" value={vendorRegister.name} onChange={(value) => handleVendorRegister('name', value)} />
                            <FormInput label="Location" icon='user' type="text" placeholder="Enter Location" value={vendorRegister.location} onChange={(value) => handleVendorRegister('location', value)} />
                            <FormInput label="Phone Number" icon='phone' type="tel" placeholder="Enter Phone Number" value={vendorRegister.mobileNumber} onChange={(value) => handleVendorRegister('mobileNumber', value)} />
                            <FormInput label="Email" icon='email' type="email" placeholder="Enter Email" value={vendorRegister.emailAddress} onChange={(value) => handleVendorRegister('emailAddress', value)} />
                            <FormInput label="Password" icon='password' type="password" placeholder="Enter Password" value={vendorRegister.password} onChange={(value) => handleVendorRegister('password', value)} />
                        </>
                    )}

                    {formType === "corporateRegister" && (
                        <>
                            <FormInput label="Company Name" icon='user' type="text" placeholder="Enter Company Name" value={corporateRegister.companyName} onChange={(value) => handleCorporateRegister('companyName', value)} />
                            <FormInput label="Company Location" icon='location' type="text" placeholder="Enter Company Location" value={corporateRegister.companyLocation} onChange={(value) => handleCorporateRegister('companyLocation', value)} />
                            <FormInput label="Admin Name" icon='user' type="text" placeholder="Enter Admin Name" value={corporateRegister.companyAdminName} onChange={(value) => handleCorporateRegister('companyAdminName', value)} />
                            <FormInput label="Admin Mobile Number" icon='phone' type="tel" placeholder="Enter Admin Mobile Number" value={corporateRegister.companyAdminMobileNumber} onChange={(value) => handleCorporateRegister('companyAdminMobileNumber', value)} />
                            <FormInput label="Admin Email Address" icon='email' type="email" placeholder="Enter Admin Email Address" value={corporateRegister.companyAdminEmailAddress} onChange={(value) => handleCorporateRegister('companyAdminEmailAddress', value)} />
                            <FormInput label="Password" icon='password' type="password" placeholder="Enter Password" value={corporateRegister.password} onChange={(value) => handleCorporateRegister('password', value)} />
                        </>
                    )}

                    {formType === "login" && (
                        <div className="flex gap-4 w-full mt-5">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="w-1/2 text-white py-2.5 rounded-md font-bold transition-transform hover:scale-105 duration-300 cursor-pointer"
                                style={{
                                    background: 'linear-gradient(to right, #f97316, #ec4899)',
                                }}
                            >
                                LOGIN
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormType("corporateRegister")}
                                className="w-1/2 bg-[#1d4ed8] text-white py-2.5 rounded-md font-bold transition-transform hover:scale-105 duration-300 cursor-pointer"
                            >
                                REGISTER
                            </button>
                        </div>
                    )}

                    {formType === "volunteer" && (
                        <div className="flex gap-4 w-full mt-5">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="w-1/2 text-white py-2.5 rounded-md font-bold transition-transform hover:scale-105 duration-300 cursor-pointer"
                                style={{
                                    background: 'linear-gradient(to right, #f97316, #ec4899)',
                                }}
                            >
                                SUBMIT
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormType("login")}
                                className="w-1/2 bg-slate-500 text-white py-2.5 rounded-md font-bold transition-transform hover:scale-105 duration-300 cursor-pointer"
                            >
                                BACK
                            </button>
                        </div>
                    )}

                    {formType === "corporateRegister" && (
                        <div className="flex gap-4 w-full mt-5">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="w-1/2 text-white py-2.5 rounded-md font-bold transition-transform hover:scale-105 duration-300 cursor-pointer"
                                style={{
                                    background: 'linear-gradient(to right, #f97316, #ec4899)',
                                }}
                            >
                                REGISTER
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormType("login")}
                                className="w-1/2 bg-[#1d4ed8] text-white py-2.5 rounded-md font-bold transition-transform hover:scale-105 duration-300 cursor-pointer"
                            >
                                LOGIN
                            </button>
                        </div>
                    )}

                </form>
            </div>
        </div>
    )
}
