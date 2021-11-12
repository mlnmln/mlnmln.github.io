<template>
  <div class="layout AutoPro-Regular">
    <header class="Header">
      <div class="Header-toggle"></div>
      <div class="Header-logo Logo">
        <div class="Logo-wrapper">
          <div>
            <g-image
              class="Logo-img"
              src="../assets/images/milan@2x.jpg"
              width="44"
              alt=""
            />
          </div>
          <div>
            <div class="Logo-name">Milan&nbsp;Matull</div>
            <div class="Logo-title">Technologist</div>
          </div>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.AutoPro-Regular {
  font-family: "AutoPro-Reg", sans-serif;
  font-weight: normal;
  font-style: normal;
}

* {
  font-weight: normal;
  box-sizing: border-box;
  margin: 0;
}

:root {
  --accent: rgb(47, 99, 255);
}

address {
  font-style: normal;
}

a {
  color: var(--accent);
}

h2 {
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 0.7rem;
  margin-top: 2.1rem;
  color: rgba(0, 0, 0, 0.6);
}

p {
  margin-bottom: calc(1em * 1.4);
}

small {
  font-size: 0.8em;
}

html,
body {
  margin: 0;
  padding: 0;
}

html {
  font-size: calc(18px + (27 - 18) * ((100vw - 320px) / (1440 - 320)));
  line-height: 1.4;
  color: #111;
  background-color: #f5f5f5;
}

.Header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  border-bottom: 1px solid #ddd;
}

.Header-toggle {
  width: calc(44px + 1em);
  height: calc(44px + 1em);
  display: flex;
  align-items: center;
  justify-content: center;
}

.Header-icon {
  fill: currentColor;
  width: 24px;
  height: 24px;
}

.Header-logo {
  padding-left: 1em;
}

.Logo {
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
}

.Logo > * {
  display: block;
}

.Logo-wrapper {
  display: flex;
  align-items: center;
}

.Logo-img {
  border-radius: 50%;
  margin-right: 0.5em;
  width: 44px;
  display: block;
}

.Text {
  max-width: 48ch;
  margin: calc(64px + 1.7rem) auto;
  padding: 0 calc(18px + (27 - 18) * ((100vw - 320px) / (1440 - 320)));
}

.Text p:first-of-type {
  opacity: 1;
  font-size: 1em;
  line-height: 1.4;
  margin-left: 0;
  margin-right: 0;
}

.Text p {
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.8);
}

.Text-location {
  color: rgba(0, 0, 0, 0.5);
}

.Card {
  background-color: #fff;
  padding: 0.7rem;
  border-radius: 1px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
}

@media (prefers-color-scheme: dark) {
  html {
    background-color: #111;
    color: #eee;
  }

  .Header {
    background-color: #111;
    color: #eee;
    border-bottom: 1px solid #333;
  }

  h2 {
    color: rgba(255, 255, 255, 0.6);
  }

  .Text p {
    color: rgba(240, 240, 240, 0.8);
  }

  .Text-location {
    color: rgba(240, 240, 240, 0.5);
  }

  .Card {
    background-color: #000;
    box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0;
  }
}
</style>
