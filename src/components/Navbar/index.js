import React from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            <DiCssdeck size='3rem' /> <Span>Mohamed Bahir Hussain</Span>
          </div>
        </NavLogo>
        <MobileIcon onClick={toggleMenu}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target='_blank'>
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href='#about' onClick={toggleMenu}>
              About
            </MobileLink>
            <MobileLink href='#skills' onClick={toggleMenu}>
              Skills
            </MobileLink>
            <MobileLink href='#experience' onClick={toggleMenu}>
              Experience
            </MobileLink>
            <MobileLink href='#projects' onClick={toggleMenu}>
              Projects
            </MobileLink>
            <MobileLink href='#education' onClick={toggleMenu}>
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: theme.primary1,
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.github}
              target='_blank'
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
