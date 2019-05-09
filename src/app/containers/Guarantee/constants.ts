const imgGuaranteeWork1 = require('app/assets/images/hgw1.jpg');
const imgGuaranteeWork2 = require('app/assets/images/hgw2.jpg');
const imgGuaranteeWork3 = require( 'app/assets/images/hgw3.jpg');

export const bannerInfo = {
  title: 'Lose weight or get your money back.',
  description1: 'At Persona Doctors, we stand behind our product and process with a promise.',
  description2: ' We’ll work with you on the following to achieve weight loss success:',
  contents: [
    'Setting measurable, time-bound goals',
    'Tracking progress toward your goals',
    'Getting results or your money back'
  ]
};

export const guaranteeWorks = [
  {
    title: 'Commitment to your success:',
    image: imgGuaranteeWork1,
    description: 'Our experienced team will explore every treatment option available in support of you and your goals.'
  },
  {
    title: 'Hassle-free cancellation:',
    image: imgGuaranteeWork2,
    description: 'Your satisfaction is of utmost importance to us, so we honor program cancellation at any time.'
  },
  {
    title: 'Quick, easy 100% refund:',
    image: imgGuaranteeWork3,
    description: 'Unlike other programs, we’ll refund all of your treatment costs, including testing fees, if you haven’t lost weight within the first 30 days.'
  }
];

export const refundProcesses = [
  {
    title:  'Schedule a Results Review Appointment',
    leftTitle: 'Identify Problem Issues',
    contents: [
      'Book a free results review appointment',
      'Measure and test your 30-day results',
      'Compare the results with initial measurements'
    ]
  },
  {
    title: 'Demonstrate an Honest Effort',
    leftTitle: 'Verify Nothing Worked',
    contents: [
      'Consult with our experts to analyze your results',
      'Verify nutritional and medical advice compliance',
      'Ensure all treatment options were exhausted'
    ]
  },
  {
    title: 'Process Your Refund Request, or try again',
    leftTitle: 'Get Your Money Back',
    contents: [
      'Choose to try again and reset the guarantee, or',
      'Choose to submit form and process your refund',
      'Refunds are issued within 7 days of request'
    ]
  }
];
