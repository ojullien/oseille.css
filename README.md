# Oseille.css

*A small, responsive and accessible CSS framework.*

**Oseille.css** is a fork of the [mini.css](https://github.com/Chalarangelo/mini.css) (v3 gluon) framework, intended to add **accessibility** on top of it.
It includes new elements styling and is still lightweight **(~ 8k gzip)**.
It is also more **flexible** on configuration using **custom properties** and **Dart Sass** as prepocessor.

[Features](#features) | [Setup](#setup) | [Themes](#Themes) | [Documentation](#documentation) | [Development](#development) | [Test](#test) | [Contributing](#contributing) | [License](#license)

## Features

- Accessible
- Responsive
- Light-weight
- 1-line flexbox layout
- Modular Components
- Ease to use and customize
- Built using Dart Sass

**Oseille.css** is perfect for your *personal website*, *blog*, or *side project*.

## Setup

### Install via NPM

The quickest and easiest way to include **oseille.css** in to your project is through NPM

```shell
// Using NPM
npm install oseille.css
```

### Install via CDN

**Oseille.css** is also available via [CDN](https://unpkg.com/oseille.css@latest/dist/oseille.css)

```html
// Via CDN
<link rel="stylesheet" href="https://unpkg.com/oseille.css@latest/dist/oseille.css" />
```

## Themes

### Editing the CSS variables

As **oseille.css** is using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).
You may open your browser dev-tools, edit the custom properties your are looking for.
Then, to override the variables, just add them to your :root selector.

```css
:root {
  --fore-color: white;
  --back-color: black;
}
```

### Creating a flavor

You may also create your own flavor for a deeper customization.
The use of [Dart Sass](https://sass-lang.com/documentation) configuration features and the the modular structure of the oseille.css framework make you customize more quickly.
It is easy to start making your own flavor, just by tweaking the [default flavor](https://github.com/ojullien/oseille.css/blob/master/src/flavors/oseille.scss).

## Documentation

For instructions on how to use, best practices, templates and other usage information, please visit the framework's [documentation](https://ojullien.github.io/oseille.css/).

## Development

***Oseille.css** is under active development. Design are subject to change without notice.*

Requires:

- npm v6.14.8
- sass v1.27.0

1. Install **oseille.css** framework and the dependencies using `npm install`
2. Build the flavors using `npm run build`

## Test

Use `npm run test` to generate mutliple css files for each elements and components.

## Contributing

Thanks you for taking the time to contribute. Please fork the repository and make changes as you'd like.

If you have any ideas, just open an [issue](https://github.com/ojullien/oseille.css/issues) and tell us what you think. Pull requests are also warmly welcome.

If you encounter any **bugs**, please open an [issue](https://github.com/ojullien/oseille.css/issues).

Be sure to include a title and clear description,as much relevant information as possible, and a code sample or an executable test case demonstrating the expected behavior that is not occurring.

## License

**Oseille.css** is an open-source framework and is licensed under the [MIT License](https://github.com/ojullien/oseille.css/blob/master/LICENSE).
