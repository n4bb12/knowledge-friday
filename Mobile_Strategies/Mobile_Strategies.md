---
marp: true
---

<!-- marp: true -->
<!-- paginate: true -->
<!-- headingDivider: 3 -->
<!-- footer: '[Abraham Schilling](https://github.com/n4bb12), 17.07.2020' -->

<!-- N4BB12 Theme -->
<style>
  section {
    font-size: 1.5rem;
  }
  img {
    display: inline;
  }
  table img {
    vertical-align: text-bottom;
  }
  section > img {
    display: table;
    margin: 0 auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #224466;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    width: 100%;
    text-align: center;
  }
  blockquote,
  ul,
  ol,
  p,
  table {
    width: auto;
    margin: 0 auto 1rem;
  }
  strong {
    color: #0366d6 !important;
  }
  footer {
    font-size: 0.75rem;
  }
  footer a {
    text-decoration: underline;
    color: inherit;
  }
</style>

<!-- Presentation Styles -->
<style>
h1 { color: #FFDC5D; text-shadow: 0 0 1rem rgba(0, 0, 0, 0.5); }
</style>

# Mobile —<br>Native & Web Strategies

<style scoped>
h1 { padding-top: 25%; padding-right: 25%; }
</style>

![bg](https://images.unsplash.com/photo-1528123778681-01e39b42808e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)

## Mobile OS Share

![](https://upload.wikimedia.org/wikipedia/en/1/18/Mobile_OS_market_share_from_IDC_till_2016_Q3.png)

[Source](https://en.wikipedia.org/wiki/Mobile_operating_system#Market_share) | [Animation](https://www.youtube.com/watch?v=MMyMB4zm9so) | [Breakdown & History](https://en.wikipedia.org/wiki/Mobile_operating_system)

## Revenue & Download Share

[Source](https://sensortower.com/blog/app-revenue-and-downloads-2019)

![bg left:70% height: 100%](https://s3.amazonaws.com/sensortower-itunes/blog/2020/01/2019-app-downloads-worldwide.png)
![bg right:70% height: 100%](https://s3.amazonaws.com/sensortower-itunes/blog/2020/01/2019-app-revenue-worldwide.png)

## Platforms

<style scoped>
section { justify-content: flex-start; }
</style>

![bg height:150px](https://upload.wikimedia.org/wikipedia/commons/5/54/Blank_Canvas_on_Transparent_Background.png)
![bg height:150px](https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png)
![bg height:100px](https://upload.wikimedia.org/wikipedia/commons/4/48/Apple_iOS_new.svg)
![bg height:150px](https://upload.wikimedia.org/wikipedia/commons/7/74/Internet-web-browser.svg)
![bg height:150px](https://upload.wikimedia.org/wikipedia/commons/5/54/Blank_Canvas_on_Transparent_Background.png)

## Outline

Launch Considerations
Platform Features
Development Frameworks

# Launch Considerations

<style scoped>
h1 { padding-bottom: 45%; padding-left: 45%; }
p { text-shadow: 0 0 1rem rgba(0, 0, 0, 0.5); }
p { color: white; font-weight: bold; }
</style>

![bg](https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2500&q=80)

## User Retention

![height:400px](https://d35fo82fjcw0y8.cloudfront.net/2017/09/06112221/User-Retention-Curve.png)

25% of users abandon apps after one use.

[Source](https://clevertap.com/blog/guide-to-user-retention/)

## Store Marketing Costs

![height:500px](https://tm.shgstatic.com/prod/public/inline-images/Graph-1_app-marketing-budget_pt.-2%20%281%29.png)

[Source](https://themanifest.com/mobile-apps/why-marketing-critical-mobile-app-success)

## Store Fees

- $25 one-time on Android / $99 yearly on iOS
- 30% commission on app purchases
- 30% commission on first-year subscriptions, then 15%
- Physical goods cannot be sold with in-app payments
- Digital goods must be sold with in-app payments

[Netflix](https://help.netflix.com/en/node/25097) | [Spotify](https://support.spotify.com/us/account_payment_help/payment_help/spotify-through-the-app-store/)

## Store Updates

- Submission reviews
- Possibility of rejection

--> *Delay*

[Review Guidelines 4.2](https://developer.apple.com/app-store/review/guidelines/#minimum-functionality)

## Web Fees

- [PayPal](https://www.paypal.com/de/webapps/mpp/paypal-fees): 2.49% - 1.49% + €0.35
- [Google Checkout](https://payments.google.com/seller/fees.html): 2.90% - 1.90% + $0.30
- [Amazon Payments](https://pay.amazon.de/help/SKX7JCY3G3SP73U): 1.90% - 1.20% + €0.35
- [Stripe](https://stripe.com/en-de/pricing): 1.40% + €0.25
- [Klarna](https://stripe.com/en-de/pricing): 1.35% + €0.20
- Domain and web server costs

## Web Launch & Update

- Deploy whenever you like
- Deploy as frequently as you like

## Finding the App

- Featured store apps
- Top lists
- Store page
- [Android Deep Links](https://developer.android.com/training/app-links/deep-linking) | [iOS Universal Links](https://developer.apple.com/ios/universal-links/)
- [Google Play Pass](https://play.google.com/about/play-pass/) | [Apple Arcade](https://www.apple.com/de/apple-arcade/)

--> *Get users through the web*

## Finding Web Content

- Search indexing
- Search result previews
- Shopping search
- Image search
- Various sources of links
- Linking is easy and specific

## Store Onboarding

High-friction install-first philosophy:
(Find) - Download (Wait) - Install (Wait) - Open - Use

- [Android Instant Apps](https://www.youtube.com/watch?v=oispNrpGnIY) | [iOS App Clips](https://www.youtube.com/watch?v=IqP_iojZXxQ)

--> *Requires a website*

## Web Onboarding

Use-first philosophy:
(Find) - Open - Use - (Install)

## Market Data, Analytics & News

- https://www.businessofapps.com/data/app-statistics/
- https://www.businessofapps.com/data/app-revenues/
- https://www.appannie.com/en/insights/

# Platform Features

<style scoped>
h1 { padding-top: 40%; }
</style>

![bg](https://images.unsplash.com/photo-1517098343-2547f8016001?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80)

----

![height:75px](https://upload.wikimedia.org/wikipedia/commons/d/d5/Progressive_Web_Apps_Logo.svg)

Web applications built on standard browser APIs 
that feel and can be used like native mobile apps.

## Features (OS Integration, Sensors)

https://whatwebcando.today

- Live feature test
- Detailed descriptions
- Code examples and API references
- Desktop & Mobile stats

## Case Studies

Facebook Lite, Twitter Lite, Aliexpress, Forbes, Pinterest, 
Uber, Tinder, Flipboard, Starbucks, Alibaba, Lancome

- [Google PWA Case Studies](https://developers.google.com/web/showcase)
- [PWA Stats Case Studies](https://www.pwastats.com/)
- [Mobile Web vs. Native Apps or Why You Want Both](https://www.lukew.com/ff/entry.asp?1954)

# Frameworks

<style scoped>
h1 { padding-bottom: 50%; text-align: left }
</style>

![bg](https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)

## Native & Cross-Platform Frameworks

<style scoped>
section { justify-content: flex-start; }
</style>

![bg height:150px](https://upload.wikimedia.org/wikipedia/commons/5/54/Blank_Canvas_on_Transparent_Background.png)
![bg height:75px](https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png) 
![bg height:75px](https://upload.wikimedia.org/wikipedia/commons/4/48/Apple_iOS_new.svg)
![bg height:75px](https://cdn.worldvectorlogo.com/logos/flutter-logo.svg)
![bg height:75px](https://reactnative.dev/img/header_logo.svg) 
![bg height:75px](https://ionicframework.com/img/meta/favicon-192x192.png) 
![bg height:75px](https://upload.wikimedia.org/wikipedia/commons/4/4f/NativeScript_logo.png) 
![bg height:75px](https://seeklogo.com/images/X/xamarin-logo-348B1EB629-seeklogo.com.png) 
![bg height:75px](https://s3.amazonaws.com/uno-website-assets/wp-content/uploads/2018/08/22113759/UnoLogoSmall.png) 
![bg height:150px](https://upload.wikimedia.org/wikipedia/commons/5/54/Blank_Canvas_on_Transparent_Background.png)

<!-- Nativescript !== WebAssembly -->

## Charactersitics

<style scoped>
table { font-size: 0.9rem; }
table img { margin-right: 0.5ch; max-height: 20px; width: 20px; }
</style>

| SDK                                                                                                       | Maintainer | Language                                                                                                  | Library               | Primary IDE                            | Output Code                         | Output UI                                   | OS                  |                                                                                        |
| --------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------- | ----------------------------------- | ------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| ![](https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png) Android                    | Google     | Kotlin                                                                                                    | Android SDK           | Android Studio                         | Native                              | native                                      | Android             |                                                                                        |
| ![](https://upload.wikimedia.org/wikipedia/commons/4/48/Apple_iOS_new.svg) iOS                            | Apple      | Swift                                                                                                     | iOS SDK               | Xcode                                  | Native                              | native                                      | iOS                 |                                                                                        |
| ![](https://cdn.worldvectorlogo.com/logos/flutter-logo.svg) Flutter                                       | Google     | Dart                                                                                                      | Flutter SDK           | Android Studio, IntelliJ IDEA, VS Code | Native                              | platform-specific [Skia](https://skia.org/) | (Web), Android, iOS | [Architecture](https://flutter.dev/docs/resources/technical-overview)                  |
| ![](https://reactnative.dev/img/header_logo.svg) React Native                                             | Facebook   | TypeScript                                                                                                | React                 | Any                                    | JavaScript, Native Widgets (Bridge) | native                                      | (Web), Android, iOS | [Architecture](https://reactnative.dev/docs/intro-react-native-components)             |
| ![](https://ionicframework.com/img/meta/favicon-192x192.png) Ionic                                        | Drifty     | TypeScript                                                                                                | Angular, React, (Vue) | Any                                    | JavaScript, Native APIs (WebView)   | platform-specific, (shared)                 | Web, Android, iOS   | [Architecture](https://ionicframework.com/docs/core-concepts/fundamentals)             |
| ![](https://upload.wikimedia.org/wikipedia/commons/4/4f/NativeScript_logo.png) NativeScript               | nStudio    | TypeScript                                                                                                | Angular, Vue          | Any                                    | JavaScript, Native APIs (Bridge)    | native                                      | Web, Android, iOS   | [Architecture](https://docs.nativescript.org/angular/core-concepts/technical-overview) |
| ![](https://seeklogo.com/images/X/xamarin-logo-348B1EB629-seeklogo.com.png) Xamarin                       | Microsoft  | C#, [XAML](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/essential-xaml-syntax) | .NET                  | Visual Studio                          | Native / IL                         | platform-specific [Skia](https://skia.org/) | Android, iOS        | [Architecture](https://docs.microsoft.com/en-us/xamarin/get-started/what-is-xamarin)   |
| ![](https://s3.amazonaws.com/uno-website-assets/wp-content/uploads/2018/08/22113759/UnoLogoSmall.png) Uno | nventive   | C#, XAML                                                                                                  | .NET, Uno.UI          | Visual Studio                          | Native / IL / WebAssembly           | platform-specific, (shared)                 | Web, Android, iOS   | [Architecture](https://platform.uno/how-it-works/)                                     |

## Framework Popularity

![height:400px](star-history.t9t.io_.png)

[Source](https://star-history.t9t.io/#flutter/flutter&facebook/react-native&ionic-team/ionic-framework&NativeScript/NativeScript&unoplatform/uno)

## Language & Platform Popularity

[Languages](https://insights.stackoverflow.com/survey/2020#technology-programming-scripting-and-markup-languages-professional-developers)
[Platforms](https://insights.stackoverflow.com/survey/2020#technology-platforms)

![height:400px](https://fossbytes.com/wp-content/uploads/2020/05/stack-overflow_most-loved-dreaded-wanted-programming-language.jpg)

## AMP

![height:75px](https://amp.dev/static/img/favicon.png)

[Docs](https://amp.dev)
[How it works](https://amp.dev/about/how-amp-works)
[Cache](https://amp.dev/documentation/guides-and-tutorials/learn/amp-caches-and-cors/how_amp_pages_are_cached)
[Playground](https://playground.amp.dev)

# ✋ Thank you!

<style scoped>
h1 { text-align: start; padding-left: 5%; padding-top: 40%; }
</style>

![bg](https://images.unsplash.com/photo-1546711996-c0f8070e422c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)
