import {
  PropertyAddress,
  PropertyFinancials,
  PropertyProfile
} from 'dashboard/properties/add-property/page';

interface RequiredAddressNames {
  nameOrNumber: string;
  postcode: string;
  city: string;
}
interface RequiredFinancialNames {
  purchasePrice: string;
  purchaseDate: string;
  purchaseMethod: string;
  mortgagePayment?: string;
}
interface RequiredProfileNames {
  type: string;
  bedrooms: string;
  bathrooms: string;
}

export default function validateAddPropertyForm(
  addressDetails: PropertyAddress,
  financialDetails: PropertyFinancials,
  profileDetails: PropertyProfile
): boolean {
  const reqAddressNames: Array<keyof RequiredAddressNames> = [
    'nameOrNumber',
    'postcode',
    'city'
  ];
  const reqFinancialNames: Array<keyof RequiredFinancialNames> = [
    'purchasePrice',
    'purchaseDate',
    'purchaseMethod',
    'mortgagePayment'
  ];
  const reqProfileNames: Array<keyof RequiredProfileNames> = [
    'type',
    'bedrooms',
    'bathrooms'
  ];

  const incompleteAddressDetails: Array<keyof RequiredAddressNames> =
    reqAddressNames.filter(name => addressDetails[name] === '');
  const incompleteFinancialDetails: Array<keyof RequiredFinancialNames> =
    reqFinancialNames.filter(name => {
      if (name === 'purchaseMethod') {
        return financialDetails[name] === 'default';
      }
      if (
        name === 'mortgagePayment' &&
        financialDetails.purchaseMethod === 'mortgage'
      ) {
        return financialDetails[name] === '';
      }
      if (
        name === 'mortgagePayment' &&
        financialDetails.purchaseMethod === 'cash'
      ) {
        return false;
      }
      return financialDetails[name] === '';
    });
  const incompleteProfileDetails: Array<keyof RequiredProfileNames> =
    reqProfileNames.filter(name =>
      name === 'type'
        ? profileDetails[name] === 'default'
        : profileDetails[name] === ''
    );

  return (
    !incompleteAddressDetails.length &&
    !incompleteFinancialDetails.length &&
    !incompleteProfileDetails.length
  );
}
