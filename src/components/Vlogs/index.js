import React from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './VlogsStyles'; // Assuming VlogsStyle is created similar to BlogsStyle
import VlogCard from '../Cards/VlogCard'; // Assuming you have a VlogCard component similar to BlogCard
import { vlogs } from '../../data/constants'; // Assuming you have vlogs data in constants

const Vlogs = ({ openVlogModal, setOpenVlogModal }) => {
  return (
    <Container id="vlogs">
      <Wrapper>
        <Title>Vlogs</Title>
        <Desc>
          I have created a series of vlogs discussing various topics, from development insights to tech innovations. Here are some of my vlogs.
        </Desc>
        <CardContainer>
          {vlogs.map((vlog, index) => (
            <VlogCard
              key={index}
              vlog={vlog}
              openVlogModal={openVlogModal}
              setOpenVlogModal={setOpenVlogModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Vlogs;
