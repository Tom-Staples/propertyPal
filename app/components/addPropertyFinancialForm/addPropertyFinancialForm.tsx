import {
  FinancialInputs,
  PropertyFinancials
} from 'dashboard/properties/add-property/page';
import React from 'react';
import { SectionName } from 'dashboard/properties/add-property/page';
import validateCurrencyInput from 'validationFunctions/validateCurrencyInput';
import validateDateInput from 'validationFunctions/validateDateInput';
import validateSelectInput from 'validationFunctions/validateSelectInput';

const AddPropertyFinancialForm = ({
  financialInfo,
  financialActive,
  handleChange,
  handleFocusState
}: {
  financialInfo: PropertyFinancials;
  financialActive: FinancialInputs;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    sectionName: SectionName
  ) => void;
  handleFocusState: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    active: boolean,
    sectionName: SectionName
  ) => void;
}) => {
  const inputStyling = 'mt-2 outline-none w-full bg-slate-50 border-b-2';

  return (
    <div className='flex flex-col h-5/6 overflow-y-scroll mb-6 px-4'>
      <label htmlFor='purchasePrice' className='mb-10'>
        <span className='text-red-400'>*</span>Purchase Price {'(£)'}:
        <input
          type='text'
          name='purchasePrice'
          id='purchasePrice'
          required
          maxLength={12}
          className={`${inputStyling} ${
            financialActive.purchasePrice && 'border-orange-300'
          }`}
          onChange={e => {
            const valid: boolean = validateCurrencyInput(e.target.value);

            if (valid) {
              handleChange(e, 'financial');
            }
          }}
          onFocus={e => {
            handleFocusState(e, true, 'financial');
          }}
          onBlur={e => {
            handleFocusState(e, false, 'financial');
          }}
          value={financialInfo.purchasePrice}
        />
      </label>
      <label htmlFor='purchaseDate' className='mb-10'>
        <span className='text-red-400'>*</span>Purchase Date:
        <br />
        <input
          type='date'
          name='purchaseDate'
          id='purchaseDate'
          required
          className={`${inputStyling} ${
            financialActive.purchaseDate && 'border-orange-300'
          }`}
          onChange={e => {
            const valid: boolean = validateDateInput(e.target.value);

            if (valid) {
              handleChange(e, 'financial');
            }
          }}
          onFocus={e => {
            handleFocusState(e, true, 'financial');
          }}
          onBlur={e => {
            handleFocusState(e, false, 'financial');
          }}
          value={financialInfo.purchaseDate.toLocaleString()}
        />
      </label>
      <label htmlFor='purchaseFees' className='mb-10'>
        Purchase Fees {'(£)'}:
        <input
          type='number'
          name='purchaseFees'
          id='purchaseFees'
          className={`${inputStyling} ${
            financialActive.purchaseFees && 'border-orange-300'
          }`}
          onChange={e => {
            const valid: boolean = validateCurrencyInput(e.target.value);

            if (valid) {
              handleChange(e, 'financial');
            }
          }}
          onFocus={e => {
            handleFocusState(e, true, 'financial');
          }}
          onBlur={e => {
            handleFocusState(e, false, 'financial');
          }}
          value={financialInfo.purchaseFees}
        />
      </label>
      <label htmlFor='purchaseMethod' className='mb-10'>
        <span className='text-red-400'>*</span>Purchase Method:
        <br />
        <select
          name='purchaseMethod'
          id='purchaseMethod'
          required
          value={financialInfo.purchaseMethod}
          onChange={e => {
            const valid: boolean = validateSelectInput(e.target.value, [
              'default',
              'cash',
              'mortgage'
            ]);

            if (valid) {
              handleChange(e, 'financial');
            }
          }}
          onFocus={e => {
            handleFocusState(e, true, 'financial');
          }}
          onBlur={e => {
            handleFocusState(e, false, 'financial');
          }}
          className={`${
            financialActive.purchaseMethod && 'border-orange-300 border-2'
          } mt-2 w-full p-2 outline-none rounded text-center shadow-lg shadow-orange-300 bg-slate-50`}
        >
          <option value='default'>Please Select</option>
          <option value='cash'>Cash</option>
          <option value='mortgage'>Mortgage</option>
        </select>
      </label>
      {financialInfo.purchaseMethod === 'mortgage' && (
        <>
          <label htmlFor='depositAmount' className='mb-10'>
            Deposit Amount {'(£)'}:
            <input
              type='number'
              name='depositAmount'
              id='depositAmount'
              className={`${inputStyling} ${
                financialActive.depositAmount && 'border-orange-300'
              }`}
              onChange={e => {
                const valid: boolean = validateCurrencyInput(e.target.value);

                if (valid) {
                  handleChange(e, 'financial');
                }
              }}
              onFocus={e => {
                handleFocusState(e, true, 'financial');
              }}
              onBlur={e => {
                handleFocusState(e, false, 'financial');
              }}
              value={financialInfo.depositAmount}
            />
          </label>
          <label htmlFor='mortgageAmount' className='mb-10'>
            Mortgage Amount {'(£)'}:
            <input
              type='number'
              name='mortgageAmount'
              id='mortgageAmount'
              className={`${inputStyling} ${
                financialActive.mortgageAmount && 'border-orange-300'
              }`}
              onChange={e => {
                const valid: boolean = validateCurrencyInput(e.target.value);

                if (valid) {
                  handleChange(e, 'financial');
                }
              }}
              onFocus={e => {
                handleFocusState(e, true, 'financial');
              }}
              onBlur={e => {
                handleFocusState(e, false, 'financial');
              }}
              value={financialInfo.mortgageAmount}
            />
          </label>
          <label htmlFor='mortgagePayment' className='mb-10'>
            <span className='text-red-400'>*</span>Mortgage Payment {'(£)'}:
            <input
              type='number'
              name='mortgagePayment'
              id='mortgagePayment'
              required
              className={`${inputStyling} ${
                financialActive.mortgagePayment && 'border-orange-300'
              }`}
              onChange={e => {
                const valid: boolean = validateCurrencyInput(e.target.value);

                if (valid) {
                  handleChange(e, 'financial');
                }
              }}
              onFocus={e => {
                handleFocusState(e, true, 'financial');
              }}
              onBlur={e => {
                handleFocusState(e, false, 'financial');
              }}
              value={financialInfo.mortgagePayment}
            />
          </label>
        </>
      )}
    </div>
  );
};

export default AddPropertyFinancialForm;
