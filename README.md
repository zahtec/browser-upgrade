# Browser Upgrade

A simple redirect website that allows old Internet Explorer users to easily upgrade.

### Detection & Redirection script
```js
if (navigator.userAgent.includes('MSIE') || navigator.userAgent.includes('Trident')) {
  window.location.href = 'https://browserupgrade.netfliy.com';
}
```
