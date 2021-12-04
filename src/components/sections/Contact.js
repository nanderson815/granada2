import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import Input from '@common/Input';

const Contact = () => (
  <Section id="contact">
    <Container>
      <h1>Let's Get In Touch</h1>
      <h3 style={{ marginBottom: 40 }}>
        Fill out this form and our team will contact you to schedule a free
        15 minute consultation.
      </h3>
      {/* <Form
        onSubmit={e => {
          e.preventDefault();
          const email = {};
          [...e.target.elements].forEach(ele => {
            if (ele.type !== 'submit') {
              email[ele.name] = ele.value;
            }
          });
          axios
            .post('/.netlify/functions/send-email', email)
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });
        }}
      > */}
      <Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <FormGrid>
          <Input label="First Name" name="firstName" required />
          <Input label="Last Name" name="lastName" required />
          <Input label="Email" name="email" required />
          <Input label="Company" name="company" required />
          <Input label="Job Title" name="jobTitle" required />
          <Input
            label="Project Budget"
            name="projectBudget"
            displayType="select"
          >
            <option disabled selected value="none">
              -- select an option --
            </option>
            <option value="hourly">Hourly (rate varies)</option>
            <option value="Less than $5,000">Less than $5,000</option>
            <option value="$5,000 to $10,000">$5,000 to $10,000</option>
            <option value="Over $10,000">Over $10,000</option>
          </Input>
          <FullWidth>
            <Input
              label="What can we help you make?"
              name="message"
              displayType="textArea"
              required
            />
          </FullWidth>
          <br />
          <Button>Submit &nbsp;&#x2794;</Button>
        </FormGrid>
      </Form>
    </Container>
  </Section>
);

const Form = styled.form`
  width: 100%;
`;

const FullWidth = styled.div`
  @media (min-width: ${props => props.theme.screen.sm}) {
    grid-column: 1 / span 2;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: min-content;
  grid-gap: 10px;
  justify-content: center;
  margin-top: 20px;
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
    width: 100%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(2, 50%);
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: repeat(1, 100%);
  }
`;

const Button = styled.button`
  display: block;
  text-align: right;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }

  :focus-visible {
    border: 1px solid ${props => props.theme.color.black.regular};
    border-radius: 5px;
  }
`;

export default Contact;
