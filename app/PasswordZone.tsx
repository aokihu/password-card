'use client';

import { customAlphabet } from "nanoid";
import { useState, useEffect } from 'react'

export default function PasswordZone() {
  const nanoid = customAlphabet('0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM@#_')
  const [code1, setCode1] = useState('')
  const [code2, setCode2] = useState('')

  useEffect(() => {
    setCode1(nanoid(4))
    setCode2(nanoid(4))
  }, [])

  return (
    <div className="password-card__zone">
      <div>{code1}</div>
      <div>{code2}</div>
    </div>
  );
};