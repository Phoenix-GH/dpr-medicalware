import dateUnit from 'app/constants/dateUnit';
import schedules from 'app/constants/schedules';
const imgMedicalWeightLoss1 = require('app/assets/images/medical-weight-loss1.png');
const imgMedicalWeightLoss2 = require('app/assets/images/medical-weight-loss2.png');
const imgMedicalWeightLoss3 = require ('app/assets/images/medical-weight-loss3.png');
const imgMedicalWeightLoss4 = require('app/assets/images/medical-weight-loss4.png');
const imgWeDifference1 = require('app/assets/images/how-different1.png');
const imgWeDifference2 = require('app/assets/images/how-different2.png');
const imgWeDifference3 = require('app/assets/images/how-different3.png');

export const bannerInfo = {
  title: 'Medical Weight Loss',
  contents: [
    'Powerful Prescription Medications',
    'Safe, Easy to Follow Programs',
    'Maintain Rapid, Lasting Results',
    'Aliquam lacus odio, convallis ut diam'
  ]
};

export const lossProcesses = [
  {
    image: imgMedicalWeightLoss3,
    title: 'Experienced Medical Doctors',
    contents: [
      'Advanced medical testing',
      'Proven weight-loss cycles',
      'Over 20 years in practice',
    ]
  },
  {
    image: imgMedicalWeightLoss2,
    title: 'Customized Potent Medications',
    contents: [
      'Fat-Burning Injections',
      'Controls appetite/cravings',
      'FDA-approved for safety'
    ]
  },
  {
    image: imgMedicalWeightLoss1,
    title: 'Transform Your Body',
    contents: [
      'Reduce fat mass',
      'Increase Metabolic Rate',
      'Higher Energy Levels'
    ]
  },
  {
    image: imgMedicalWeightLoss4,
    title: 'Maintain Your Results',
    contents: [
      'Constant monitoring cycles',
      'Eat your own real food',
      'Affordable at-home therapies'
    ]
  }
];

export const workflows = [
  {
    title: 'ENROLL',
    contents:
    [
      {
        subTitle: 'We use advanced medical testing to:',
        contents: [
          'Pinpoint problem areas',
          'Set initial target goals',
          'Ensure safe & rapid results',
        ]
      }
    ],
    price: 249.99,
    priceSchedule: 'one-time fee',
    period: 7,
    periodSchedule: '2 visits within',
    periodDateUnit: 'days',
    bottomTitle: 'Qualifies for insurance reimbursement',
  },
  {
    title: 'REPROGRAM',
    contents:
    [
      {
        subTitle: 'We prescribe FDA-approved medications in targeted cycles to:',
        contents: [
          'Reduce cravings and appetite',
          'Increase metabolism and burn fat',
          'Boost energy and regulate nutrients',
        ]
      },
      {
        subTitle: 'If you hit a plateau, we will:',
        contents: [
          'Retest & reanalyze your body',
          'Change medications & dosages',
          'Recharge your metabolic cycles',
        ]
      }
    ],
    price: 249.99,
    priceEnd: 139.99,
    priceSchedule: 'per week*',
    period: 6,
    periodSchedule: 'Typically',
    periodDateUnit: 'months',
    bottomTitle: '*Flexible 2-week, 4-week & 6-week treatment cycless',
  },
  {
    title: 'MAINTAIN',
    contents:
    [
      {
        subTitle: 'We keep the weight off by:',
        contents: [
          'Lower medications doses',
          'Less frequent visits',
          'Long-term monitoring',
        ]
      }
    ],
    price: 34.99,
    priceSchedule: 'per week',
    period: 6,
    periodSchedule: schedules.after,
    periodDateUnit: dateUnit.months,
    bottomTitle: 'Affordable 12-week maintenance cycles',
  }
];

export const differences = [
  {
    image: imgWeDifference1,
    title: 'Guaranteed results or your money back',
  },
  {
    image: imgWeDifference2,
    title: 'Most advanced technology',
  },
  {
    image: imgWeDifference3,
    title: 'Patent-pending metabolic reprogramming',
  }
];
