import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.FAQ.titleText} imgUrl={settings.FAQ.imgUrl} />
    <p>{settings.FAQ.content}</p>
  </Container>
);

export default FAQ;