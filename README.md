# Browser Upgrade

A simple redirect website that notifies Internet Explorer users to upgrade to a modern-day browser.

### Detection & Redirection Script:
```js
if (navigator.userAgent.includes('MSIE') || navigator.userAgent.includes('Trident')) {
  window.location.href = 'https://browserupgrade.netfliy.app';
}
```
