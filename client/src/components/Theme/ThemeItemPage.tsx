import React from 'react';
// import './styles/heroes.scss';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import type { RootState } from '../../redux/store';
import type { Theme } from './type';

function HeroItemPage({ theme }: { theme: Theme }): JSX.Element {
  
  // const { themeId } = useParams();
  // const themes = useSelector((store: RootState) => store.themes);
  
  // const currentTheme = themeId && themes.find((theme) => theme.id === +themeId);

  return  (
    <div className="hero-item-page__item">
      <h2 className="hero-item-page__item--name">{theme.name}</h2>
    </div>
  ) 
}

export default HeroItemPage;
