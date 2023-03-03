So I cloned this repo on my new mac in Sep 2022 and got:
Failed to compile:
/Users/stevedegermark/websites/glens-new-litterbox/src/TypingUseContext/ColorPixel.tsx
TypeScript error in /Users/stevedegermark/websites/glens-new-litterbox/src/TypingUseContext/ColorPixel.tsx(40,7):
Type 'Properties<string | 0>' is not assignable to type 'Properties<string | number, string & {}>'.
Types of property 'fontSizeAdjust' are incompatible.
Type 'FontSizeAdjustProperty | undefined' is not assignable to type 'FontSizeAdjust | undefined'.
Type 'string' is not assignable to type 'FontSizeAdjust | undefined'. TS2322

    38 |     <div
    39 |       className="color-pixel"

> 40 | style={style}

       |       ^
    41 |       onClick={(evt) => {
    42 |         blueValueSet({ ...blueValue, selectedHexValue: hexValue });
    43 |       }}

So... maybe it's because when I installed node on this box I got a different version? Maybe it's an npm version thing? React version? Maybe something about @types/node?

I ran: npx create-react-app default-sep-2022 --template typescript
and the differences in package.json are:
my old app:
"dependencies": {
"@storybook/react": "^6.4.19",
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"@types/jest": "^26.0.23",
"@types/node": "^15.12.4",
"@types/react": "^17.0.11",
"@types/react-dom": "^17.0.8",
"babel-loader": "8.1.0",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-scripts": "4.0.3",
"react-virtual": "^2.7.1",
"typescript": "^4.1.2",
"web-vitals": "^1.0.1",
"webpack": "4.44.2"
},

my fresh new app has:
"dependencies": {
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"@types/jest": "^27.5.2",
"@types/node": "^16.11.56",
"@types/react": "^18.0.18",
"@types/react-dom": "^18.0.6",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "5.0.1",
"typescript": "^4.8.2",
"web-vitals": "^2.1.4"
},

OK, maybe I can just copy typingUseContext/\* into the new CRA folder and see what happens.

It works. So, I copied the dependencies from the fresh new app to replace what I have in my current version of glens-new-litterbox.
