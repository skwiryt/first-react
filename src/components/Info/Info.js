import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.titleText} imgUrl={settings.info.imgUrl} />
    <p>{settings.info.content}</p>
  </Container>
);

export default Info;