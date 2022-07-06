document.write( '<script>\n' );
document.write( 'var elements = document.querySelectorAll(\'.discord-dialog__close-button, .discord-dialog\')\n' );
document.write( 'for (var i = 0; i < elements.length; i++) {\n' );
document.write( '  elements[i].addEventListener(\"click\", function() {\n' );
document.write( '    toggle(\'.discord-dialog\')\n' );
document.write( '  })\n' );
document.write( '}\n' );
document.write( '</script>\n' );
document.write( '<style>\n' );
document.write( '*, *:before, *:after { box-sizing: inherit; }\n' );
document.write( '.discord-dialog a {\n' );
document.write( '  text-decoration: none;\n' );
document.write( '}\n' );
document.write( '@keyframes discord-dialog__transition {\n' );
document.write( '  0% {\n' );
document.write( '    opacity: 0;\n' );
document.write( '    bottom: -2rem;\n' );
document.write( '  }\n' );
document.write( '  100% {\n' );
document.write( '    opacity: 1;\n' );
document.write( '    bottom: 0;\n' );
document.write( '  }\n' );
document.write( '}\n' );
document.write( '.discord-dialog {\n' );
document.write( '  -webkit-tap-highlight-color: rgba(0,0,0,0);\n' );
document.write( '  box-sizing: border-box;\n' );
document.write( '  display: none;\n' );
document.write( '  z-index: 60;\n' );
document.write( '  position: fixed;\n' );
document.write( '  max-width: 24rem;\n' );
document.write( '  min-width: 18rem;\n' );
document.write( '  right: 0;\n' );
document.write( '  bottom: 0;\n' );
document.write( '  margin: 1rem;\n' );
document.write( '  background: #2e3136;\n' );
document.write( '  box-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16), 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.23);\n' );
document.write( '  color: rgba(0, 0, 0, 0.6);\n' );
document.write( '  transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), bottom 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n' );
document.write( '  animation: discord-dialog__transition 0.2s;\n' );
document.write( '}\n' );
document.write( '.discord-dialog--active {\n' );
document.write( '  display: block;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__container {\n' );
document.write( '  font-size: 1rem;\n' );
document.write( '  line-height: 1.25;\n' );
document.write( '  color: #99aab5;\n' );
document.write( '  padding: 1rem;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__logo {\n' );
document.write( '  width: auto;\n' );
document.write( '  height: 2rem;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__logo path {\n' );
document.write( '  fill: #7289DA;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__close-button {\n' );
document.write( '  float: right;\n' );
document.write( '  height: 1.5rem;\n' );
document.write( '  width: 1.5rem;\n' );
document.write( '  position: relative;\n' );
document.write( '  top: 0.25rem;\n' );
document.write( '  cursor: pointer;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__close-button path {\n' );
document.write( '  fill: #99aab5;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__close-button:hover path {\n' );
document.write( '  fill: #7a8891;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__close-button:active path {\n' );
document.write( '  fill: #5c666d;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__header, .discord-dialog__footer {\n' );
document.write( '  background: #282b30;\n' );
document.write( '  padding: 0.8rem;\n' );
document.write( '  height: 3.6rem;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__header {\n' );
document.write( '  border-bottom: 0.1rem solid #36393f;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__footer {\n' );
document.write( '  border-top: 0.1rem solid #36393f;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__btn {\n' );
document.write( '  background: #7289da;\n' );
document.write( '  color: #fff;\n' );
document.write( '  border-radius: 0.1rem;\n' );
document.write( '  float: right;\n' );
document.write( '  margin: 0.5rem;\n' );
document.write( '  font-size: 1rem;\n' );
document.write( '  padding: 0.2rem 1rem;\n' );
document.write( '  position: relative;\n' );
document.write( '  top: -0.4rem;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__btn:hover {\n' );
document.write( '  background: #677bc4;\n' );
document.write( '}\n' );
document.write( '.discord-dialog__btn:active {\n' );
document.write( '  background: #5b6eae;\n' );
document.write( '}\n' );
document.write( '/**\n' );
document.write( ' * Floating action button\n' );
document.write( ' */\n' );
document.write( '.discord-dialog__strong-text {\n' );
document.write( '  color: #b9bbbe;\n' );
document.write( '  font-weight: bold;\n' );
document.write( '  text-transform: uppercase;\n' );
document.write( '  font-size: 1rem;\n' );
document.write( '  display: block;\n' );
document.write( '  margin-bottom: 0.8rem;\n' );
document.write( '}\n' );
document.write( '.discord-button {\n' );
document.write( '  -webkit-tap-highlight-color: rgba(0,0,0,0);\n' );
document.write( '  box-sizing: border-box;\n' );
document.write( '  display: block;\n' );
document.write( '  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.12), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.24);\n' );
document.write( '  position: fixed;\n' );
document.write( '  bottom: 0;\n' );
document.write( '  right: 0;\n' );
document.write( '  z-index: 50;\n' );
document.write( '  margin: 1.25rem;\n' );
document.write( '  padding: 0.75rem;\n' );
document.write( '  border-radius: 50%;\n' );
document.write( '  height: 3.5rem;\n' );
document.write( '  background: #fff;\n' );
document.write( '  cursor: pointer;\n' );
document.write( '  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n' );
document.write( '}\n' );
document.write( '.discord-button svg {\n' );
document.write( '  height: 2rem;\n' );
document.write( '  width: 2rem;\n' );
document.write( '}\n' );
document.write( '.discord-button svg path {\n' );
document.write( '  fill: #7289da;\n' );
document.write( '}\n' );
document.write( '.discord-button:hover {\n' );
document.write( '  background: #d9d9d9;\n' );
document.write( '  box-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16), 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.23);\n' );
document.write( '}\n' );
document.write( '.discord-button:hover svg path {\n' );
document.write( '  fill: #6174b9;\n' );
document.write( '}\n' );
document.write( '.discord-button:active {\n' );
document.write( '  background: #b3b3b3;\n' );
document.write( '  box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.19), 0 0.375rem 0.375rem rgba(0, 0, 0, 0.23);\n' );
document.write( '}\n' );
document.write( '.discord-button:active svg path {\n' );
document.write( '  fill: #506099;\n' );
document.write( '}\n' );
document.write( '</style>\n' );
document.write( '\n' );
document.write( '\n' );
document.write( '<div class=\"discord-button\" onclick=\"document.querySelector(\'.discord-dialog\').className = \'discord-dialog discord-dialog--active\'\">\n' );
document.write( '  <svg class=\"discord-button__icon\" viewBox=\"0 0 24 24\"><path d=\"M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z\"></path></svg>\n' );
document.write( '</div>\n' );
document.write( '\n' );
document.write( '<div class=\"discord-dialog\">\n' );
document.write( '  <div class=\"discord-dialog__header\">\n' );
document.write( '    <a href=\"https://discordapp.com\">\n' );
document.write( '       <svg class=\"discord-dialog__logo\" viewBox=\"0 0 532 130\"><path d=\"M53.2,20.3H20v37.6l22.1,20V41.4H54c7.5,0,11.2,3.7,11.2,9.5v27.9c0,5.8-3.5,9.7-11.2,9.7H20v21.2h33.2  c17.8,0.1,34.5-8.8,34.5-29.4V50.2C87.7,29.4,71,20.3,53.2,20.3z M227.3,80.4V49.6c0-11.1,19.8-13.7,25.8-2.5l18.3-7.5  C264.3,23.7,251.1,19,240.2,19c-17.8,0-35.4,10.4-35.4,30.6v30.8c0,20.3,17.6,30.6,35,30.6c11.2,0,24.6-5.6,32-20.1l-19.6-9.1  C247.4,94.2,227.3,91.2,227.3,80.4z M166.7,53.8c-6.9-1.5-11.5-4-11.8-8.3c0.4-10.4,16.3-10.7,25.6-0.8l14.7-11.4  C186,22,175.6,19,164.8,19c-16.3,0-32.1,9.2-32.1,26.8c0,17.1,13,26.2,27.3,28.4c7.3,1,15.4,3.9,15.2,9c-0.6,9.6-20.2,9.1-29.1-1.8  L132,94.8c8.3,10.7,19.6,16.2,30.2,16.2c16.3,0,34.4-9.5,35.1-26.8C198.3,62.2,182.5,56.7,166.7,53.8z M99.8,109.7h22.4V20.3H99.8  V109.7z M477.5,20.3h-33.2v37.6l22.1,20V41.4h11.8c7.5,0,11.2,3.7,11.2,9.5v27.9c0,5.8-3.5,9.7-11.2,9.7h-34v21.2h33.2  c17.8,0.1,34.5-8.8,34.5-29.4V50.2C512,29.4,495.3,20.3,477.5,20.3z M314.6,19c-18.4,0-36.7,10.1-36.7,30.7v30.6  c0,20.5,18.4,30.7,36.9,30.7c18.4,0,36.7-10.2,36.7-30.7V49.7C351.5,29.2,333,19,314.6,19z M329,80.3c0,6.4-7.2,9.7-14.3,9.7  c-7.2,0-14.4-3.2-14.4-9.7V49.7c0-6.6,7-10.1,14-10.1c7.3,0,14.7,3.2,14.7,10.1V80.3z M431.8,49.7c-0.5-21-14.7-29.4-33-29.4h-35.5  v89.5h22.7V81.3h4l20.6,28.4h28L414.4,79C425.2,75.6,431.8,66.3,431.8,49.7z M399.2,61.8h-13.2V41.4h13.2  C413.4,41.4,413.4,61.8,399.2,61.8z\"/></svg>\n' );
document.write( '    </a>\n' );
document.write( '\n' );
document.write( '    <svg class=\"discord-dialog__close-button\" onclick=\"document.querySelector(\'.discord-dialog\').className = \'discord-dialog\'\" viewBox=\"0 0 24 24\">\n' );
document.write( '      <path fill=\"#000000\"   d=\"M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z\" />\n' );
document.write( '    </svg>\n' );
document.write( '  </div>\n' );
document.write( '\n' );
document.write( '  <div class=\"discord-dialog__container\">\n' );
document.write( '    <strong class=\"discord-dialog__strong-text\">Join our Discord! Talk to the community by text or on voice chat!</strong>\n' );
document.write( '\n' );
document.write( '    Discord is an all-in-one voice and text chat for gamers that is free, secure, and works on both your desktop and phone!\n' );
document.write( '\n' );
document.write( '  </div>\n' );
document.write( '\n' );
document.write( '  <div class=\"discord-dialog__footer\">\n' );
document.write( '    <a href=\"https://discord.gg/TgW8hGJ" class=\"discord-dialog__btn\">Join now</a>\n' );
document.write( '  </div>\n' );
document.write( '</div>\n' );

       