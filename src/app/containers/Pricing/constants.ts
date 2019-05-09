const imgCancellation = require('app/assets/images/cancellation-policy-bg.jpg');
const imgNoPenalty = require('app/assets/images/no-plan-bg.jpg');
const imgFsa = require('app/assets/images/fsa.gif');
const imgTax = require('app/assets/images/tax.gif');

export const bannerInfo = {
  title: 'Our Pricing',
  contents: [
    'Affordable, All-Inclusive Pricing',
    'No Long-Term Contracts',
    'Direct Insurance Reimbursement',
    '100% Money-Back Guarantee'
  ]
};

export const contractPlans = [
  {
    title1: 'No-Penalty',
    title2: 'Cycle Changes',
    backImage: imgNoPenalty,
    contents: [
      'Decide when to scale up or down between cycles based on your needs',
      'Notify Persona Doctors before your next cycle shipment',
      'Discuss medication changes with your doctor'
    ]
  },
  {
    title1: 'Simple',
    title2: 'Cancellation Policy',
    backImage: imgCancellation,
    contents: [
      'Discuss with your doctor the reasons for cancellation',
      'Downgrade to Maintain Package for one 12-week cycle',
      '"Wean off" medications slowly to prevent weight gain'
    ]
  }
];

export const medicalExpenses = [
  {
    imgExpense: imgFsa,
    title1: 'We Accept',
    title2: 'FSA Debit Cards',
    contents: [
      'The costs of our weight loss program is prescribed by licensed physicians',
      'Obesity/overweight diagnosis (30 lbs. or more) is a reimbursable FSA/HRA expense',
      'Health plan administrators consider our program a qualified, reimbursable expense'
    ],
    subtitle: ''
  },
  {
    imgExpense: imgTax,
    title1: 'Persona Doctors is a',
    title2: 'Tax-Deductible Medical Expense',
    contents: [
      'Any uncompensated fees that are not reimbursed by your insurance can be claimed',
      'The IRS allows deduction of weight loss costs for the treatment of diagnosed obesity',
      'Under the tax code, physician-prescribed therapies are deductible medical expenses'
    ],
    subtitle: 'Please consult your tax advisor'
  }
];

export const cureCycleHeader = [
  {
    week: 2,
    price: 139.99
  },
  {
    week: 4,
    price: 114.99
  },
  {
    week: 6,
    price: 89.99
  }
];

export const cureCycles = [
  [
    {
      contents: [
        'Pharmacy Delivery**'
      ],
      strong: 'Pharmacy Delivery**'
    },
    {
      contents: [
        '1 Every 2 Weeks'
      ],
      strong: '2'
    },
    {
      contents: [
        '1 Every 4 Weeks'
      ],
      strong: '4'
    },
    {
      contents: [
        '1 Every 6 Weeks'
      ],
      strong: '6'
    }
  ],
  [
    {
      contents: [
        'In-Clinic/Online Rx Changes Doctor Visits'
      ],
      strong: 'In-Clinic/Online Rx Changes Doctor Visits'
    },
    {
      contents: [
        '1 Every 2 Weeks'
      ],
      strong: '2'
    },
    {
      contents: [
        '1 Every 4 Weeks'
      ],
      strong: '4'
    },
    {
      contents: [
        '1 Every 6 Weeks'
      ],
      strong: '6'
    }
  ],
  [
    {
      contents: [
        'Metabolic/Weight Loss Rx Medications',
        '- Appetite Suppressants',
        '- Sugar Controllers',
        '- Craving Reducers',
        '- Thyroid Optimization',
        '- Metabolic Enhancers'
      ],
      strong: 'Metabolic/Weight Loss Rx Medications'
    },
    {
      contents: [
        'included/as required up to 5 meds per cycle'
      ],
      strong: '5 meds'
    },
    {
      contents: [
        'included/as required up to 4 meds per cycle'
      ],
      strong: '4 meds'
    },
    {
      contents: [
        'included/as required up to 3 meds per cycle'
      ],
      strong: '3 meds'
    }
  ],
  [
    {
      contents: [
        'Diet Supplementation and Helper Medications',
        '- Energy Boosters',
        '- Fat Burners',
        '- Digestive Enzymes',
        '- Detoxifiers and Cleansers',
        '- Fluid Reducers',
        '- Sleep and Mood Enhancers',
        '- Whole-Body Supplements'
      ],
      strong: 'Diet Supplementation and Helper Medications'
    },
    {
      contents: [
        'included/as required up to 5 meds per cycle'
      ],
      strong: '5 meds'
    },
    {
      contents: [
        'included/as required up to 4 meds per cycle'
      ],
      strong: '4 meds'
    },
    {
      contents: [
        'included/as required up to 3 meds per cycle'
      ],
      strong: '3 meds'
    }
  ],
  [
    {
      contents: [
        'Energy/Fat-Burn Injections'
      ],
      strong: 'Energy/Fat-Burn Injections'
    },
    {
      contents: [
        '6 shots per cycle'
      ],
      strong: '6 shots'
    },
    {
      contents: [
        '4 shots per cycle'
      ],
      strong: '4 shots'
    },
    {
      contents: [
        '3 shots per cycle'
      ],
      strong: '	3 shots'
    }
  ],
  [
    {
      contents: [
        '3D Body Progress Scans'
      ],
      strong: '3D Body Progress Scans'
    },
    {
      contents: [
        '1 Every 4 Weeks'
      ],
      strong: '4 Weeks'
    },
    {
      contents: [
        '1 Every 8 Weeks'
      ],
      strong: '8 Weeks'
    },
    {
      contents: [
        '1 Every 52 Weeks'
      ],
      strong: '52 Weeks'
    }
  ],
  [
    {
      contents: [
        'Diagnostic Labs Retesting'
      ],
      strong: 'Diagnostic Labs Retesting'
    },
    {
      contents: [
        '1 Every 12 Weeks'
      ],
      strong: '12 Weeks'
    },
    {
      contents: [
        '1 Every 26 Weeks'
      ],
      strong: '26 Weeks'
    },
    {
      contents: [
        '1 Every 12 Weeks'
      ],
      strong: '12 Weeks'
    }
  ],
  [
    {
      contents: [
        'Metabolic Rate Retesting'
      ],
      strong: 'Metabolic Rate Retesting'
    },
    {
      contents: [
        '1 Every 26 Weeks'
      ],
      strong: '26 Weeks'
    },
    {
      contents: [
        '1 Every 52 Weeks'
      ],
      strong: '52 Weeks'
    },
    {
      contents: [
        '	1 Every 65 Weeks'
      ],
      strong: '65 Weeks'
    }
  ]
];

export const medicalTesting = [
  '3D Body Imaging Scan',
  'Body Composition Measurements',
  'EKG – Cardiovascular Test',
  'Metabolism Speed Test',
  '“Blood Chemistry Imbalance” Labs',
  '“Metabolic-Imbalance” Blood Labs'
];

export const programStart = [
  'Gender-Specific Metabolic Analysis',
  'Age-Based Metabolic Analysis',
  'Lifestyle, Stress and Existing Conditions Analysis',
  'Nutritional Evaluation and Analysis',
  'Behavior Modification Evaluation and Analysis',
  'Comprehensive Physical Exam and Analysis'
];
