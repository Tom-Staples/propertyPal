import React from 'react';
import { PropertyAddress } from 'dashboard/properties/add-property/page';
import { SectionName } from 'dashboard/properties/add-property/page';
import validateTextOnlyInput from 'validationFunctions/validateTextOnlyInput';
import validateTextNumInput from 'validationFunctions/validateTextNumInput';

const AddPropertyAddressForm = ({
  addressInfo,
  addressActive,
  handleChange,
  handleFocusState
}: {
  addressInfo: PropertyAddress<string>;
  addressActive: PropertyAddress<boolean>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionName: SectionName
  ) => void;
  handleFocusState: (
    e: React.ChangeEvent<HTMLInputElement>,
    active: boolean,
    sectionName: SectionName
  ) => void;
}) => {
  const inputStyling = 'mt-2 outline-none w-full bg-slate-50 border-b-2';
  const requiredDetails: string[] = ['nameOrNumber', 'city', 'postcode'];
  const displayNames: PropertyAddress<string> = {
    nameOrNumber: 'Property Name:',
    town: 'Town:',
    city: 'City:',
    county: 'County',
    postcode: 'Postcode:'
  };
  const requiredElement: React.JSX.Element = (
    <span className='text-red-400'>*</span>
  );
  const addressKeys = Object.keys(addressInfo) as Array<
    keyof PropertyAddress<string>
  >;
  const formDisplay: React.JSX.Element[] = addressKeys.map(detail => {
    const inputRequired: boolean = requiredDetails.includes(detail);
    return (
      <label htmlFor={detail} className='mb-10' key={detail}>
        {inputRequired && requiredElement}
        {displayNames[detail]}
        <input
          type='text'
          name={detail}
          id={detail}
          required={inputRequired}
          value={addressInfo[detail]}
          maxLength={detail === 'postcode' ? 10 : 50}
          onChange={e => {
            const { value }: { value: string } = e.target;
            let valid: boolean = false;
            if (detail === 'postcode' || detail === 'nameOrNumber') {
              valid = validateTextNumInput(value);
            } else {
              valid = validateTextOnlyInput(value);
            }

            if (valid) {
              handleChange(e, 'address');
            }
          }}
          onFocus={e => {
            handleFocusState(e, true, 'address');
          }}
          onBlur={e => {
            handleFocusState(e, false, 'address');
          }}
          className={`${
            addressActive[detail] && 'border-orange-300'
          } ${inputStyling}`}
        />
      </label>
    );
  });

  return (
    <div className='flex flex-col h-5/6 overflow-y-scroll mb-6 px-4'>
      {formDisplay}
    </div>
  );
};

export default AddPropertyAddressForm;
