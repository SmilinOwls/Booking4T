import {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    ArrowOne,
    ArrowTwo,
    ArrowThree,
    guideImg,
    weatherImg,
    customizationImg
    // ReviewOne,
    // ReviewTwo,
    // ReviewThree,
  } from "./HomeImg";

  const WorkData = [
    {
      img: StepOne,
      step: "1",
      content: "Choose Price Range",
      arrow: ArrowOne,
    },
    {
      img: StepTwo,
      step: "2",
      content: "Select Hotel",
      arrow: ArrowTwo,
    },
    {
      img: StepThree,
      step: "3",
      content: "Choose number of beds and guests",
      arrow: ArrowThree,
    },
    {
      img: StepFour,
      step: "4",
      content: "Check in & check out date",
    },
  ];

  const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Welcome to heaven on earth'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Arrive as guests, leave as friends'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Whisper your dreams to us.'
    },
]

  export {WorkData, servicesData}
