import { useSetRecoilState } from 'recoil';
import { LoginStatus, UserStatus } from './../store/LoginState';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const setIsLogin = useSetRecoilState(LoginStatus);
  const setUserInfo = useSetRecoilState(UserStatus);
  let navigate = useNavigate();

  const handleLogin = (data) => {
    setIsLogin(true);
    setUserInfo(data);
  };

  const handleSuccessfulAuthentication = (data) => {
    handleLogin(data);
    navigate('/technologies');
  };
  return { setIsLogin, setUserInfo, handleSuccessfulAuthentication };
};
