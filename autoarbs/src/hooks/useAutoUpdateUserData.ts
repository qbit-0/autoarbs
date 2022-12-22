import { useEffect } from "react";
import { readUserByToken } from "../api/account";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  accountActions,
  selectAutoUpdateIntervalId,
  selectToken,
  selectUserData,
} from "../features/account/accountSlice";

const useAutoUpdateUserData = () => {
  const userData = useAppSelector(selectUserData);
  const token = useAppSelector(selectToken);
  const autoUpdateIntervalId = useAppSelector(selectAutoUpdateIntervalId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userData || !token) return;
    if (autoUpdateIntervalId !== null) return;

    const intervalId = setInterval(async () => {
      try {
        const res = await readUserByToken(userData.email, token);
        const data = res.data;

        switch (data.statusCode) {
          case "200":
            dispatch(
              accountActions.login({
                userData: data.userData,
                token: token,
              })
            );
            break;
        }
      } catch (err) {
        console.error(err);
      }
    }, 10000);
    dispatch(accountActions.setAutoUpdateIntervalId(intervalId));

    return () => {
      if (intervalId === autoUpdateIntervalId) {
        clearInterval(intervalId);
        dispatch(accountActions.setAutoUpdateIntervalId(null));
      }
    };
  }, [userData, token, autoUpdateIntervalId, dispatch]);

  return userData;
};

export default useAutoUpdateUserData;
