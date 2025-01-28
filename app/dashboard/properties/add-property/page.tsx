'use client';
import React from 'react';
import NavBar from '@/components/navBar';
import BreadcrumbBar from '@/components/breadcrumbBar';
import { useState } from 'react';
import AddPropertyDetailsForm from '@/components/addPropertyAddressForm';
import AddPropertyFinancialForm from '@/components/addPropertyFinancialForm';
import AddPropertyProfileForm from '@/components/addPropertyProfileForm';
import validateAddPropertyForm from 'validationFunctions/validateAddPropertyForm';

export interface PropertyAddress {
  nameOrNumber: string;
  postcode: string;
  town?: string;
  city: string;
  county?: string;
}
export interface PropertyFinancials {
  purchasePrice: string;
  purchaseDate: string;
  purchaseFees?: string;
  purchaseMethod: PurchaseMethod;
  depositAmount?: string;
  mortgageAmount?: string;
  mortgagePayment: string;
}
export interface PropertyProfile {
  propertyPic?: File;
  type: PropertyType;
  bedrooms: string;
  bathrooms: string;
  tags: string[];
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
  const [addressInfo, setAddressInfo] = useState<PropertyAddress>({
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

  // Derived state
  const formValid = validateAddPropertyForm(
    addressInfo,
    financialInfo,
    profileInfo
  );

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

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <main className='row-span-11 row-start-2 md:col-start-4 lg:col-start-3 xl:col-start-2 md:col-span-8 lg:col-span-10 xl:col-span-9 p-2 mb-4 md:mt-8'>
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
        <form className='mt-10 font-bold h-5/6' onSubmit={handleSubmit}>
          {activeTab === 'address' && (
            <AddPropertyDetailsForm
              addressInfo={addressInfo}
              handleChange={handleChange}
            />
          )}
          {activeTab === 'financial' && (
            <AddPropertyFinancialForm
              financialInfo={financialInfo}
              handleChange={handleChange}
            />
          )}
          {activeTab === 'profile' && (
            <AddPropertyProfileForm
              profileInfo={profileInfo}
              preview={preview}
              handleChange={handleChange}
              handleTagClick={handleTagClick}
              handleFileChange={handleFileChange}
            />
          )}
          <button
            className={`bg-orange-300 py-2 px-6 rounded-lg block mx-auto ${
              !formValid && 'bg-gray-300'
            }`}
            disabled={!formValid}
          >
            Save
          </button>
        </form>
      </main>
    </>
  );
};

export default AddPropertyPage;
