'use client';
import React from 'react';
import NavBar from '@/components/navBar';
import BreadcrumbBar from '@/components/breadcrumbBar';
import { useState } from 'react';
import AddPropertyDetailsForm from '@/components/addPropertyAddressForm';
import AddPropertyFinancialForm from '@/components/addPropertyFinancialForm';
import AddPropertyProfileForm from '@/components/addPropertyProfileForm';
import validateAddPropertyForm from 'validationFunctions/validateAddPropertyForm';
import { useUpdateForm } from 'hooks/useUpdateForm';

export interface PropertyAddress {
  nameOrNumber: string;
  postcode: string;
  town: string;
  city: string;
  county: string;
}
export interface PropertyFinancials {
  purchasePrice: string;
  purchaseDate: string;
  purchaseFees: string;
  purchaseMethod: PurchaseMethod;
  depositAmount: string;
  mortgageAmount: string;
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
  const [activeTab, setActiveTab] = useState<SectionName>('address');
  const [preview, setPreview] = useState<string>('');

  // Form info states
  const [addressInfo, , handleAddressChange] = useUpdateForm<PropertyAddress>({
    nameOrNumber: '',
    postcode: '',
    town: '',
    city: '',
    county: ''
  });
  const [financialInfo, , handleFinancialChange] =
    useUpdateForm<PropertyFinancials>({
      purchasePrice: '',
      purchaseDate: '',
      purchaseFees: '',
      purchaseMethod: 'default',
      depositAmount: '',
      mortgageAmount: '',
      mortgagePayment: ''
    });
  const [profileInfo, setProfileInfo, handleProfileChange] =
    useUpdateForm<PropertyProfile>({
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
  const postcodeValid: boolean =
    addressInfo.postcode === '' ||
    !!addressInfo.postcode.match(
      /^[a-zA-z]{1,2}\d[a-zA-Z\d]?\s?\d[a-zA-Z]{1,2}$/
    );
  const totalEqualsPart: boolean =
    financialInfo.purchaseMethod === 'mortgage'
      ? Number(financialInfo.purchasePrice) ===
        Number(financialInfo.mortgageAmount) +
          Number(financialInfo.depositAmount)
      : true;

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
        <div className='bg-white rounded-lg p-2 shadow-lg shadow-orange-300 w-5/6 lg:w-2/3 xl:w-2/5 mx-auto h-5/6 mt-4'>
          <ol className='flex justify-center mt-6 font-bold flex-wrap'>
            <button
              className='border-r-2 border-slate-600 px-2'
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
              className='border-r-2 border-slate-600 px-2'
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
            className='mt-10 font-bold h-5/6 lg:w-3/4 lg:mx-auto'
            onSubmit={handleSubmit}
          >
            {activeTab === 'address' && (
              <AddPropertyDetailsForm
                addressInfo={addressInfo}
                handleChange={handleAddressChange}
                postcodeValid={postcodeValid}
              />
            )}
            {activeTab === 'financial' && (
              <AddPropertyFinancialForm
                financialInfo={financialInfo}
                handleChange={handleFinancialChange}
                totalEqualsPart={totalEqualsPart}
              />
            )}
            {activeTab === 'profile' && (
              <AddPropertyProfileForm
                profileInfo={profileInfo}
                preview={preview}
                handleChange={handleProfileChange}
                handleTagClick={handleTagClick}
                handleFileChange={handleFileChange}
              />
            )}
            <button
              className={`py-2 px-6 rounded-lg block mx-auto ${
                formValid && postcodeValid && totalEqualsPart
                  ? 'hover:scale-105 hover:opacity-90 bg-orange-300'
                  : 'bg-slate-300'
              }`}
              disabled={!formValid || !postcodeValid || !totalEqualsPart}
            >
              Save
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default AddPropertyPage;
