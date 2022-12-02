import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled('div')`
  cursor: pointer;
  height: 100%;
  font-size: 0.875rem;
`;

const DropDownContainer = styled('div')`
  width: 200px;
  padding: 0.5rem 0;
  height: 100%;
  margin: 0 auto;
  position: relative;
  border: 1px solid var(--lightGray);
`;

const DropDownHeader = styled('div')`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: 400;
  text-align: left;
  color: var(--priamry-black);
  background: #ffffff;
`;

const DropDownListContainer = styled('div')``;

const DropDownList = styled('ul')`
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  border: 1px solid var(--lightMedGray);
  z-index: 10;
  width: 100%;
  top: 100%;
  position: absolute;
  background: #ffffff;
  color: var(--primary-black);
  font-weight: 400;
  left: 0;
  border: 1px solid var(--lightGray);
`;

const ListItem = styled('li')`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid var(--lightMedGray);
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--primary-black);
    color: var(--primary-white);
    transition: all 0.2s ease-in-out;
  }
`;

const TextSpan = styled.span`
  text-overflow: ellipsis;
  text-align: center;
  width: 100%;
  overflow: hidden;
  padding: 0 0.5rem;
  display: block;
  white-space: nowrap;
  img {
    height: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }
`;
const CustomSelect2 = ({ options, def }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          <TextSpan>
            {selectedOption || <span>{def}</span>}
            <img src="/images/icons/arrow-down.png" width="20px" />
          </TextSpan>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {/* {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))} */}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};
export default CustomSelect2;
