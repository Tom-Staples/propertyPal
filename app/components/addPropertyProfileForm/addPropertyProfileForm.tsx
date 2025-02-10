'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { PropertyProfile } from 'dashboard/properties/add-property/page';
import validateSelectInput from 'validationFunctions/validateSelectInput';
import validateNumberOnlyInput from 'validationFunctions/validateNumberOnlyInput';
import validateImageUpload from 'validationFunctions/validateImageUpload';

interface ProfileFormProps {
  profileInfo: PropertyProfile;
  preview: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleTagClick: (tag: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Static variables
const tagList: string[] = [
  'Garden',
  'Driveway',
  'Utility',
  'Shared',
  'Garage',
  'Shed',
  'Pets',
  'Alarm',
  'Furnished',
  'Open-plan',
  'Modern',
  'Period',
  'Contemporary'
];
const inputStyling =
  'mt-2 outline-none w-full bg-slate-100 py-2 rounded focus:border-b-2 focus:border-orange-300';
const requiredElement: React.JSX.Element = (
  <span className='text-red-400'>*</span>
);

const AddPropertyProfileForm = ({
  profileInfo,
  preview,
  handleChange,
  handleTagClick,
  handleFileChange
}: ProfileFormProps) => {
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const displayTags: React.JSX.Element[] = tagList.map(tag => (
    <li
      key={tag}
      className={`rounded-lg p-2 mx-2 my-2 ${
        profileInfo.tags.includes(tag) ? 'bg-orange-300' : 'bg-slate-200'
      }`}
    >
      <button
        type='button'
        onClick={() => {
          handleTagClick(tag);
        }}
      >
        {tag}
      </button>
    </li>
  ));

  useEffect(() => {
    if (fileUploadRef.current) {
      const dataTransfer = new DataTransfer();
      if (profileInfo.propertyPic) {
        dataTransfer.items.add(profileInfo.propertyPic);
        fileUploadRef.current.files = dataTransfer.files;
      }
    }
  }, [profileInfo.propertyPic]);

  return (
    <div className='flex flex-col h-5/6 overflow-y-scroll mb-6 px-4'>
      <label
        htmlFor='propertyPic'
        className={`block text-center mb-10 lg:w-1/2 mx-auto p-2 ${
          !preview && 'border-2 border-dashed'
        }`}
      >
        {preview ? (
          <>
            <Image
              src={preview}
              alt='Property Image Preview'
              width={400}
              height={400}
              className='aspect-square h-auto w-auto sm:w-2/3 sm:mx-auto lg:w-full rounded-full'
            />
            <br />
            <span className='bg-orange-300 inline-block p-2 rounded-lg hover:scale-105 hover:opacity-90'>
              Change Photo
            </span>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faHouse}
              size='10x'
              className='mb-4 text-slate-100'
            />
            <br />
            <span className='bg-orange-300 p-2 inline-block rounded-lg hover:scale-105 hover:opacity-90'>
              Upload Photo
            </span>
          </>
        )}
        <input
          name='propertyPic'
          id='propertyPic'
          accept='image/*'
          type='file'
          ref={fileUploadRef}
          onChange={e => {
            const valid = validateImageUpload(e.target.value);

            if (valid) {
              handleFileChange(e);
            }
          }}
          className='hidden'
        />
      </label>
      <label htmlFor='type' className='mb-10'>
        {requiredElement}Property Type:
        <br />
        <select
          name='type'
          id='type'
          required
          value={profileInfo.type}
          onChange={e => {
            const valid: boolean = validateSelectInput(e.target.value, [
              'default',
              'detachedHouse',
              'semiDetachedHouse',
              'terracedHouse',
              'apartment',
              'bungalow',
              'cottage',
              'commercial',
              'industrial'
            ]);
            if (valid) {
              handleChange(e);
            }
          }}
          className='mt-2 w-full outline-none py-2 rounded text-center bg-slate-100 focus:border-orange-300 focus:border-2'
        >
          <option value='default'>Please Select</option>
          <option value='detachedHouse'>Detached House</option>
          <option value='semiDetachedHouse'>Semi-Detached House</option>
          <option value='terracedHouse'>Terraced House</option>
          <option value='apartment'>Apartment</option>
          <option value='bungalow'>Bungalow</option>
          <option value='cottage'>Cottage</option>
          <option value='commercial'>Commercial</option>
          <option value='industrial'>Industrial</option>
        </select>
      </label>
      <label htmlFor='bedrooms' className='mb-10'>
        {requiredElement}Number of bedrooms:
        <input
          type='text'
          name='bedrooms'
          id='bedrooms'
          required
          className={inputStyling}
          onChange={e => {
            const valid = validateNumberOnlyInput(e.target.value, 2);

            if (valid) {
              handleChange(e);
            }
          }}
          value={profileInfo.bedrooms}
        />
      </label>
      <label htmlFor='bathrooms' className='mb-10'>
        {requiredElement}Number of bathrooms:
        <input
          type='text'
          name='bathrooms'
          id='bathrooms'
          required
          className={inputStyling}
          onChange={e => {
            const valid = validateNumberOnlyInput(e.target.value, 2);

            if (valid) {
              handleChange(e);
            }
          }}
          value={profileInfo.bathrooms}
        />
      </label>
      <h2>Property Tags:</h2>
      <ul className='flex flex-row flex-wrap'>{displayTags}</ul>
    </div>
  );
};

export default AddPropertyProfileForm;
