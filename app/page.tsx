import {  customAlphabet } from "nanoid";

const nanoid =  customAlphabet('0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM@#_')

const PasswordZone = () => {
  return (
    <div className="password-card__zone">
      <div>{nanoid(4)}</div>
      <div>{nanoid(4)}</div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="password-card-container">
      <div className="password-card__head">
        <div className="password-card__logo">LOGO</div>
        <div className="password-card__account">
          Account
        </div>
      </div>
      <div className="password-card__body">
        <div className="password-card__zones">
          <PasswordZone />
          <PasswordZone />
          <PasswordZone />
        </div>
      </div>
    </div>
  );
}
