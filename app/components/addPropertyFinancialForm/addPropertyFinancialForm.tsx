import { PropertyFinancials } from 'dashboard/properties/add-property/page';
import React from 'react';
import { SectionName } from 'dashboard/properties/add-property/page';
import validateCurrencyInput from 'validationFunctions/validateCurrencyInput';
import validateDateInput from 'validationFunctions/validateDateInput';
import validateSelectInput from 'validationFunctions/validateSelectInput';
import getCurrencyDisplayValue from 'helpers/getCurrencyDisplayValue';

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
  const containerStyling =
    'flex mt-2 outline-none w-full bg-slate-100 rounded p-2 focus-within:border-b-2 focus-within:border-orange-300';
  const inputStyling = 'bg-slate-100 ml-2 grow outline-none';

  return (
    <div className='flex flex-col h-5/6 overflow-y-scroll mb-6 px-4'>
      <label htmlFor='purchasePrice' className='mb-10'>
        <span className='text-red-400 inline block'>*</span>Purchase Price:
        <div className={containerStyling}>
          <span>£</span>
          <input
            type='text'
            name='purchasePrice'
            id='purchasePrice'
            className={inputStyling}
            required
            onChange={e => {
              const noCommaValue: string = e.target.value.split(',').join('');
              const valid: boolean = validateCurrencyInput(noCommaValue);
              e.target.value = noCommaValue;

              if (valid) {
                handleChange(e, 'financial');
              }
            }}
            value={getCurrencyDisplayValue(financialInfo.purchasePrice)}
          />
        </div>
      </label>
      <label htmlFor='purchaseDate' className='mb-10'>
        <span className='text-red-400'>*</span>Purchase Date:
        <br />
        <input
          type='date'
          name='purchaseDate'
          id='purchaseDate'
          required
          className='mt-2 outline-none w-full bg-slate-100 rounded py-2 focus:border-b-2 focus:border-orange-300'
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
        Purchase Fees:
        <div className={containerStyling}>
          <span>£</span>
          <input
            type='text'
            name='purchaseFees'
            id='purchaseFees'
            className={inputStyling}
            onChange={e => {
              const noCommaValue: string = e.target.value.split(',').join('');
              const valid: boolean = validateCurrencyInput(noCommaValue, 9);
              e.target.value = noCommaValue;

              if (valid) {
                handleChange(e, 'financial');
              }
            }}
            value={getCurrencyDisplayValue(financialInfo.purchaseFees)}
          />
        </div>
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
            Deposit Amount:
            <div className={containerStyling}>
              <span>£</span>
              <input
                type='text'
                name='depositAmount'
                id='depositAmount'
                className={inputStyling}
                onChange={e => {
                  const noCommaValue: string = e.target.value
                    .split(',')
                    .join('');
                  const valid: boolean = validateCurrencyInput(
                    noCommaValue,
                    11
                  );
                  e.target.value = noCommaValue;

                  if (valid) {
                    handleChange(e, 'financial');
                  }
                }}
                value={getCurrencyDisplayValue(financialInfo.depositAmount)}
              />
            </div>
          </label>
          <label htmlFor='mortgageAmount' className='mb-10'>
            Mortgage Amount:
            <div className={containerStyling}>
              <span>£</span>
              <input
                type='text'
                name='mortgageAmount'
                id='mortgageAmount'
                className={inputStyling}
                onChange={e => {
                  const noCommaValue: string = e.target.value
                    .split(',')
                    .join('');
                  const valid: boolean = validateCurrencyInput(noCommaValue);
                  e.target.value = noCommaValue;

                  if (valid) {
                    handleChange(e, 'financial');
                  }
                }}
                value={getCurrencyDisplayValue(financialInfo.mortgageAmount)}
              />
            </div>
          </label>
          <label htmlFor='mortgagePayment' className='mb-10'>
            <span className='text-red-400'>*</span>Mortgage Payment:
            <div className={containerStyling}>
              <span>£</span>
              <input
                type='text'
                name='mortgagePayment'
                id='mortgagePayment'
                required
                className={inputStyling}
                onChange={e => {
                  const noCommaValue: string = e.target.value
                    .split(',')
                    .join('');
                  const valid: boolean = validateCurrencyInput(
                    noCommaValue,
                    10
                  );
                  e.target.value = noCommaValue;

                  if (valid) {
                    handleChange(e, 'financial');
                  }
                }}
                value={getCurrencyDisplayValue(financialInfo.mortgagePayment)}
              />
            </div>
          </label>
        </>
      )}
    </div>
  );
};

export default AddPropertyFinancialForm;
