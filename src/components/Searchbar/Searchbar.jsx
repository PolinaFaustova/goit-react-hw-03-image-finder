// import PropTypes from 'prop-types';
import {SearchbarHeader, SearchForm, SearchFormBtn, SearchFormBtnLabel, Input} from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
    return (
        <>
    <SearchbarHeader>
    <SearchForm onSubmit={onSubmit}>
    <SearchFormBtn type="submit">
      <SearchFormBtnLabel>Search</SearchFormBtnLabel>
    </SearchFormBtn>

    <Input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
  </SearchbarHeader>
</>
    )
}