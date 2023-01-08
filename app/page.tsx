import {  customAlphabet } from "nanoid";
import { FC } from "react";

const nanoid =  customAlphabet('0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM@#_')

const PasswordZone:FC<{password: string}> = ({password}) => {
  return (
    <div className="password-card__zone">
      <div>{password.slice(0,4)}</div>
      <div>{password.slice(4)}</div>
    </div>
  );
};

export default function Page() {
  const passwords = [...Array(3)].map(p => nanoid(8))

  return (
    <div className="password-card-container">
      <div className="password-card__head">
        <div className="password-card__logo">LOGO</div>
        <div className="password-card__account">
          Account
        </div>·
      </div>
      <div className="password-card__body">
        <div className="password-card__zones">
          {
            passwords.map(p => <PasswordZone key={p} password={p} />)
          }
        </div>
      </div>
    </div>
  );
}
