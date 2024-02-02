import React from 'react';
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/2425628647836689951/2D8BCE816E28C48D09974F73AE7ADA79134B3D90/"
        NotFoundPage
        alt="404"
        style={{ maxWidth: '100%', height: 'auto' }}
      />{' '}
      Не повезло....
      <button onClick={() => navigate('/')} type="button">
        Вернуться
      </button>
    </div>
  );
}
