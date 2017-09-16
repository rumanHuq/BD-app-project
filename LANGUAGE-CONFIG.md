# React Intl

> translations are saved in nested objects

> IntlProvider is Wrapper for react-intl

------

1. import locales from react-intl to parse plural and currency
  ```js
    import en from 'react-intl/local-data/en'
    import bn from 'react-intl/local-data/bn'
  ```
2. use addLocaleData from react intl to integrate locales imported above
  ```js
    addLocaleData([...en, ...bn]);
  ````
3. Navigate locale from browser navigator API to get default locale
  ```js
    const locale =
      (navigator.languages && 
      navigator.languages[navigator.languages.indexOf('bn')]) ||
      navigator.language ||
      navigator.userLanguage ||
      'en-US';
  ```
4. Wrap IntlProvider around Main React component providing locale(set locale langugage) props and messages props(get custom translations)
  ```html
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <App />
    </IntlProvider>
  ```