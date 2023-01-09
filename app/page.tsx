import PasswordZone from "./PasswordZone";
import { Suspense } from "react";

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
            <Suspense>
              <PasswordZone />
              <PasswordZone />
              <PasswordZone />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
