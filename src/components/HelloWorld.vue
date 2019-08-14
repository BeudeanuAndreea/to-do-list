<template>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>vue_test</title>
  </head>

  <body>

    <div id="app">
      <input type="text" v-on:input="changeTitle">
      <p>{{ title }}</p>
    </div>

    <!-- built files will be auto injected -->
  </body>

  </html>

</template>

<script>
  new Vue({
    el: '#app',
    data: {
      title: 'Hello World'
    },
    methods: {
      changeTitle: function (event) {
        this.title = event.target.value;
      }
    }
  });

</script>