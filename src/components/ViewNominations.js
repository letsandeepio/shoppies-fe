import React from 'react';
import { useParams } from 'react-router-dom';
import Logo from './Logo';

const ViewNominations = () => {
  let { id } = useParams();
  return (
    <div class="viewnominations">
      <Logo />
      {id}
    </div>
  );
};

export default ViewNominations;
