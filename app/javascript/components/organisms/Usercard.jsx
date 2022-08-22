import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { FollowButton } from './../atoms/Atoms';
import { UserStatus } from './../store/LoginState';

const Usercard = memo(({ id, name, following }) => {
  const userInfo = useRecoilValue(UserStatus);
  return (
    <div>
      {userInfo.id != id && userInfo.id != undefined ? (
        following ? (
          <>アンフォロー</>
        ) : (
          <FollowButton id={id} />
        )
      ) : (
        <></>
      )}
      {name}
    </div>
  );
});

export default Usercard;
