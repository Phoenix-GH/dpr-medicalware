const dateUnit = require('app/constants/dateUnit');
const schedules = require('app/constants/schedules');
const imgDifferent1 = require('app/assets/images/how-different1.png');
const imgDifferent2 = require( 'app/assets/images/how-different2.png');
const imgDifferent3 = require('app/assets/images/how-different3.png');

export const differences = [
  {
    image: imgDifferent1,
    text: 'Guaranteed results or your money back'
  },
  {
    image: imgDifferent2,
    text: 'Most advanced technology'
  },
  {
    image: imgDifferent3,
    text: 'Patent-pending metabolic reprogramming'
  }
];

export const bannerInfo = {
  title: 'Who We Are',
  description1: 'Persona Doctors is a medical weight loss program carried out by real physicians in ',
  description2: 'five real medical facilities across the Washington, D.C. area.',
  contents: [
    'Experience: 20 years in practice and more than 25,000 success stories',
    'Expertise: Specialized group of licensed medical professionals',
    'Innovation: Commitment to using the latest technology',
    'Excellence: Devotion to providing quality patient care',
  ]
}

export const workSchedules = [
  {
    title: 'ENROLL',
    contents:
    [
      {
        subTitle: 'Get started',
        contents: [
          'Set goals and pinpoint problem areas',
          'Advanced medical testing and analysis'
        ]
      }
    ],
    price: 175,
    priceDateUnit: schedules.oneTime,
    period: 6,
    periodSchedule: schedules.around,
    periodDateUnit: dateUnit.days
  },
  {
    title: 'REPROGRAM',
    contents:
    [
      {
        subTitle: 'Burn fat more efficiently',
        contents: [
          'Targeted medications for rapid weight loss',
          'Retest and adjust medications as necessary'
        ]
      }
    ],
    price: 12.5,
    priceSchedule: schedules.oneTime,
    priceDateUnit: schedules.perDay,
    period: 6,
    periodSchedule: schedules.around,
    periodDateUnit: dateUnit.months
  },
  {
    title: 'MAINTAIN',
    contents:
    [
      {
        subTitle: 'Keep the weight off—guaranteed',
        contents: [
          'Fewer medications and office visits',
          'Lasting weight-loss success'
        ]
      }
    ],
    price: 4.5,
    priceSchedule: schedules.starts,
    priceDateUnit: schedules.perDay,
    period: 6,
    periodSchedule: schedules.after,
    periodDateUnit: dateUnit.months
  }
];
