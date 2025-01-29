import { PropertyFinancials } from 'dashboard/properties/add-property/page';
import React from 'react';
import { SectionName } from 'dashboard/properties/add-property/page';
import validateCurrencyInput from 'validationFunctions/validateCurrencyInput';
import validateDateInput from 'validationFunctions/validateDateInput';
import validateSelectInput from 'validationFunctions/validateSelectInput';

const AddPropertyFinancialForm = ({
  financialInfo,
  handleChange
}: {
  financialInfo: PropertyFinancials;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    sectionName: SectionName
  ) => void;
}) => {
  const inputStyling =
    'mt-2 outline-none w-full bg-slate-100 rounded py-2 focus:border-b-2 focus:border-orange-300';

  return (
    <div className='flex flex-col h-5/6 overflow-y-scroll mb-6 px-4'>
      <label htmlFor='purchasePrice' className='mb-10'>
        <span className='text-red-400'>*</span>Purchase Price {'(£)'}:
        <input
          type='text'
          name='purchasePrice'
          id='purchasePrice'
          required
          className={inputStyling}
          onChange={e => {
            const valid: boolean = validateCurrencyInput(e.target.value);

            if (valid) {
              handleChange(e, 'financial');
            }
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
          className={inputStyling}
          onChange={e => {
            const valid: boolean = validateDateInput(e.target.value);

            if (valid) {
              handleChange(e, 'financial');
            }
          }}
          value={financialInfo.purchaseDate.toLocaleString()}
        />
      </label>
      <label htmlFor='purchaseFees' className='mb-10'>
        Purchase Fees {'(£)'}:
        <input
          type='text'
          name='purchaseFees'
          id='purchaseFees'
          className={inputStyling}
          onChange={e => {
            const valid: boolean = validateCurrencyInput(e.target.value, 9);

            if (valid) {
              handleChange(e, 'financial');
            }
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
          className='mt-2 w-full py-2 outline-none rounded text-center bg-slate-100 focus:border-orange-300 focus:border-2'
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
              type='text'
              name='depositAmount'
              id='depositAmount'
              className={inputStyling}
              onChange={e => {
                const valid: boolean = validateCurrencyInput(
                  e.target.value,
                  11
                );

                if (valid) {
                  handleChange(e, 'financial');
                }
              }}
              value={financialInfo.depositAmount}
            />
          </label>
          <label htmlFor='mortgageAmount' className='mb-10'>
            Mortgage Amount {'(£)'}:
            <input
              type='text'
              name='mortgageAmount'
              id='mortgageAmount'
              className={inputStyling}
              onChange={e => {
                const valid: boolean = validateCurrencyInput(e.target.value);

                if (valid) {
                  handleChange(e, 'financial');
                }
              }}
              value={financialInfo.mortgageAmount}
            />
          </label>
          <label htmlFor='mortgagePayment' className='mb-10'>
            <span className='text-red-400'>*</span>Mortgage Payment {'(£)'}:
            <input
              type='text'
              name='mortgagePayment'
              id='mortgagePayment'
              required
              className={inputStyling}
              onChange={e => {
                const valid: boolean = validateCurrencyInput(
                  e.target.value,
                  10
                );

                if (valid) {
                  handleChange(e, 'financial');
                }
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
