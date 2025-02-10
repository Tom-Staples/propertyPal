import { PropertyFinancials } from 'dashboard/properties/add-property/page';
import React from 'react';
import validateCurrencyInput from 'validationFunctions/validateCurrencyInput';
import validateDateInput from 'validationFunctions/validateDateInput';
import validateSelectInput from 'validationFunctions/validateSelectInput';
import getCurrencyDisplayValue from 'helpers/getCurrencyDisplayValue';

interface FinancialFormProps {
  financialInfo: PropertyFinancials;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  totalEqualsPart: boolean;
}

// Static variables
const containerStyling =
  'flex mt-2 outline-none w-full bg-slate-100 rounded p-2 focus-within:border-b-2 focus-within:border-orange-300';
const inputStyling = 'bg-slate-100 ml-2 grow outline-none';
const requiredElement: React.JSX.Element = (
  <span className='text-red-400'>*</span>
);

const AddPropertyFinancialForm = ({
  financialInfo,
  handleChange,
  totalEqualsPart
}: FinancialFormProps) => {
  return (
    <div className='flex flex-col h-5/6 overflow-y-scroll mb-6 px-4'>
      <label htmlFor='purchasePrice' className='mb-10'>
        {requiredElement}Purchase Price:
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
                handleChange(e);
              }
            }}
            value={getCurrencyDisplayValue(financialInfo.purchasePrice)}
          />
        </div>
      </label>
      <label htmlFor='purchaseDate' className='mb-10'>
        {requiredElement}Purchase Date:
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
              handleChange(e);
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
                handleChange(e);
              }
            }}
            value={getCurrencyDisplayValue(financialInfo.purchaseFees)}
          />
        </div>
      </label>
      <label htmlFor='purchaseMethod' className='mb-10'>
        {requiredElement}Purchase Method:
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
              handleChange(e);
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
            {requiredElement}Deposit Amount:
            <div className={containerStyling}>
              <span>£</span>
              <input
                type='text'
                name='depositAmount'
                id='depositAmount'
                required
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
                    handleChange(e);
                  }
                }}
                value={getCurrencyDisplayValue(financialInfo.depositAmount)}
              />
            </div>
          </label>
          <label htmlFor='mortgageAmount' className='mb-10'>
            {requiredElement}Mortgage Amount:
            <div className={containerStyling}>
              <span>£</span>
              <input
                type='text'
                name='mortgageAmount'
                id='mortgageAmount'
                required
                className={inputStyling}
                onChange={e => {
                  const noCommaValue: string = e.target.value
                    .split(',')
                    .join('');
                  const valid: boolean = validateCurrencyInput(noCommaValue);
                  e.target.value = noCommaValue;

                  if (valid) {
                    handleChange(e);
                  }
                }}
                value={getCurrencyDisplayValue(financialInfo.mortgageAmount)}
              />
            </div>
            {!totalEqualsPart && (
              <span className='text-red-400 text-xs'>
                Mortgage and deposit amounts do not equal purchase price
              </span>
            )}
          </label>
          <label htmlFor='mortgagePayment' className='mb-10'>
            {requiredElement}Mortgage Payment:
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
                    handleChange(e);
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
