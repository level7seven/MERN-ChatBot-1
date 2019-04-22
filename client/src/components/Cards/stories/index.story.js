import React from 'react';
import { storiesOf } from '@storybook/react';

import Cards from '..';

const data = {
  value: [
    {
      title: 'First card',
      image: 'https://secure.i.telegraph.co.uk/multimedia/archive/03013/selfie02_3013424b.jpg',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer id ante odio. Suspendisse tempor dui quam, vitae
        venenatis ante consequat eget. Nullam felis diam, tincidunt
        quis congue a, pellentesque vitae ante.
      `,
      link: 'https://www.telegraph.co.uk/technology/news/11048695/Monkeys-ghosts-and-gods-cannot-own-copyright-says-US.html',
    },
    {
      title: 'Second card',
      image: 'https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/cc_BE6RJF_16x9.jpg',
      description: `
        Morbi vulputate felis ut risus convallis consectetur.
        Pellentesque non leo ligula. Pellentesque convallis,
        risus egestas aliquam venenatis, nibh sapien pharetra sem,
        nec lobortis velit lacus nec nisi. Suspendisse vel pulvinar magna.
      `,
      link: 'https://www.sciencemag.org/news/2017/02/monkeys-master-key-sign-self-awareness-recognizing-their-reflections',
    },
    {
      title: 'Third card',
      image: 'https://cdn.images.express.co.uk/img/dynamic/1/590x/ghost-696974.jpg',
      description: `
        Phasellus pellentesque nisi eu ex tempor sodales.
        In molestie suscipit magna, lobortis venenatis purus
        dignissim non. Maecenas at quam elit. Nam malesuada,
        urna sed pretium rhoncus, dui magna cursus felis, sit amet
        vulputate odio ante id diam.
      `,
      link: 'https://www.express.co.uk/news/uk/696974/Ghost-rude-monkey-shocks-visitors-stately-home-Dorset',
    },
  ],
};

storiesOf('Cards', module)
  .add('No width limit', () => (
    <div style={{ margin: '25px' }}>
      <Cards data={data} />
    </div>
  ))
  .add('Real life example', () => (
    <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
      <Cards data={data} />
    </div>
  ));
