import React, { memo, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { FollowButton, UnFollowButton } from './../atoms/Atoms';
import { UserStatus, LoginStatus } from './../store/LoginState';

const Usercard = memo(({ id, name, following }) => {
  const userInfo = useRecoilValue(UserStatus);
  const [followingState, setFollowingState] = useState(following);
  const isLogin = useRecoilValue(LoginStatus);
  console.log(followingState);
  if (isLogin === false) {
    return <p>{name}</p>;
  }
  return (
    <>
      {name}
      <div>
        {followingState ? (
          <UnFollowButton id={id} changeFollow={setFollowingState} />
        ) : (
          <FollowButton id={id} changeFollow={setFollowingState} />
        )}
      </div>
    </>
  );
});

export default Usercard;
