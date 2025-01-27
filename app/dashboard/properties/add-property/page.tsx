'use client';
import React from 'react';
import NavBar from '@/components/navBar';
import BreadcrumbBar from '@/components/breadcrumbBar';
import { useState } from 'react';
import AddPropertyDetailsForm from '@/components/addPropertyAddressForm';
import AddPropertyFinancialForm from '@/components/addPropertyFinancialForm';
import AddPropertyProfileForm from '@/components/addPropertyProfileForm';

export interface PropertyAddress<T> {
  nameOrNumber: T;
  postcode: T;
  town?: T;
  city: T;
  county?: T;
}
export interface PropertyFinancials {
  purchasePrice: '' | number;
  purchaseDate: '' | Date;
  purchaseFees?: '' | number;
  purchaseMethod: PurchaseMethod;
  depositAmount?: '' | number;
  mortgageAmount?: '' | number;
  mortgagePayment: '' | number;
}
export interface FinancialInputs {
  purchasePrice: boolean;
  purchaseDate: boolean;
  purchaseFees: boolean;
  purchaseMethod: boolean;
  depositAmount: boolean;
  mortgageAmount: boolean;
  mortgageTerm: boolean;
  mortgageType: boolean;
  mortgageRate: boolean;
  mortgagePayment: boolean;
}
export interface PropertyProfile {
  propertyPic?: File;
  type: PropertyType;
  bedrooms: '' | number;
  bathrooms: '' | number;
  tags: string[];
}
export interface ProfileInputs {
  type: boolean;
  bedrooms: boolean;
  bathrooms: boolean;
}
export type SectionName = 'address' | 'financial' | 'profile';
export type PurchaseMethod = 'default' | 'cash' | 'mortgage';
export type MortgageType = 'default' | 'fixed' | 'variable';
export type PropertyType =
  | 'default'
  | 'detachedHouse'
  | 'semiDetachedHouse'
  | 'terracedHouse'
  | 'apartment'
  | 'bungalow'
  | 'cottage'
  | 'commercial'
  | 'industrial';
const AddPropertyPage = () => {
  const [activeTab, setActiveTab] = useState<string>('address');
  const [preview, setPreview] = useState<string>('');

  // Form info states
  const [addressInfo, setAddressInfo] = useState<PropertyAddress<string>>({
    nameOrNumber: '',
    postcode: '',
    town: '',
    city: '',
    county: ''
  });
  const [financialInfo, setFinancialInfo] = useState<PropertyFinancials>({
    purchasePrice: '',
    purchaseDate: '',
    purchaseFees: '',
    purchaseMethod: 'default',
    depositAmount: '',
    mortgageAmount: '',
    mortgagePayment: ''
  });
  const [profileInfo, setProfileInfo] = useState<PropertyProfile>({
    propertyPic: undefined,
    type: 'default',
    bedrooms: '',
    bathrooms: '',
    tags: []
  });

  // Form active states
  const [addressActive, setaddressActive] = useState<PropertyAddress<boolean>>({
    nameOrNumber: false,
    postcode: false,
    town: false,
    city: false,
    county: false
  });
  const [financialActive, setFinancialActive] = useState<FinancialInputs>({
    purchasePrice: false,
    purchaseDate: false,
    purchaseMethod: false,
    purchaseFees: false,
    depositAmount: false,
    mortgageAmount: false,
    mortgageTerm: false,
    mortgageType: false,
    mortgageRate: false,
    mortgagePayment: false
  });
  const [profileActive, setProfileActive] = useState<ProfileInputs>({
    type: false,
    bedrooms: false,
    bathrooms: false
  });

  // Handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    sectionName: SectionName
  ): void => {
    const { name, value } = e.target;
    if (sectionName === 'address') {
      setAddressInfo(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else if (sectionName === 'financial') {
      setFinancialInfo(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else {
      setProfileInfo(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  const handleFocusState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    active: boolean,
    sectionName: SectionName
  ): void => {
    const { name } = e.target;
    if (sectionName === 'address') {
      setaddressActive(prevState => ({
        ...prevState,
        [name]: active
      }));
    } else if (sectionName === 'financial') {
      setFinancialActive(prevState => ({
        ...prevState,
        [name]: active
      }));
    } else {
      setProfileActive(prevState => ({
        ...prevState,
        [name]: active
      }));
    }
  };
  const handleTagClick = (tag: string): void => {
    setProfileInfo(prevState => {
      const copyActiveTags: string[] = [...prevState.tags];
      const tagIdx: number = copyActiveTags.indexOf(tag);
      if (tagIdx !== -1) {
        copyActiveTags.splice(tagIdx, 1);
        return { ...prevState, tags: copyActiveTags };
      }
      return { ...prevState, tags: [...prevState.tags, tag] };
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const uploadFile = e.target.files && e.target.files[0];
    URL.revokeObjectURL(preview);
    if (uploadFile) {
      setProfileInfo(prevState => ({
        ...prevState,
        propertyPic: uploadFile
      }));
      setPreview(URL.createObjectURL(uploadFile));
    } else {
      setProfileInfo(prevState => ({
        ...prevState,
        propertyPic: undefined
      }));
      setPreview('');
    }
  };

  return (
    <>
      <NavBar />
      <main className='mt-16 md:mt-0 row-span-11 row-start-2 md:col-start-4 lg:col-start-3 xl:col-start-2 md:col-span-8 lg:col-span-10 xl:col-span-9 p-2 mr-4 mb-4 md:mt-8'>
        <BreadcrumbBar />
        <ol className='flex justify-center mt-6 font-bold'>
          <button
            className='border-r-2 border-slate-600 px-4'
            onClick={() => {
              setActiveTab('address');
            }}
          >
            <li
              className={`${
                activeTab === 'address' && 'border-b-4 border-orange-300'
              } px-2 rounded`}
            >
              Address
            </li>
          </button>
          <button
            className='border-r-2 border-slate-600 px-4'
            onClick={() => {
              setActiveTab('financial');
            }}
          >
            <li
              className={`${
                activeTab === 'financial' && 'border-b-4 border-orange-300'
              } px-2 rounded`}
            >
              Financial
            </li>
          </button>
          <button
            className='px-4'
            onClick={() => {
              setActiveTab('profile');
            }}
          >
            <li
              className={`${
                activeTab === 'profile' && 'border-b-4 border-orange-300'
              } px-2 rounded`}
            >
              Profile
            </li>
          </button>
        </ol>
        <form
          className='mt-10 font-bold h-5/6'
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          {activeTab === 'address' && (
            <AddPropertyDetailsForm
              addressInfo={addressInfo}
              addressActive={addressActive}
              handleChange={handleChange}
              handleFocusState={handleFocusState}
            />
          )}
          {activeTab === 'financial' && (
            <AddPropertyFinancialForm
              financialInfo={financialInfo}
              financialActive={financialActive}
              handleChange={handleChange}
              handleFocusState={handleFocusState}
            />
          )}
          {activeTab === 'profile' && (
            <AddPropertyProfileForm
              profileInfo={profileInfo}
              profileActive={profileActive}
              preview={preview}
              handleChange={handleChange}
              handleFocusState={handleFocusState}
              handleTagClick={handleTagClick}
              handleFileChange={handleFileChange}
            />
          )}
          <button className='bg-orange-300 py-2 px-6 rounded-lg block mx-auto'>
            Save
          </button>
        </form>
      </main>
    </>
  );
};

export default AddPropertyPage;
