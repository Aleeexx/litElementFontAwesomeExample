# litElementFontAwesomeExample
Tiniest Font Awesome Icon in Lit Element Component Example

---

To start run 
    npm i 
and
    npm start

---

    font-family: 'Font Awesome 5 Free' 
is defined in 
    src/index.scss

Content for span in src/components/iconexample.ts
     <span class="icon-should-be-here"></span>
     
is set in src/components/iconexample.component.scss
    .icon-should-be-here {
        color: #333;
        &:before {
            font: normal normal normal 1.25rem/1 'Font Awesome 5 Free';
            content: "\f141";
        }
    }
