import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

//import {Col} from 'react-bootstrap';
  
const Footer = () => {
  return (
    <div className="footer">
    <Box>
      <Container>
        <Row>
        <Column>
            <FooterLink href="#">5th Floor, A-118, Secotr 136, Noida, Uttar Pradesh</FooterLink>
            <FooterLink href="#">feedback@geeksforgeeks.org</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
          </Column>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Copyright Policy</FooterLink>
          </Column>
          <Column>
            <Heading>Learn</Heading>
            <FooterLink href="#">Algorithms</FooterLink>
            <FooterLink href="#">Data Structures</FooterLink>
            <FooterLink href="#">Languages</FooterLink>
            <FooterLink href="#">CS Subjects</FooterLink>
            <FooterLink href="#">Video Tutorials</FooterLink>
          </Column>
          <Column>
            <Heading>Pracitce</Heading>
            <FooterLink href="#">Courses</FooterLink>
            <FooterLink href="#">Company-wise</FooterLink>
            <FooterLink href="#">Topic-wise</FooterLink>
            <FooterLink href="#">How to begin?</FooterLink>
          </Column>
          <Column>
          <Heading>Contribute</Heading>
            <FooterLink href="#">Write an Article</FooterLink>
            <FooterLink href="#">Write Interview Experience</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Videos</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    </div>
  );
};
export default Footer;