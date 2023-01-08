'use client';

import {  customAlphabet } from "nanoid";
import { FC } from "react";

const nanoid =  customAlphabet('0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM@#_')

export default function PasswordZone() {
  return (
    <div className="password-card__zone">
      <div>{nanoid(4)}</div>
      <div>{nanoid(4)}</div>
    </div>
  );
};