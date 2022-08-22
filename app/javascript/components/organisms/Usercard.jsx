import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { FollowButton } from './../atoms/Atoms';
import { UserStatus } from './../store/LoginState';

const Usercard = memo(({ id, name }) => {
  const userInfo = useRecoilValue(UserStatus);
  return (
    <div>
      {userInfo.id != id ? <FollowButton id={id} /> : <></>}
      {name}
    </div>
  );
});

export default Usercard;
