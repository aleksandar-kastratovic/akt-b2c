import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  input {
    border: none;
    border-bottom: 1px solid var(--primary-black);
    width: fit-content;
    padding: 0.25rem 2rem 0rem 0.5rem;
    width: 240px;
  }
  input,
  input::placeholder {
    color: var(--primary-black);
    font-size: 0.85rem;
  }
  img {
    margin-inline-start: 1rem;
    height: 30px;
    cursor: pointer;
  }
  @media (max-width: 991.98px) {
    display: none;
  }
`;

const HeaderInput = () => {
  // const [showClearIcon, setShowClearIcon] = useState('none');
  // const [searchField, setSetSearchField] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  
  const { push: navigate } = useRouter()

  // const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?search=${searchTerm}`);
    setSearchTerm('');
  };

  const handleClick = () => {
    setSetSearchField('');
    setShowClearIcon('none');
  };

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <input
          name="search"
          placeholder="Unesite pojam za pretragu..."
          id="search"
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          // onKeyPress={(e) => {
          //   if (e.key === 'Enter')
          //     router.push(
          //       `/search/${searchField.length !== 0 ? searchField : 'empty'}`
          //     );
          // }}
        />
        <img src="/images/icons/search.png" alt="search"  onClick={handleSearch}/>
      </form>
    </Container>
  );
};

export default HeaderInput;
