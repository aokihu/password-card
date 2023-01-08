import PasswordZone from "./PasswordZone";

export default function Page() {
  return (
    <div className="password-card__warp">
      <div className="password-card__container">
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
    </div>
  );
}
