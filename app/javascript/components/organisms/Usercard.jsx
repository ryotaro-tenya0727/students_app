import React, { memo, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { FollowButton, UnFollowButton } from './../atoms/Atoms';
import { UserStatus } from './../store/LoginState';

const Usercard = memo(({ id, name, following }) => {
  const userInfo = useRecoilValue(UserStatus);
  const [followingState, setFollowingState] = useState(following);
  return (
    <>
      {name}
      <div>
        {userInfo.id != id && userInfo.id != undefined ? (
          followingState ? (
            <UnFollowButton id={id} changeFollow={setFollowingState} />
          ) : (
            <FollowButton id={id} changeFollow={setFollowingState} />
          )
        ) : (
          <></>
        )}
      </div>
    </>
  );
});

export default Usercard;
