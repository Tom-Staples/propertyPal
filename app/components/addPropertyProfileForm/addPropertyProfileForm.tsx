'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {
  ProfileInputs,
  PropertyProfile,
  SectionName
} from 'dashboard/properties/add-property/page';

const AddPropertyProfileForm = ({
  profileInfo,
  profileActive,
  preview,
  handleChange,
  handleFocusState,
  handleTagClick,
  handleFileChange
}: {
  profileInfo: PropertyProfile;
  profileActive: ProfileInputs;
  preview: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    sectionName: SectionName
  ) => void;
  handleFocusState: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    active: boolean,
    sectionName: SectionName
  ) => void;
  handleTagClick: (tag: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const inputStyling = 'mt-2 outline-none w-full bg-slate-50 border-b-2';
  const tagList: React.JSX.Element[] = [
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
  ].map(tag => (
    <li
      key={tag}
      className={`rounded-lg p-2 mx-2 my-2 ${
        profileInfo.tags.includes(tag) ? 'bg-orange-300' : 'bg-slate-200'
      }`}
    >
      <button
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
      <label htmlFor='propertyPic' className='block text-center mb-10 mx-auto'>
        {preview ? (
          <>
            <Image
              src={preview}
              alt='Property Image Preview'
              width={400}
              height={400}
              className='aspect-square h-auto w-auto rounded-full'
            />
            <br />
            <span className='bg-orange-300 p-2 rounded-lg'>Change Photo</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faHouse} size='10x' className='mb-4' />
            <br />
            <span className='bg-orange-300 p-2 rounded-lg'>Upload Photo</span>
          </>
        )}
        <input
          name='propertyPic'
          id='propertyPic'
          accept='image/*'
          type='file'
          ref={fileUploadRef}
          onChange={handleFileChange}
          className='hidden'
        />
      </label>
      <label htmlFor='type' className='mb-10'>
        <span className='text-red-400'>*</span>Property Type:
        <br />
        <select
          name='type'
          id='type'
          value={profileInfo.type}
          onChange={e => {
            handleChange(e, 'profile');
          }}
          onFocus={e => {
            handleFocusState(e, true, 'profile');
          }}
          onBlur={e => {
            handleFocusState(e, false, 'profile');
          }}
          className={`${
            profileActive.type && 'border-orange-300 border-2'
          } mt-2 w-full outline-none p-2 rounded text-center shadow-lg bg-slate-50`}
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
        <span className='text-red-400'>*</span>Number of bedrooms:
        <input
          type='number'
          name='bedrooms'
          id='bedrooms'
          className={`${inputStyling} ${
            profileActive.bedrooms && 'border-orange-300'
          }`}
          onChange={e => {
            handleChange(e, 'profile');
          }}
          onFocus={e => {
            handleFocusState(e, true, 'profile');
          }}
          onBlur={e => {
            handleFocusState(e, false, 'profile');
          }}
          value={profileInfo.bedrooms}
        />
      </label>
      <label htmlFor='bathrooms' className='mb-10'>
        <span className='text-red-400'>*</span>Number of bathrooms:
        <input
          type='number'
          name='bathrooms'
          id='bathrooms'
          className={`${inputStyling} ${
            profileActive.bathrooms && 'border-orange-300'
          }`}
          onChange={e => {
            handleChange(e, 'profile');
          }}
          onFocus={e => {
            handleFocusState(e, true, 'profile');
          }}
          onBlur={e => {
            handleFocusState(e, false, 'profile');
          }}
          value={profileInfo.bathrooms}
        />
      </label>
      <h2>Property Tags:</h2>
      <ul className='flex flex-row flex-wrap'>{tagList}</ul>
    </div>
  );
};

export default AddPropertyProfileForm;
