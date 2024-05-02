'use client'
import Script from 'next/script'
import React from 'react'

const CookieBanner = () => {
  return (
    <>
        <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="30b731bc-e9a8-45a0-876c-abb51bdb9480" data-blockingmode="auto" type="text/javascript"></Script>
        {/* <Script id="CookieDeclaration" src="https://consent.cookiebot.com/30b731bc-e9a8-45a0-876c-abb51bdb9480/cd.js" type="text/javascript" async></Script> */}
    </>
  )
}

export default CookieBanner
